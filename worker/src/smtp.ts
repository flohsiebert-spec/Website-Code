import { connect } from 'cloudflare:sockets'

export class SmtpError extends Error {}

export interface SmtpConfig {
  host: string
  port: number
  user: string
  password: string
  from: string
  to: string
}

export interface Mail {
  subject: string
  text: string
  replyTo?: string
}

/** Reads whole CRLF-terminated lines out of a socket's readable stream. */
class LineReader {
  private reader: ReadableStreamDefaultReader<Uint8Array>
  private decoder = new TextDecoder()
  private buffer = ''

  constructor(readable: ReadableStream<Uint8Array>) {
    this.reader = readable.getReader()
  }

  async readLine(): Promise<string> {
    while (!this.buffer.includes('\r\n')) {
      const { value, done } = await this.reader.read()
      if (done) {
        if (this.buffer.length > 0) {
          const line = this.buffer
          this.buffer = ''
          return line
        }
        throw new SmtpError('SMTP-Verbindung wurde unerwartet geschlossen.')
      }
      this.buffer += this.decoder.decode(value, { stream: true })
    }
    const idx = this.buffer.indexOf('\r\n')
    const line = this.buffer.slice(0, idx)
    this.buffer = this.buffer.slice(idx + 2)
    return line
  }

  release() {
    this.reader.releaseLock()
  }
}

class SmtpWriter {
  private writer: WritableStreamDefaultWriter<Uint8Array>
  private encoder = new TextEncoder()

  constructor(writable: WritableStream<Uint8Array>) {
    this.writer = writable.getWriter()
  }

  async write(text: string) {
    await this.writer.write(this.encoder.encode(text))
  }

  release() {
    this.writer.releaseLock()
  }
}

/** A full (possibly multi-line, e.g. "250-...") SMTP reply. */
async function readReply(reader: LineReader): Promise<{ code: number; lines: string[] }> {
  const lines: string[] = []
  for (;;) {
    const line = await reader.readLine()
    lines.push(line)
    const code = Number(line.slice(0, 3))
    if (line.charAt(3) !== '-') {
      return { code, lines }
    }
  }
}

async function expectCode(reader: LineReader, expected: number): Promise<void> {
  const { code, lines } = await readReply(reader)
  if (code !== expected) {
    throw new SmtpError(`Unerwartete SMTP-Antwort (erwartet ${expected}, erhalten ${code}): ${lines.join(' | ')}`)
  }
}

function base64Encode(input: string): string {
  const bytes = new TextEncoder().encode(input)
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary)
}

function encodeHeaderValue(value: string): string {
  // RFC 2047: always base64-encode so umlauts etc. are safe regardless of content.
  return `=?UTF-8?B?${base64Encode(value)}?=`
}

/** SMTP "dot-stuffing": a line starting with "." must be escaped as "..". */
function dotStuff(text: string): string {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .map((line) => (line.startsWith('.') ? `.${line}` : line))
    .join('\r\n')
}

export async function sendMail(config: SmtpConfig, mail: Mail): Promise<void> {
  const socket = connect(
    { hostname: config.host, port: config.port },
    { secureTransport: 'on', allowHalfOpen: false },
  )

  const reader = new LineReader(socket.readable)
  const writer = new SmtpWriter(socket.writable)

  try {
    await expectCode(reader, 220) // server greeting

    await writer.write('EHLO querbeet-rinteln.de\r\n')
    await expectCode(reader, 250)

    await writer.write('AUTH LOGIN\r\n')
    await expectCode(reader, 334)

    await writer.write(`${base64Encode(config.user)}\r\n`)
    await expectCode(reader, 334)

    await writer.write(`${base64Encode(config.password)}\r\n`)
    await expectCode(reader, 235)

    await writer.write(`MAIL FROM:<${config.from}>\r\n`)
    await expectCode(reader, 250)

    await writer.write(`RCPT TO:<${config.to}>\r\n`)
    await expectCode(reader, 250)

    await writer.write('DATA\r\n')
    await expectCode(reader, 354)

    const headers = [
      `From: Querbeet Website <${config.from}>`,
      `To: <${config.to}>`,
      mail.replyTo ? `Reply-To: <${mail.replyTo}>` : null,
      `Subject: ${encodeHeaderValue(mail.subject)}`,
      `Date: ${new Date().toUTCString()}`,
      `Message-ID: <${crypto.randomUUID()}@querbeet-rinteln.de>`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=utf-8',
      'Content-Transfer-Encoding: 8bit',
    ]
      .filter((line): line is string => line !== null)
      .join('\r\n')

    await writer.write(`${headers}\r\n\r\n${dotStuff(mail.text)}\r\n.\r\n`)
    await expectCode(reader, 250)

    await writer.write('QUIT\r\n')
    try {
      await expectCode(reader, 221)
    } catch {
      // Server already closing the connection — not worth failing the request over.
    }
  } finally {
    reader.release()
    writer.release()
    socket.close()
  }
}
