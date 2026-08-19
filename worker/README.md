# Querbeet Contact Worker

Ein eigener Cloudflare Worker, der die Formulare der Website
(Kontaktformular, Newsletter-Anmeldung) per SMTP als E-Mail an
`webmaster@querbeet-rinteln.de` zustellt. Kein Drittanbieter-Formular-
service — der komplette Code liegt hier im Repo.

- `src/index.ts` – HTTP-Handler: Validierung, Honeypot-Spamschutz, CORS
- `src/smtp.ts` – minimaler SMTP-Client (nutzt die Cloudflare-Workers-
  eigene TCP-Sockets-API, `cloudflare:sockets`)

## Voraussetzungen

- Ein kostenloser [Cloudflare-Account](https://dash.cloudflare.com/sign-up)
- Node.js (für `npx wrangler …`)

## Einmaliges Deployment

```bash
cd worker
npm install

# Öffnet den Browser zum Einloggen bei Cloudflare
npx wrangler login

# Trägt das SMTP-Passwort sicher & verschlüsselt bei Cloudflare ein.
# Wird interaktiv abgefragt — landet nirgends im Code oder Git.
npx wrangler secret put SMTP_PASSWORD

# Deployed den Worker und gibt am Ende die Worker-URL aus
# (z.B. https://querbeet-contact.<dein-account>.workers.dev)
npx wrangler deploy
```

Die ausgegebene `workers.dev`-URL danach im Haupt-Repo als GitHub-
Actions-Variable `CONTACT_ENDPOINT` eintragen (Settings → Secrets and
variables → Actions → Variables), siehe Haupt-README.

## Konfiguration ändern

Nicht-geheime Einstellungen (SMTP-Host/Port, Absender/Empfänger,
erlaubte Website-Origin für CORS) stehen in `wrangler.toml` unter
`[vars]`. Nach Änderungen erneut `npx wrangler deploy` ausführen.

Zieht ihr die Seite auf eine eigene Domain um (statt
`flohsiebert-spec.github.io`), muss `ALLOWED_ORIGIN` in `wrangler.toml`
entsprechend angepasst werden — sonst blockt der Worker die Anfragen
per CORS.

## Hinweis zu TCP Sockets

Der SMTP-Versand nutzt Cloudflare Workers' natives TCP-Sockets-API
(`cloudflare:sockets`, kein externer SMTP-Dienst). Diese Funktion war
zuletzt auf allen Workers-Plänen inklusive Free Tier verfügbar; sollte
`wrangler deploy` oder die erste Anfrage einen Berechtigungsfehler
liefern, prüft in den Cloudflare-Docs, ob euer Plan das noch abdeckt
(ein Upgrade auf Workers Paid, aktuell $5/Monat, behebt das notfalls).

## Lokal testen

```bash
npm run dev
```

Startet den Worker lokal (`wrangler dev`). Für einen echten End-to-
End-Test das SMTP-Passwort vorher wie oben per `wrangler secret put`
hinterlegt haben.
