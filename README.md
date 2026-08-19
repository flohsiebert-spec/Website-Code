# Querbeet Bioladen

Website Querbeet mit Claude Code.

Landingpage für den Bioladen „Querbeet" – Vite + React + TypeScript, ohne
Online-Shop (rein informative Website). Kontaktformular und
Newsletter-Anmeldung laufen über einen eigenen Cloudflare Worker (siehe
`worker/`), der die Eingaben per SMTP als E-Mail zustellt.

## Entwicklung

```bash
npm install
npm run dev
```

Für lokale Tests des Formularversands `VITE_CONTACT_ENDPOINT` in einer
`.env.local` (git-ignoriert) auf die Worker-URL setzen, siehe `.env.example`.

## Build

```bash
npm run build
npm run preview
```

## Struktur

- `src/components/` – eine Komponente pro Seitenbereich (Header, Hero,
  About, Sortiment, Visit, Contact, Footer) inklusive zugehöriger CSS-Datei
- `src/components/Icons.tsx` – gemeinsam genutzte Inline-SVG-Icons
- `src/data/navigation.ts` – Navigationspunkte (von Header & Footer geteilt)
- `src/lib/contactApi.ts` – ruft den Cloudflare Worker für Formular-/
  Newsletter-Einreichungen auf
- `src/pages/` – Impressum und Datenschutzerklärung (eigene statische
  Seiten, siehe unten)
- `src/index.css` – Design-Tokens (Farben, Schriften) sowie globale Resets
  und Utility-Klassen (`.container`, `.btn`, `.eyebrow`, …)
- `worker/` – eigenständiges Projekt: Cloudflare Worker, der Formular-
  Einreichungen per SMTP verschickt (siehe `worker/README.md`)

## Mehrere Seiten

Neben der Hauptseite (`index.html`) gibt es zwei weitere, separat gebaute
Vite-Einstiegspunkte: `impressum.html` und `datenschutz.html` (siehe
`vite.config.ts` → `build.rollupOptions.input`).

## Formularversand einrichten

1. In `worker/` das Cloudflare-Worker-Projekt deployen (Anleitung in
   `worker/README.md`) – liefert eine `https://….workers.dev`-URL.
2. Diese URL als Repository-Variable `CONTACT_ENDPOINT` unter
   GitHub → Settings → Secrets and variables → Actions → Variables
   eintragen.
3. Den „Deploy to GitHub Pages“-Workflow einmal neu laufen lassen
   (`workflow_dispatch` oder erneuter Push), damit die Website mit der
   Endpoint-URL neu gebaut wird.

## Offene Punkte

- Das Impressum enthält noch einen Platzhalter für den Namen der
  verantwortlichen Person (`src/pages/Impressum.tsx`,
  `src/pages/Datenschutz.tsx`) – gesetzlich vorgeschrieben, muss vor
  Veröffentlichung ergänzt werden.
- Die Newsletter-Anmeldung verschickt aktuell nur eine
  Benachrichtigungs-E-Mail; es gibt noch kein eigenes Verteiler-/
  Mailing-Tool mit Empfängerliste.
