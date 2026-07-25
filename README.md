# KosmetiKos website

Static bilingual site (Norwegian primary at `/`, English at `/en/`) for KosmetiKos, a beauty and wellness salon in Glomfjord, Norway. No build step, no dependencies — plain HTML/CSS/JS, works by just opening `index.html` or serving the folder as-is.

## Structure

```
index.html, behandlinger.html, bestill-time.html, om-oss.html, kontakt.html   <- Norwegian pages
en/index.html, en/treatments.html, en/booking.html, en/about.html, en/contact.html  <- English pages
assets/css/style.css      <- all styling
assets/js/main.js         <- mobile nav toggle only
assets/images/            <- logo, decorative illustrations, team portraits
sitemap.xml, robots.txt, favicon.svg
```

All internal links and asset paths are relative, so the site works correctly whether it's opened directly from disk, served from a domain root, or served from a subpath (like a GitHub Pages project URL).

## Deploying to GitHub Pages (test launch)

**Option A — drag and drop, no git needed:**
1. Go to [github.com/new](https://github.com/new) and create a new repository (public, no README/gitignore/license needed).
2. On the new repo's page, click **"uploading an existing file"**.
3. Drag every file and folder from inside `kosmetikos-website/` (not the folder itself, its *contents*) into the upload box, and commit.
4. Go to **Settings → Pages**, under "Build and deployment" set Source to **Deploy from a branch**, branch **main**, folder **/(root)**, save.
5. GitHub gives you a URL like `https://yourusername.github.io/your-repo-name/` within a minute or two.

**Option B — git command line:**
```bash
cd kosmetikos-website
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```
Then enable Pages the same way as step 4 above.

## Important: this is a test URL, not the final domain

The site's `<link rel="canonical">`, hreflang tags, Open Graph tags, and `sitemap.xml` all point to `https://kosmetikos.no/` — the real intended domain, not whatever GitHub Pages URL you get. That's intentional: it keeps the SEO metadata correct for launch day and avoids Google indexing the wrong URL. It also means:

- Don't submit the GitHub Pages test URL to Google Search Console — only the real domain once it's live there.
- The Timma booking widget and Google Maps embed will work fine on the test URL since they don't depend on the site's own domain.

## Connecting the real domain later

When `kosmetikos.no` is ready to point here (or to whatever final host you choose):
1. In the repo, add a file named `CNAME` (no extension) containing just `kosmetikos.no`.
2. At your domain registrar, add a `CNAME` record pointing `kosmetikos.no` (or `www`) to `yourusername.github.io`.
3. In GitHub Settings → Pages, enter the custom domain and enable "Enforce HTTPS" once it's verified.

## Local preview

`_serve.ps1` (Windows PowerShell) spins up a no-dependency local server on `http://localhost:8791/` for previewing before you deploy. It's excluded from git via `.gitignore` since it's a local dev convenience, not part of the site.
