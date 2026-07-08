# Drone-Log.de – Info-Website

Statische Landingpage für **Drone-Log.de** – das digitale Drohnenfluglogbuch für
Behörden und Organisationen mit Sicherheitsaufgaben (BOS): Polizei, Feuerwehr,
DRK, DLRG, ASB und mehr.

## Inhalt

- `index.html` – Landingpage (Hero, Funktionen, Flugleiter-Modus, „Von BOS'lern
  für BOS'ler", Ablauf, FAQ, CTA)
- `impressum.html` / `datenschutz.html` – rechtliche Seiten (Platzhalter, vor
  Veröffentlichung ausfüllen!)
- `css/style.css` – komplettes Styling (Dark Theme, responsiv, Scroll-Animationen)
- `js/main.js` – Interaktionen (Mobile-Menü, Scroll-Reveal, Header-Effekt)
- `assets/favicon.svg` – Favicon

## Features der Seite

- Prominenter **„Zum Tool"-Button** oben rechts mit direkter Weiterleitung auf
  https://drone-log.de
- Vollständig responsiv (Desktop, Tablet, Smartphone)
- Keine Build-Tools nötig – reines HTML/CSS/JS, direkt hostbar
  (z. B. GitHub Pages, Netlify, beliebiger Webspace)
- Barrierefreundlich: semantisches HTML, `prefers-reduced-motion`-Unterstützung,
  ARIA-Attribute

## Lokal ansehen

Einfach `index.html` im Browser öffnen – oder einen kleinen Server starten:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Vor dem Livegang

1. Impressum in `impressum.html` ausfüllen (§ 5 DDG)
2. Datenschutzerklärung in `datenschutz.html` vervollständigen und prüfen lassen
3. Optional: Google Fonts lokal einbinden (DSGVO)
