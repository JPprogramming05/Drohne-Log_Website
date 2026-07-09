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

## Deployment (GitHub Pages)

Das Repository enthält einen fertigen Workflow
(`.github/workflows/deploy-pages.yml`), der die Seite bei jedem Push auf
`main` automatisch auf GitHub Pages veröffentlicht.

**Einmalig einstellen:** Settings → Pages → *Build and deployment* →
Source: **„GitHub Actions"** (nicht „Deploy from a branch").

Hintergrund: Bei „Deploy from a branch" jagt GitHub die Seite durch einen
Jekyll-Build, der für diese fertige statische Seite unnötig ist und
fehlschlagen kann. Die zusätzliche `.nojekyll`-Datei im Root schaltet
Jekyll auch für diesen Fall ab. Die Custom Domain (`CNAME`) bleibt von
alledem unberührt.

Manuell deployen: Actions → „Deploy to GitHub Pages" → *Run workflow*.

## Vor dem Livegang

1. Impressum in `impressum.html` ausfüllen (§ 5 DDG)
2. Datenschutzerklärung in `datenschutz.html` vervollständigen und prüfen lassen
3. Optional: Google Fonts lokal einbinden (DSGVO)
