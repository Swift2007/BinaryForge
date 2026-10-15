# BinaryForge website

Astro is a static site builder: you write components in `.astro` files and it outputs plain HTML and CSS. This site ships no JavaScript.

## Requirements

- Node.js 18 or newer and npm (Astro 4; verified on Node 24).
- Nothing else to run it: static output, no adapter, no UI libraries, no JavaScript in the shipped page.
- Before launch, fill the placeholders in `src/data/site.ts`: email, phone, location, social URLs, `formEndpoint`, `canonical` (plus `site:` in `astro.config.mjs`).
- Design rules the code follows: single light cool-grey theme (tokens in `src/styles/variables.css`), Inter 400 + 600 only, one navy accent used sparingly, hairline dividers instead of decorated cards, no scroll animation, `prefers-reduced-motion` respected.

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
  pages/index.astro          # assembles Hero, WhyUs, Services, Contact
  pages/terms.astro, pages/privacy.astro  # legal placeholders (owner must replace)
  components/                # Navbar, Footer, Button, ContactForm, Logo
  sections/                  # Hero, WhyUs, Services, Contact
  data/site.ts               # company facts (email, phone, location, socials, form endpoint)
  data/content.ts            # all page wording (hero, story, principles, services)
  styles/                    # variables.css, base.css, animations.css
public/
  hero-bg.jpg (hero backdrop, optimized ~120KB),
  binaryforge-logo-light.svg (navbar), binaryforge-logo.svg (footer card),
  binaryforge-icon.svg, favicon.svg (keep file names when swapping artwork)
```

## How do I change…?

| I want to change…        | Edit this file          |
| ------------------------ | ----------------------- |
| Company info, email, phone, location, socials | `src/data/site.ts` |
| Wording, story, principles, services | `src/data/content.ts` |
| Colors (single light theme) | `src/styles/variables.css` (cool blue-grey palette) |
| Contact form endpoint (Formspree / Web3Forms URL) | `src/data/site.ts` → `formEndpoint` |
| Logo artwork | `public/binaryforge-logo-light.svg` (keep file name) |
| Page title and SEO text | `src/layouts/BaseLayout.astro` |

## Deployment

**Netlify:** drag the `dist/` folder into Netlify Drop, or connect the repo with build command `npm run build` and publish directory `dist`.

**Vercel:** import the repo, set framework preset to Astro, build command `npm run build`, output `dist`. No adapter needed (static).

**GitHub Pages:** run `npm run build`, then publish `dist/` with any static host action (e.g. `peaceiris/actions-gh-pages`). Set `site:` in `astro.config.mjs` to your public URL first.
