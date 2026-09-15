# Losseni ZOURI — Portfolio

Portfolio personnel (Data Analytics / BUT Science des Données), hébergé sur GitHub Pages.

## Structure

```
/
├── index.html
├── favicon.svg
├── assets/
│   ├── css/style.css
│   ├── js/script.js
│   ├── images/
│   │   ├── photo.webp / photo.jpg                    (portrait — WebP + repli JPEG)
│   │   ├── dashboard-dataviz.webp / .jpg              (visuel du projet Challenge Dataviz 2026)
│   │   ├── ia-impact-secteurs.webp / .jpg             (visuel du projet SAE Impact de l'IA)
│   │   └── thumbnail-dataviz.png                      (image de partage Open Graph)
│   └── docs/
│       ├── rapport_dataviz_2026.pdf
│       ├── rapport_IA_impact.pdf
│       └── rapport_projet_films_python.pdf
└── README.md
```

## Déploiement

1. Copier le contenu de ce dossier à la racine du dépôt `losseni-zouri.github.io`.
2. Commit + push sur la branche `main`.
3. GitHub Pages republie automatiquement le site (aucune étape de build).

## À vérifier après mise en ligne

- Lighthouse (Performance / Accessibilité / SEO / Bonnes pratiques) dans Chrome DevTools — viser 90+ partout.
- Navigation clavier complète : Tab / Shift+Tab / Entrée sur les liens, le menu mobile (bouton hamburger) et le formulaire.
- Menu mobile : s'ouvre/se ferme au clic, à l'extérieur, et avec Échap ; testé sur un vrai téléphone, pas seulement le mode responsive du navigateur.
- Que `og:image` (thumbnail-dataviz.png) s'affiche bien en partageant le lien sur LinkedIn / WhatsApp.
- Que le clic sur "Ouvrir ma messagerie" pré-remplit bien un mail vers losseni.zouri@etu.u-paris.fr.
- Que les 3 rapports PDF s'ouvrent correctement depuis les cartes projet.

## Mettre à jour un projet

Chaque projet est un bloc `<article class="project-card">` dans la section `#projects` de `index.html`.
Pour en ajouter un : dupliquer un bloc, changer l'image dans `project-media` (ou garder
`project-media--diagram` / `project-media-placeholder` si aucun visuel n'est encore disponible),
le texte et les tags. Déposer le rapport correspondant dans `assets/docs/`.
