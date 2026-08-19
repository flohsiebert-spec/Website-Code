import { useState, type FormEvent } from 'react'
import { navLinks } from '../data/navigation'
import { submitForm } from '../lib/contactApi'
import { FacebookIcon, InstagramIcon, LeafIcon } from './Icons'
import './Footer.css'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Footer() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('sending')
    const result = await submitForm({
      type: 'newsletter',
      email: String(data.get('email') ?? '').trim(),
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
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="icon footer__logo-icon">
                <LeafIcon />
              </span>
              <span className="footer__logo-text">Querbeet</span>
            </div>
            <p className="footer__tagline">
              Regionale Bio-Lebensmittel, ehrlich verkauft – mitten in der Stadt.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram" className="footer__social-link">
                <span className="icon" style={{ width: 17, height: 17 }}>
                  <InstagramIcon />
                </span>
              </a>
              <a href="#" aria-label="Facebook" className="footer__social-link">
                <span className="icon" style={{ width: 17, height: 17 }}>
                  <FacebookIcon />
                </span>
              </a>
            </div>
          </div>

          <nav className="footer__nav">
            <span className="footer__nav-title">Navigation</span>
            {navLinks.map((link) => (
              <a key={link.href} href={`${import.meta.env.BASE_URL}${link.href}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__newsletter">
            <span className="footer__nav-title">Bleiben Sie auf dem Laufenden</span>
            <p className="footer__newsletter-text">
              Saisonale Angebote und Neuigkeiten aus dem Laden – ab und zu, nicht öfter.
            </p>
            <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
              <div className="hp-field" aria-hidden="true">
                <label htmlFor="footer-newsletter-company">Firma</label>
                <input
                  id="footer-newsletter-company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <label htmlFor="footer-newsletter-email" className="visually-hidden">
                E-Mail-Adresse
              </label>
              <input
                id="footer-newsletter-email"
                name="email"
                type="email"
                placeholder="E-Mail-Adresse"
                required
              />
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Wird gesendet …' : 'Anmelden'}
              </button>
            </form>
            {status === 'success' && (
              <p className="footer__newsletter-success" role="status">
                Danke! Sie sind angemeldet.
              </p>
            )}
            {status === 'error' && (
              <p className="footer__newsletter-error" role="alert">
                {errorMessage}
              </p>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Querbeet Bioladen · Alle Rechte vorbehalten</span>
          <span className="footer__legal-links">
            <a href={`${import.meta.env.BASE_URL}impressum.html`}>Impressum</a>
            {' · '}
            <a href={`${import.meta.env.BASE_URL}datenschutz.html`}>Datenschutz</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
