import { useState, type FormEvent } from 'react'
import { navLinks } from '../data/navigation'
import { FacebookIcon, InstagramIcon, LeafIcon } from './Icons'
import './Footer.css'

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  // Kein Newsletter-Dienst angebunden: sammelt aktuell nur clientseitig.
  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubscribed(true)
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
              <a key={link.href} href={link.href}>
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
              <label htmlFor="footer-newsletter-email" className="visually-hidden">
                E-Mail-Adresse
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="E-Mail-Adresse"
                required
              />
              <button type="submit" className="btn btn-primary">
                Anmelden
              </button>
            </form>
            {subscribed && (
              <p className="footer__newsletter-success" role="status">
                Danke! Sie sind angemeldet.
              </p>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Querbeet Bioladen · Alle Rechte vorbehalten</span>
          <span>Impressum · Datenschutz</span>
        </div>
      </div>
    </footer>
  )
}
