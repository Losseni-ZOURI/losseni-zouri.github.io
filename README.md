# Losseni ZOURI — Portfolio

Portfolio personnel (Data Analytics / BUT Science des Données), hébergé sur GitHub Pages.

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
│   │   ├── ia-impact-secteurs.webp / .jpg             (visuel du projet SAE Impact de l'IA)
│   │   └── thumbnail-dataviz.png                      (image de partage Open Graph)
│   └── docs/
│       ├── cv-losseni-zouri.pdf
│       ├── rapport_dataviz_2026.pdf
│       ├── rapport_IA_impact.pdf
│       └── rapport_projet_films_python.pdf
└── README.md
```

Le déploiement se fait désormais via `git push` (et non plus par glisser-déposer
dans l'interface web de GitHub), la structure en sous-dossiers `assets/` ne pose
donc plus le problème d'import qui justifiait auparavant une arborescence à plat.

## Déploiement

1. Pousser sur la branche par défaut du dépôt `losseni-zouri.github.io` (`main`).
2. GitHub Pages republie automatiquement en 30 s à 2 min.

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

Chaque projet est un bloc `<article class="project-card">` dans la section `#projects`
de `index.html`. Il contient une description courte puis un bloc repliable
`<details class="project-case">` structuré en Contexte / Problématique / Données /
Méthodologie / Résultat / Ce que j'en retiens (balise `<dl class="case-grid">`).
Pour ajouter un projet : dupliquer un bloc complet, changer l'image (ou garder
`project-media--diagram` / `project-media-placeholder` si aucun visuel n'est encore
disponible), le texte, les champs du détail et les tags. Déposer le rapport
correspondant dans `assets/docs/`.

## Mettre à jour les chiffres clés

La section `#stats` (juste après le Hero) affiche 4 chiffres réels comptés sur le
contenu du site (projets, stages, rapports, outils). Si un projet ou un stage est
ajouté, penser à mettre à jour la valeur `data-count-to` correspondante.
