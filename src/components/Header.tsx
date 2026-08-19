import { useState } from 'react'
import { navLinks } from '../data/navigation'
import { CloseIcon, LeafIcon, MenuIcon } from './Icons'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a
          href={`${import.meta.env.BASE_URL}#top`}
          className="header__logo"
          onClick={() => setMenuOpen(false)}
        >
          <span className="icon header__logo-icon">
            <LeafIcon />
          </span>
          <span className="header__logo-text">Querbeet</span>
        </a>

        <button
          type="button"
          className="header__menu-toggle"
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="icon">{menuOpen ? <CloseIcon /> : <MenuIcon />}</span>
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`${import.meta.env.BASE_URL}${link.href}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
