import { LeafIcon, PackageIcon, SealIcon } from './Icons'
import './About.css'

const pillars = [
  {
    icon: LeafIcon,
    title: 'Regional',
    text: 'Der Großteil unseres Sortiments stammt von Erzeugern im Umkreis von 50 km.',
  },
  {
    icon: SealIcon,
    title: 'Bio-zertifiziert',
    text: 'Alle Frischwaren tragen ein anerkanntes Bio-Siegel – kontrolliert und rückverfolgbar.',
  },
  {
    icon: PackageIcon,
    title: 'Nachhaltig verpackt',
    text: 'Lose Ware zum Selbstabfüllen und plastikfreie Verpackung, wo immer es geht.',
  },
]

export function About() {
  return (
    <section id="ueber-uns" className="about">
      <div className="container">
        <div className="about__intro">
          <span className="eyebrow">Unsere Philosophie</span>
          <h2 className="about__heading">Eine Brücke zwischen Hof und Küchentisch</h2>
          <p className="about__lead">
            Querbeet ist mehr als ein Laden. Seit der Gründung setzen wir auf kurze Wege,
            ehrliche Preise und Lebensmittel, die schmecken, wie sie sollten – ausgesucht
            bei Erzeugerinnen und Erzeugern, die wir persönlich kennen.
          </p>
        </div>

        <div className="about__pillars">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div className="about__pillar" key={title}>
              <span className="icon about__pillar-icon">
                <Icon />
              </span>
              <h3 className="about__pillar-title">{title}</h3>
              <p className="about__pillar-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
