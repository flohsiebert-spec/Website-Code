import { MapPinIcon } from './Icons'
import './Visit.css'

const hours = [
  { days: 'Montag – Freitag', time: '8:00 – 18:30 Uhr' },
  { days: 'Samstag', time: '8:00 – 13:00 Uhr' },
  { days: 'Sonntag', time: 'Ruhetag' },
]

export function Visit() {
  return (
    <section id="oeffnungszeiten" className="visit">
      <div className="container visit__grid">
        <div className="visit__column">
          <span className="eyebrow">Öffnungszeiten</span>
          <h2 className="visit__heading">Schauen Sie vorbei</h2>
          <div className="visit__hours">
            {hours.map((row) => (
              <div className="visit__hours-row" key={row.days}>
                <span className="visit__hours-days">{row.days}</span>
                <span className="visit__hours-time">{row.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="visit__column">
          <span className="eyebrow">Anfahrt</span>
          <h2 className="visit__heading">So finden Sie uns</h2>
          <div className="visit__address">
            <span className="icon visit__address-icon">
              <MapPinIcon />
            </span>
            <span>[Adresse einfügen]</span>
          </div>
          <div className="visit__map">[Kartenausschnitt / Lageplan]</div>
        </div>
      </div>
    </section>
  )
}
