import { useState, type FormEvent } from 'react'
import { submitForm } from '../lib/contactApi'
import { MailIcon, MapPinIcon, PhoneIcon } from './Icons'
import './Contact.css'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('sending')
    const result = await submitForm({
      type: 'contact',
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
      honeypot: String(data.get('company') ?? ''),
    })

    if (result.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
      setErrorMessage(result.error)
    }
  }

  return (
    <section id="kontakt" className="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="eyebrow">Kontakt</span>
          <h2 className="contact__heading">Fragen? Schreiben Sie uns.</h2>
          <div className="contact__info-row">
            <span className="icon contact__info-icon">
              <MapPinIcon />
            </span>
            <span>Klosterstraße 9, 31737 Rinteln</span>
          </div>
          <a className="contact__info-row" href="tel:+4957519246378">
            <span className="icon contact__info-icon">
              <PhoneIcon />
            </span>
            <span>05751 9246378</span>
          </a>
          <a className="contact__info-row" href="mailto:querbeet-rinteln@t-online.de">
            <span className="icon contact__info-icon">
              <MailIcon />
            </span>
            <span>querbeet-rinteln@t-online.de</span>
          </a>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="hp-field" aria-hidden="true">
            <label htmlFor="contact-company">Firma</label>
            <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="contact__field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" placeholder="Ihr Name" required />
          </div>
          <div className="contact__field">
            <label htmlFor="contact-email">E-Mail</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="ihre@email.de"
              required
            />
          </div>
          <div className="contact__field">
            <label htmlFor="contact-message">Nachricht</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Ihre Nachricht an uns"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary contact__submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Wird gesendet …' : 'Nachricht senden'}
          </button>
          {status === 'success' && (
            <p className="contact__success" role="status">
              Danke für Ihre Nachricht! Wir melden uns so schnell wie möglich.
            </p>
          )}
          {status === 'error' && (
            <p className="contact__error" role="alert">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
