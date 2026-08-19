import { ArrowRightIcon, BasketIcon } from './Icons'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">Bioladen im Herzen der Stadt</span>
          <h1 className="hero__headline">Gutes aus der Region, ehrlich verkauft.</h1>
          <p className="hero__lead">
            Bio-Lebensmittel von Höfen aus der Umgebung – frisch geerntet, fair gehandelt
            und ohne unnötige Umwege bei uns im Regal.
          </p>
          <div className="hero__actions">
            <a href="#sortiment" className="btn btn-primary">
              Sortiment entdecken
              <span className="icon" style={{ width: 16, height: 16 }}>
                <ArrowRightIcon />
              </span>
            </a>
            <a href="#oeffnungszeiten" className="btn btn-outline">
              Anfahrt
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-shape" />
          <div className="hero__visual-placeholder">
            <span className="icon hero__visual-icon">
              <BasketIcon />
            </span>
            <span>[Foto: Frischetheke &amp; Erntekorb]</span>
          </div>
        </div>
      </div>
    </section>
  )
}
