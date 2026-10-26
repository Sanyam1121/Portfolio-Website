# Sanyam Gandhi portfolio

Video editor and thumbnail designer based in Jalandhar.

Live site: https://sanyam1121.github.io/Portfolio-Website/

## What's here

- `index.html` — the whole site: layout, styles and the timeline script in one file
- `assets/` — work images (WebP)
- `.github/workflows/deploy-gh-pages.yml` — publishes the site to GitHub Pages on every push to `main`

No build step and no dependencies. Open `index.html` in a browser to preview.

## Adding a project

1. Put the image in `assets/` as a `.webp` (keep it under about 200 KB).
2. Copy one of the `<article>` or `<figure>` blocks in the Work section of `index.html` and change the text, image and link.
3. To show it on the hero timeline, add an entry to the `clips` list in the script at the bottom of `index.html`. Track `0` is thumbnails, `1` is Shorts and Reels, `2` is long-form. `s` and `e` are the start and end seconds (0–60).
