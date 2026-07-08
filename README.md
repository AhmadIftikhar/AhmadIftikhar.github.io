# Ahmad Iftikhar — Digital Business Card

A premium, single-page personal website / digital business card. **No build step, no dependencies** — it's one self-contained `index.html` file. Just host it.

## ✏️ Edit your details

Open `index.html`, scroll to the `CONFIG = { ... }` block near the bottom (inside the `<script>` tag). Everything is there in plain text:

- **name, title, org, tagline**
- **email, phone, linkedin, github, website**
- **roles** (the hero typing animation)
- **excites** (passion cards)
- **skills** (with proficiency % rings)
- **techTags**, **ventures**, **projects**

Also update the SEO / social tags in the `<head>` (title, description, `og:*`, `twitter:*`, and the `canonical`/URL) to match your real domain.

### Add your photo
In the hero, replace the `AI` monogram with your picture:
```html
<div class="avatar-inner">
  <img src="me.jpg" alt="Ahmad Iftikhar" />
</div>
```
Drop `me.jpg` in this same folder.

### Set your live URL
Set `website` in `CONFIG` to your final public URL — the **QR code** and **vCard** use it.

## 🚀 Host on GitHub Pages

1. Create a repo. For a URL like `https://<username>.github.io`, name the repo exactly `<username>.github.io`. (Any other repo name works too — you'll just get `https://<username>.github.io/<repo>/`.)
2. Put `index.html` (and your photo) in the repo root and push:
   ```bash
   git init
   git add .
   git commit -m "Launch digital business card"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `root` → Save.**
4. Wait ~1 minute, then open your Pages URL. Done.

The included `.nojekyll` file tells GitHub Pages to serve everything as-is.

## Notes
- The **QR code** is rendered via the free `api.qrserver.com` image API (the only external call besides Google Fonts). It just needs internet when the page is viewed. If you prefer zero external calls, generate a QR PNG for your URL and swap the `<img id="qrImg">` source for a local file.
- Fully responsive, dark-mode-first with a light toggle, respects `prefers-reduced-motion`, and includes SEO + Open Graph + Twitter + JSON-LD structured data.
- Add an `og-image.png` (1200×630) to the folder for rich link previews on LinkedIn/Twitter/WhatsApp.
