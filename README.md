# Querbeet Bioladen

Website Querbeet mit Claude Code.

Landingpage für den Bioladen „Querbeet" – Vite + React + TypeScript, ohne
Backend/Online-Shop (rein informative Website).

## Entwicklung

```bash
npm install
npm run dev
```

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
- `src/index.css` – Design-Tokens (Farben, Schriften) sowie globale Resets
  und Utility-Klassen (`.container`, `.btn`, `.eyebrow`, …)

## Offene Punkte

Das Kontaktformular und die Newsletter-Anmeldung sind vorbereitet, aber noch
an keinen Versanddienst (E-Mail-API, Newsletter-Tool) angebunden.
