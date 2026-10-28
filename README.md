# HAUTEK website

Astro is a static site builder: you write components in `.astro` files and it outputs plain HTML and CSS. This site ships no JavaScript.

## Requirements

- Node.js 18 or newer and npm (Astro 4; verified on Node 24).
- Nothing else to run it: static output, no adapter, no UI libraries, no JavaScript in the shipped page.
- Before launch, fill the placeholders in `src/data/site.ts`: email, phone, location, social URLs, `accessKey` (your Web3Forms key), `canonical` (plus `site:` in `astro.config.mjs`).
- Design rules the code follows: single light warm-paper theme (tokens in `src/styles/variables.css`), Fraunces 500 + 600 for headlines and the wordmark, Inter 400 + 600 for body and UI, one ink accent used sparingly, full-pill buttons, hairline dividers instead of decorated cards, restrained motion (hero load-in, section and footer scroll-settle, page cross-fades, menu fade-in; progressive CSS only, `prefers-reduced-motion` respected).

## Install and run

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static output to dist/
npm run preview  # preview the built site
```

## Folder tree

```
src/
  layouts/BaseLayout.astro   # html shell, SEO, navbar + footer (single light theme)
  pages/index.astro          # assembles Hero, WhyUs, Services, Process, FAQ, Contact
  pages/sent.astro, pages/terms.astro, pages/privacy.astro  # success page + legal pages (lawyer review recommended)
  components/                # Navbar, Footer, Brand, Button, ContactForm
  sections/                  # Hero, WhyUs, Services, Process, FAQ, Contact
  data/site.ts               # company facts (email, phone, location, socials, form endpoint)
  data/content.ts            # all page wording (hero, story, principles, services, process, faq)
  styles/                    # variables.css, base.css, animations.css
public/
  hero-bg.jpg (hero backdrop, optimized ~120KB),
  favicon.svg (minimal H mark; keep the file name when swapping artwork)
```

## How do I change…?

| I want to change…        | Edit this file          |
| ------------------------ | ----------------------- |
| Company info, email, phone, location, socials | `src/data/site.ts` |
| Wording, story, principles, services, process, FAQ | `src/data/content.ts` |
| Colors (single light theme) | `src/styles/variables.css` (warm paper + ink palette) |
| Contact form backend (Web3Forms access key) | `src/data/site.ts` → `accessKey` |
| Brand wordmark | `src/components/Brand.astro` (text; replace the span with an image to use a real logo) |
| Page title and SEO text | `src/layouts/BaseLayout.astro` |

## Deployment

**Netlify:** drag the `dist/` folder into Netlify Drop, or connect the repo with build command `npm run build` and publish directory `dist`.

**Vercel:** import the repo, set framework preset to Astro, build command `npm run build`, output `dist`. No adapter needed (static).

**GitHub Pages:** run `npm run build`, then publish `dist/` with any static host action (e.g. `peaceiris/actions-gh-pages`). Set `site:` in `astro.config.mjs` to your public URL first.
