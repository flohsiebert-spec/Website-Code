import { useState, type FormEvent } from 'react'
import { MailIcon, MapPinIcon, PhoneIcon } from './Icons'
import './Contact.css'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  // Kein Backend angebunden: das Formular sammelt aktuell nur clientseitig.
  // Sobald ein Versandweg (E-Mail-Dienst / API) feststeht, hier den echten
  // Request auslösen statt nur den lokalen Zustand zu setzen.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
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
            <span>[Adresse einfügen]</span>
          </div>
          <div className="contact__info-row">
            <span className="icon contact__info-icon">
              <PhoneIcon />
            </span>
            <span>[Telefonnummer einfügen]</span>
          </div>
          <div className="contact__info-row">
            <span className="icon contact__info-icon">
              <MailIcon />
            </span>
            <span>[E-Mail einfügen]</span>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary contact__submit">
            Nachricht senden
          </button>
          {submitted && (
            <p className="contact__success" role="status">
              Danke für Ihre Nachricht! Wir melden uns so schnell wie möglich.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
