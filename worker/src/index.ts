import { sendMail } from './smtp'

export interface Env {
  ALLOWED_ORIGIN: string
  SMTP_HOST: string
  SMTP_PORT: string
  SMTP_USER: string
  SMTP_FROM: string
  SMTP_TO: string
  SMTP_PASSWORD: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function corsHeaders(origin: string): HeadersInit {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  }
}

function json(body: unknown, status: number, origin: string): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = env.ALLOWED_ORIGIN

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) })
    }

    if (request.method !== 'POST') {
      return json({ ok: false, error: 'Methode nicht erlaubt.' }, 405, origin)
    }

    const requestOrigin = request.headers.get('Origin')
    if (requestOrigin && requestOrigin !== origin) {
      return json({ ok: false, error: 'Nicht erlaubt.' }, 403, origin)
    }

    let payload: unknown
    try {
      payload = await request.json()
    } catch {
      return json({ ok: false, error: 'Ungültige Anfrage.' }, 400, origin)
    }

    if (typeof payload !== 'object' || payload === null) {
      return json({ ok: false, error: 'Ungültige Anfrage.' }, 400, origin)
    }
    const data = payload as Record<string, unknown>

    // Honeypot: a field real visitors never see or fill in. If it's set,
    // silently pretend success instead of tipping the bot off.
    const honeypot = typeof data.honeypot === 'string' ? data.honeypot.trim() : ''
    if (honeypot !== '') {
      return json({ ok: true }, 200, origin)
    }

    const type = data.type === 'newsletter' ? 'newsletter' : data.type === 'contact' ? 'contact' : null
    if (!type) {
      return json({ ok: false, error: 'Unbekannter Formulartyp.' }, 400, origin)
    }

    const email = typeof data.email === 'string' ? data.email.trim() : ''
    if (!EMAIL_RE.test(email) || email.length > 254) {
      return json({ ok: false, error: 'Bitte eine gültige E-Mail-Adresse angeben.' }, 400, origin)
    }

    let subject: string
    let text: string

    if (type === 'contact') {
      const name = typeof data.name === 'string' ? data.name.trim() : ''
      const message = typeof data.message === 'string' ? data.message.trim() : ''
      if (!name || name.length > 200) {
        return json({ ok: false, error: 'Bitte einen Namen angeben.' }, 400, origin)
      }
      if (!message || message.length > 5000) {
        return json({ ok: false, error: 'Bitte eine Nachricht angeben.' }, 400, origin)
      }
      subject = `Neue Kontaktanfrage von ${name} über die Website`
      text = `Neue Nachricht über das Kontaktformular auf querbeet-rinteln.de:\n\nName: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}\n`
    } else {
      subject = `Neue Newsletter-Anmeldung: ${email}`
      text = `Neue Newsletter-Anmeldung über die Website:\n\nE-Mail: ${email}\n`
    }

    try {
      await sendMail(
        {
          host: env.SMTP_HOST,
          port: Number(env.SMTP_PORT),
          user: env.SMTP_USER,
          password: env.SMTP_PASSWORD,
          from: env.SMTP_FROM,
          to: env.SMTP_TO,
        },
        { subject, text, replyTo: email },
      )
    } catch (error) {
      console.error('SMTP send failed', error)
      return json(
        { ok: false, error: 'Der Versand ist fehlgeschlagen. Bitte versuchen Sie es später erneut.' },
        502,
        origin,
      )
    }

    return json({ ok: true }, 200, origin)
  },
}
