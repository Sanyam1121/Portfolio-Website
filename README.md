# Sanyam Gandhi portfolio

Video editor and designer based in Jalandhar.

Live site: https://sanyam1121.github.io/Portfolio-Website/

## What's here

- `index.html`: the page (layout, styles and scripts)
- `work.js`: the list of every piece of work shown on the site
- `assets/work/`: thumbnails and ad images (WebP; `-s` files are the small grid versions)
- `assets/Sanyam-Gandhi-Resume.pdf`: the resume behind the Resume buttons
- `.github/workflows/deploy-gh-pages.yml`: publishes the site on every push to `main`

No build step. Open `index.html` in a browser to preview.

## Adding or changing work

Everything in the Work section comes from `work.js`. The order in that file is the order on the page.

- **Rename something:** change its `title` or `sub`.
- **Add a Drive video:** upload it to the Portfolio › Videos folder in Google Drive (that folder is shared as "Anyone with the link"), copy the file ID from its link (`drive.google.com/file/d/THIS_PART/view`), and add:
  `{"kind": "video", "title": "My new edit", "sub": "Reel", "drive": "THIS_PART"}`
- **Add a YouTube video:** `{"kind": "video", "title": "...", "sub": "...", "yt": "VIDEO_ID", "poster": "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg", "w": 16, "h": 9}`
- **Add an image:** save it in `assets/work/` as `.webp`, then add
  `{"kind": "thumb" or "ad", "title": "...", "sub": "...", "src": "assets/work/name.webp", "thumb": "assets/work/name.webp", "alt": "what the image shows", "w": 16, "h": 9}`
- **Remove something:** delete its `{...}` block (and the comma before it).

## Features

- **Search and filters** in the Work section.
- **Viewer:** tap any piece to see it full screen. Arrow keys or swipe move between pieces.
- **Share links:** every piece has its own link (`…/Portfolio-Website/#p-crisis-soon`). Use "Copy link" in the viewer to send one piece to a client.
- **Feed preview:** for thumbnails, "See it in a feed" shows the thumbnail at YouTube home-feed, sidebar and phone sizes.
- **Start a project:** visitors build a brief (what they need, deadline, details, and references picked with "I want something like this"). It opens as a ready-to-send WhatsApp message or email to Sanyam. Nothing is stored on a server.
