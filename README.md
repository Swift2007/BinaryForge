# BinaryForge website

Astro is a static site builder: you write components in `.astro` files and it outputs plain HTML and CSS. This site ships no JavaScript.

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
  components/                # Navbar, Footer, Button, ContactForm, Logo
  sections/                  # Hero, WhyUs, Services, Contact
  data/site.ts               # company facts (email, phone, location, socials, form endpoint)
  data/content.ts            # all page wording (hero, story, principles, services)
  styles/                    # variables.css, base.css, animations.css
public/
  binaryforge-logo-light.svg (in use: dark-on-light logo),
  binaryforge-icon.svg, favicon.svg (keep file names when swapping artwork)
```

## How do I change…?

| I want to change…        | Edit this file          |
| ------------------------ | ----------------------- |
| Company info, email, phone, location, socials | `src/data/site.ts` |
| Wording, story, principles, services | `src/data/content.ts` |
| Colors (single light theme) | `src/styles/variables.css` |
| Contact form endpoint (Formspree / Web3Forms URL) | `src/data/site.ts` → `formEndpoint` |
| Logo artwork | `public/binaryforge-logo-light.svg` (keep file name) |
| Page title and SEO text | `src/layouts/BaseLayout.astro` |

## Deployment

**Netlify:** drag the `dist/` folder into Netlify Drop, or connect the repo with build command `npm run build` and publish directory `dist`.

**Vercel:** import the repo, set framework preset to Astro, build command `npm run build`, output `dist`. No adapter needed (static).

**GitHub Pages:** run `npm run build`, then publish `dist/` with any static host action (e.g. `peaceiris/actions-gh-pages`). Set `site:` in `astro.config.mjs` to your public URL first.
