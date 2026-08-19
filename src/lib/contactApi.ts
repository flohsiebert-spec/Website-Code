const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

export type ContactPayload =
  | { type: 'contact'; name: string; email: string; message: string; honeypot: string }
  | { type: 'newsletter'; email: string; honeypot: string }

export type SubmitResult = { ok: true } | { ok: false; error: string }

export async function submitForm(payload: ContactPayload): Promise<SubmitResult> {
  if (!CONTACT_ENDPOINT) {
    return { ok: false, error: 'Der Formularversand ist noch nicht eingerichtet.' }
  }

  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data: unknown = await response.json().catch(() => null)
    const error =
      data && typeof data === 'object' && 'error' in data && typeof data.error === 'string'
        ? data.error
        : undefined

    if (!response.ok) {
      return { ok: false, error: error ?? 'Der Versand ist fehlgeschlagen. Bitte später erneut versuchen.' }
    }

    return { ok: true }
  } catch {
    return { ok: false, error: 'Der Versand ist fehlgeschlagen. Bitte prüfen Sie Ihre Internetverbindung.' }
  }
}
