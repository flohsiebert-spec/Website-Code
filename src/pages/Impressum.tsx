import { LegalLayout } from './LegalLayout'

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <p className="legal__notice">
        Hinweis: Diese Seite ist eine Vorlage und ersetzt keine Rechtsberatung. Bitte vor
        Veröffentlichung vervollständigen (insbesondere die verantwortliche Person) und im
        Zweifel rechtlich prüfen lassen.
      </p>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        [Name der verantwortlichen Person einfügen]
        <br />
        Querbeet Bioladen
        <br />
        Klosterstraße 9
        <br />
        31737 Rinteln
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:+4957519246378">05751 9246378</a>
        <br />
        E-Mail: <a href="mailto:querbeet-rinteln@t-online.de">querbeet-rinteln@t-online.de</a>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>[Umsatzsteuer-Identifikationsnummer einfügen, falls vorhanden]</p>

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>
        [Name der verantwortlichen Person einfügen]
        <br />
        Klosterstraße 9, 31737 Rinteln
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
        bereit:{' '}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben unter „Kontakt“.
      </p>
      <p>
        Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalLayout>
  )
}
