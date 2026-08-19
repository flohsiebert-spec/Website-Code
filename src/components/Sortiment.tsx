import { AppleIcon, BottleIcon, BreadIcon, DropletIcon, JarIcon, MilkIcon } from './Icons'
import './Sortiment.css'

const categories = [
  {
    icon: AppleIcon,
    title: 'Obst & Gemüse',
    text: 'Saisonal geerntet, oft noch mit Erde dran.',
  },
  {
    icon: BreadIcon,
    title: 'Backwaren',
    text: 'Täglich frisch von der Bäckerei nebenan.',
  },
  {
    icon: MilkIcon,
    title: 'Milch & Käse',
    text: 'Von Weidehöfen aus der Region.',
  },
  {
    icon: JarIcon,
    title: 'Trockenware & Vorräte',
    text: 'Getreide, Hülsenfrüchte und Nüsse – lose oder abgepackt.',
  },
  {
    icon: BottleIcon,
    title: 'Getränke',
    text: 'Säfte, Biere und Weine kleiner Manufakturen.',
  },
  {
    icon: DropletIcon,
    title: 'Naturkosmetik & Pflege',
    text: 'Pflegeprodukte ohne unnötige Zusätze.',
  },
]

export function Sortiment() {
  return (
    <section id="sortiment" className="sortiment">
      <div className="container">
        <div className="sortiment__intro">
          <span className="eyebrow">Unser Sortiment</span>
          <h2 className="sortiment__heading">Alles, was in eine gute Küche gehört</h2>
        </div>

        <div className="sortiment__grid">
          {categories.map(({ icon: Icon, title, text }) => (
            <div className="sortiment__tile" key={title}>
              <span className="icon sortiment__tile-icon">
                <Icon />
              </span>
              <h3 className="sortiment__tile-title">{title}</h3>
              <p className="sortiment__tile-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
