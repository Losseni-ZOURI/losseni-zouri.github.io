# Losseni ZOURI — Portfolio

Portfolio personnel (Data Analytics / BUT Science des Données), hébergé sur GitHub Pages.

## Structure

Tous les fichiers sont à plat, à la racine du dépôt (pas de sous-dossiers) :

```
/
├── index.html
├── style.css
├── script.js
├── favicon.svg
├── photo.webp / photo.jpg                    (portrait — WebP + repli JPEG)
├── dashboard-dataviz.webp / .jpg              (visuel du projet Challenge Dataviz 2026)
├── ia-impact-secteurs.webp / .jpg             (visuel du projet SAE Impact de l'IA)
├── thumbnail-dataviz.png                      (image de partage Open Graph)
├── rapport_dataviz_2026.pdf
├── rapport_IA_impact.pdf
├── rapport_projet_films_python.pdf
└── README.md
```

Ce choix est volontaire : l'upload par glisser-déposer de l'interface web GitHub
n'importe pas toujours correctement les sous-dossiers. Une structure plate évite ce
problème à chaque mise à jour, au prix d'un dossier un peu moins "rangé".

## Déploiement

1. Sur ton dépôt `losseni-zouri.github.io`, supprime tous les fichiers existants
   (ancien `index.html` et tout le reste).
2. "Add file" → "Upload files", puis glisse **tous les fichiers de ce dossier
   directement** (pas le dossier lui-même, et pas de sous-dossier `assets`).
3. Commit changes sur `main`. GitHub Pages republie automatiquement en 30 s à 2 min.

## À vérifier après mise en ligne

- Ouvrir la page et vérifier dans les DevTools (onglet Network ou Console) qu'aucune
  ressource ne renvoie une erreur 404 — CSS, JS, images et PDF doivent tous se charger
  depuis la racine (`https://losseni-zouri.github.io/style.css`, etc.).
- Lighthouse (Performance / Accessibilité / SEO / Bonnes pratiques) — viser 90+ partout.
- Menu mobile (bouton hamburger) : ouverture/fermeture, clic extérieur, touche Échap.
- Que `og:image` s'affiche bien en partageant le lien sur LinkedIn / WhatsApp.
- Que les 3 rapports PDF et le formulaire de contact fonctionnent.

## Mettre à jour un projet

Chaque projet est un bloc `<article class="project-card">` dans la section `#projects`
de `index.html`. Pour en ajouter un : dupliquer un bloc, changer l'image (ou garder
`project-media--diagram` / `project-media-placeholder` si aucun visuel n'est encore
disponible), le texte et les tags. Déposer le rapport correspondant à la racine du dépôt.
