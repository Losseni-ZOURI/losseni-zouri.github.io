# Losseni ZOURI — Portfolio

Portfolio personnel (Data Analytics / BUT Science des Données), hébergé sur GitHub Pages.

Direction artistique "Signal" : fond encre profonde, dégradé teal → bleu → violet,
cartes arrondies, trame de réseau de points en filigrane dans le hero, preuves
contextualisées plutôt que jauges de compétence arbitraires.

## Structure

```
/
├── index.html
├── robots.txt
├── sitemap.xml
├── favicon.svg
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   │   ├── photo.webp / photo.jpg                    (portrait — WebP + repli JPEG)
│   │   ├── dashboard-dataviz.webp / .jpg              (visuel du projet Challenge Dataviz 2026)
│   │   ├── impact-ia-cover.webp / .jpg                (visuel du projet Impact de l'IA — couverture de la SAE, noms des coéquipiers retirés)
│   │   ├── thumbnail-dataviz.png                      (image de partage Open Graph)
│   │   └── logos/
│   │       └── upc-iut-logo.webp / .jpg               (logo réel IUT de Paris – Rives de Seine / Université Paris Cité, affiché en petit badge sur chaque carte projet)
│   └── docs/
│       ├── cv-losseni-zouri.pdf
│       ├── rapport_dataviz_2026.pdf
│       ├── rapport_enquete_genre_experience_pro.pdf
│       ├── rapport_loueur_dvd.pdf
│       ├── rapport_IA_impact.pdf
│       └── rapport_projet_films_python.pdf
└── README.md
```

## Sections de la page (`index.html`)

| Ancre          | Contenu                                                                 |
|----------------|--------------------------------------------------------------------------|
| `#hero`        | Nom, statut de recherche d'alternance, accroche, CTA projets/contact/CV |
| `#profil`      | Photo, présentation, 4 informations clés, méthode de travail en 4 étapes |
| `#parcours`    | Timeline unique : stages, formation, engagement, projet phare, puis un encart « Alternance — à écrire avec vous » qui ouvre sur le contact |
| `#competences` | 8 cartes outils avec un niveau honnête (Opérationnel / En formation / Notions) et le contexte réel d'utilisation, puis une liste « Méthodes & savoir-être » |
| `#projets`     | 4 projets en fiche de cas repliable (Contexte/Problématique/Données/Méthodologie/Résultat), un bandeau de chiffres clés réels en visuel de carte, puis un encart « Prochainement » qui pointe vers le rapport déjà disponible du projet restant |
| `#contact`     | Coordonnées directes + formulaire mailto honnête |

## Déploiement

1. Pousser sur la branche par défaut du dépôt `losseni-zouri.github.io` (`main`).
2. GitHub Pages republie automatiquement en 30 s à 2 min.

### Cache navigateur — important

`index.html` charge `style.css` et `script.js` avec un paramètre de version
(`?v=20260917`). GitHub Pages garde la même URL à chaque mise à jour, donc sans ce
paramètre les navigateurs qui ont déjà visité le site peuvent continuer à utiliser
une ancienne version en cache du CSS/JS après un déploiement, ce qui casse
l'affichage (icônes non stylées, etc.) sans que ça se voie dans un test « à froid ».
**À chaque modification de `style.css` ou `script.js`, changer cette valeur** (par
exemple la date du jour) dans les deux balises `<link>` et `<script>` de
`index.html`, sinon les visiteurs récurrents ne verront pas la mise à jour tant que
leur cache n'expire pas naturellement.

## À vérifier après mise en ligne

- Ouvrir la page et vérifier dans les DevTools (onglet Network ou Console) qu'aucune
  ressource ne renvoie une erreur 404 — CSS, JS, images et PDF doivent tous se charger
  depuis `assets/...` (`https://losseni-zouri.github.io/assets/css/style.css`, etc.).
- Lighthouse (Performance / Accessibilité / SEO / Bonnes pratiques) — viser 90+ partout.
- Menu mobile (bouton hamburger) : ouverture/fermeture, clic extérieur, touche Échap.
- Que `og:image` s'affiche bien en partageant le lien sur LinkedIn / WhatsApp.
- Que les rapports PDF, le détail des projets (`<details>`) et le formulaire de
  contact fonctionnent, y compris au clavier.

## Mettre à jour un projet

Chaque projet est un bloc `<article class="project-card">` dans la section `#projets`
de `index.html`. Il contient :

- un visuel `.project-media` — une vraie capture/photo quand elle existe, sinon un
  graphique de données réel `.project-media--chart` (SVG inline construit à partir
  des vrais chiffres du rapport, jamais un motif décoratif générique) ;
- une ligne `.project-meta` avec le petit badge logo réel (`.project-logo-chip`,
  toujours sur fond blanc car le logo est prévu pour ça) et un badge de catégorie ;
- titre, description, tags, un bouton d'action (rapport PDF ou « Rapport à venir ») ;
- un bloc repliable `<details class="project-case">` structuré en Contexte /
  Problématique / Données / Méthodologie / Résultat / Ce que j'en retiens
  (`<dl class="case-grid">`), précédé pour certains projets d'une rangée de
  chiffres clés `<ul class="case-stats">`.

Pour promouvoir le projet Python actuellement dans l'encart « Prochainement » en
carte complète : dupliquer un bloc `project-card`, réutiliser son rapport PDF déjà
présent dans `assets/docs/`, puis retirer sa mention de l'encart `.projects-note`.
S'il n'y a pas de capture d'écran disponible, construire un `.project-media--chart`
à partir d'un vrai chiffre du rapport plutôt que d'inventer un visuel.

## Mettre à jour la timeline (Parcours)

Chaque étape est un `.timeline-item` dans `#parcours`. L'encart final
`.timeline-item--active` (fond teal en tirets) représente le poste d'alternance
recherché : ne pas le supprimer, c'est l'appel à l'action de toute la section —
seules ses dates doivent être ajustées si la recherche évolue.
