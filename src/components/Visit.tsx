import { MapPinIcon } from './Icons'
import './Visit.css'

const hours = [
  { days: 'Montag – Freitag', time: '9:00 – 18:00 Uhr' },
  { days: 'Samstag', time: '9:00 – 14:00 Uhr' },
  { days: 'Sonntag', time: 'Ruhetag' },
]

const address = 'Klosterstraße 9, 31737 Rinteln'

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
          <a
            className="visit__address"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon visit__address-icon">
              <MapPinIcon />
            </span>
            <span>{address}</span>
          </a>
          <div className="visit__map">
            <iframe
              title="Lageplan Querbeet Bioladen"
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
