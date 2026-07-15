# Drone-Log – Info-Website

Statische Landingpage für **Drone-Log** – die digitale Verwaltungsplattform für
BOS-Drohneneinheiten: Einsatzkoordination, Flugbuch, Drohnen-, Akku- und
Wartungsverwaltung, Teamverwaltung mit Rollen sowie Export von Nachweisen.

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

## 3D-Modell im Hero

`assets/models/dji-matrice-400.glb` wurde aus DJIs offiziellem CAD-Modell
(STEP-Datei, dl.djicdn.com) konvertiert: tesselliert mit OpenCascade,
auf ~140.000 Dreiecke reduziert (2,6 MB) und als glTF-Binary exportiert.
Angezeigt wird es über die lokal gehostete `<model-viewer>`-Bibliothek
(`js/vendor/model-viewer.min.js`, Google, BSD-3-Clause).

Hinweis: Das Originalmodell stammt von DJI. Die Nutzungsbedingungen für
die Verwendung auf der Website sollten mit DJI geklärt sein.

## Vor dem Livegang

1. Impressum in `impressum.html` ausfüllen (§ 5 DDG)
2. Datenschutzerklärung in `datenschutz.html` vervollständigen und prüfen lassen
3. Optional: Google Fonts lokal einbinden (DSGVO)
