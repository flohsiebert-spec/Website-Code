import { LegalLayout } from './LegalLayout'

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p className="legal__notice">
        Hinweis: Diese Seite ist eine Vorlage und ersetzt keine Rechtsberatung. Bitte vor
        Veröffentlichung vervollständigen (insbesondere die verantwortliche Person) und im
        Zweifel rechtlich prüfen lassen.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        [Name der verantwortlichen Person einfügen]
        <br />
        Querbeet Bioladen
        <br />
        Klosterstraße 9, 31737 Rinteln
        <br />
        Telefon: <a href="tel:+4957519246378">05751 9246378</a>
        <br />
        E-Mail: <a href="mailto:querbeet-rinteln@t-online.de">querbeet-rinteln@t-online.de</a>
      </p>

      <h2>2. Hosting</h2>
      <p>
        Diese Website wird über GitHub Pages gehostet (GitHub, Inc., 88 Colin P. Kelly Jr.
        Street, San Francisco, CA 94107, USA). Beim Aufruf der Seite verarbeitet GitHub
        automatisch Verbindungsdaten (z. B. IP-Adresse, Zeitpunkt des Zugriffs) in sogenannten
        Server-Logfiles. Weitere Informationen:{' '}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Privacy Statement
        </a>
        .
      </p>

      <h2>3. Google Fonts</h2>
      <p>
        Diese Website lädt die Schriftarten „Spectral“ und „Karla“ von den Servern von Google
        Fonts (Google Ireland Limited). Beim Laden der Seite wird dazu eine Verbindung zu
        Google-Servern hergestellt, wobei Ihre IP-Adresse übertragen werden kann.
      </p>

      <h2>4. Google Maps</h2>
      <p>
        Im Bereich „Öffnungszeiten &amp; Anfahrt“ ist ein Kartenausschnitt von Google Maps
        eingebunden. Beim Aufruf dieses Bereichs wird eine Verbindung zu Servern von Google
        hergestellt; Google kann dabei Daten wie Ihre IP-Adresse verarbeiten und
        gegebenenfalls Cookies setzen. Weitere Informationen:{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
          Datenschutzerklärung von Google
        </a>
        .
      </p>

      <h2>5. Kontaktformular</h2>
      <p>
        Das Kontaktformular auf dieser Website ist aktuell technisch noch nicht an einen
        Versanddienst angebunden: Eingaben werden nicht an einen Server übertragen oder
        gespeichert. Sobald ein echter Versand eingerichtet ist, wird dieser Abschnitt um
        Zweck, Rechtsgrundlage und Speicherdauer der Verarbeitung ergänzt.
      </p>

      <h2>6. Newsletter-Anmeldung</h2>
      <p>
        Auch die Newsletter-Anmeldung im Footer ist aktuell nicht an einen Versanddienst
        angebunden: Es werden keine E-Mail-Adressen übertragen oder gespeichert.
      </p>

      <h2>7. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der
        Verarbeitung Ihrer personenbezogenen Daten sowie ein Widerspruchsrecht gegen die
        Verarbeitung und ein Recht auf Datenübertragbarkeit. Zudem können Sie sich bei einer
        Datenschutz-Aufsichtsbehörde beschweren.
      </p>
    </LegalLayout>
  )
}
