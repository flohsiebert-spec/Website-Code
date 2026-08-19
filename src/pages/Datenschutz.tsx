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
        Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name, E-Mail-Adresse,
        Nachricht) an eine von uns selbst betriebene Funktion bei Cloudflare, Inc. (Cloudflare
        Workers) übermittelt und von dort per E-Mail an unser Postfach beim Hoster
        weitergeleitet. Die Daten werden dabei ausschließlich zur Zustellung der E-Mail
        verarbeitet und nicht dauerhaft auf dem Server gespeichert. Rechtsgrundlage ist Art. 6
        Abs. 1 lit. b DSGVO (Bearbeitung Ihrer Anfrage) bzw. lit. f DSGVO (unser Interesse an
        der Beantwortung von Anfragen). Die E-Mail selbst wird in unserem Postfach gespeichert,
        bis sie nicht mehr benötigt wird.
      </p>

      <h2>6. Newsletter-Anmeldung</h2>
      <p>
        Die Newsletter-Anmeldung im Footer versendet Ihre E-Mail-Adresse auf demselben Weg
        (Cloudflare Workers → E-Mail an unser Postfach) als Benachrichtigung an uns. Es handelt
        sich aktuell noch nicht um ein automatisiertes Newsletter-Tool mit eigener
        Empfängerliste – wir nehmen Sie nach Anmeldung manuell in unseren Verteiler auf.
        Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit
        formlos widerrufen können.
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
