# BinaryForge

**Where ideas are forged into software.**

BinaryForge is a software solutions company that designs and builds mobile apps, websites, web applications and custom software. This repository contains the company's official website.

## About the project

A single-page, semi-minimalist, responsive website with a dark charcoal theme, a single ember-orange accent, and smooth fade-in/fade-out animations.

### Sections

1. **Navigation bar**: sticky top bar with links to Home, Why Us, Services and Contact
2. **Home (hero)**: tagline and calls to action
3. **Why We Exist**: the story and values behind BinaryForge
4. **Services**: mobile apps, websites, web applications and custom software
5. **Contact Us**: contact form and contact details
6. **Footer bar**: quick links, contact details, social links and copyright

## Design

| Role | Color |
| --- | --- |
| Background | `#0F1115` |
| Surface (cards, nav, footer) | `#171B22` |
| Border | `#262C36` |
| Primary text | `#E8EAED` |
| Muted text | `#9AA3AF` |
| Accent (ember) | `#E8833A` |
| Accent hover | `#F29A58` |

- **Typography:** Inter or Poppins, with an optional monospace font for small code-style labels.
- **Animations:** fade-in on scroll, staggered card entrances, smooth hover effects. Animations are reduced for users who enable `prefers-reduced-motion`.
- **Accessibility:** semantic HTML, keyboard navigation, visible focus states, WCAG AA contrast.

## Tech stack

- Plain HTML + CSS + JavaScript — no framework, no build step, no dependencies
- Google Fonts: Inter (UI/body) + JetBrains Mono (tiny `// labels`)
- Inline SVG icons (thin-line, currentColor) — no icon library
- Contact form: client-side validation + `fetch` POST to Formspree (see `js/main.js` → `FORMSPREE_ENDPOINT`). Works with a friendly demo success state until you add your endpoint.

## Getting started

### Prerequisites

- Any modern browser. That is it — no Node, no build.
- Optional: VS Code + Live Server extension, or Python / Node for a static server.

### Run locally

```bash
# Option 1: just open it
# Double-click index.html — or right-click → Open with your browser.

# Option 2: local server (recommended — avoids font/CORS quirks)
npx serve .
# then open the printed http://localhost:3000

# Option 3: Python
python -m http.server 8000
```

### Build for production

No build step. Ship the folder as-is (`index.html`, `css/`, `js/`, `assets/`).

## Project structure

```text
binaryforge/
├── index.html          # all sections: nav, hero, why, services, contact, footer
├── css/
│   └── styles.css      # tokens, layout, cards, form, motion, breakpoints (commented)
├── js/
│   └── main.js         # nav, scrollspy, reveals, validation, Formspree hook
├── assets/
│   ├── binaryforge-logo.svg        # dark-theme lockup (dark badge) — nav + footer
│   ├── binaryforge-logo-light.svg  # light-theme lockup (`#F5F3EF` badge) — swapped in automatically
│   ├── binaryforge-icon.svg        # square app/tab icon — used as favicon
│   ├── favicon.svg                 # legacy fallback icon
│   └── og-cover.svg    # social share placeholder — export to PNG (1200×630) if needed
└── README.md
```

## Editing content

- **Text and copy:** edit directly in `index.html`. Sections are commented (`NAV`, `HERO`, `WHY`, `SERVICES`, `CONTACT`, `FOOTER`). Search for `[EMAIL]`, `[PHONE]`, `[LOCATION]`, `[LINKS]` — replace all (they appear in Contact + footer).
- **Colors:** change the CSS variables at the top of `css/styles.css` (`:root` → `--bg`, `--surface`, `--border`, `--text`, `--muted`, `--accent`, `--accent-hover`). Keep accent usage sparse (~5%).
- **Services:** copy/paste an `article.service-card` block in the `#services` grid. Six included; grid handles 3→2→1 columns automatically.
- **Contact details:** update the `[EMAIL]` / `[PHONE]` / `[LOCATION]` links in `#contact` and the footer, plus the social `[LINKS]`.
- **Contact form:** open `js/main.js`, set `FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_ID"`. Without it the form shows a demo success state (clearly marked). Compatible with EmailJS or any backend — swap the `fetch` call.
- **Theme (dark / light):** dark is the default. The sun/moon button in the nav toggles `html[data-theme="light"]`, swaps the nav/footer logo to `binaryforge-logo-light.svg`, and remembers the choice in `localStorage` (`bf-theme`). All colors live as CSS vars in `css/styles.css` (`:root` + `html[data-theme="light"]`). Light palette: bg `#F5F3EF`, surface `#FFFFFF`, border `#E3DED4`, text `#1A1D23`, muted `#5C6470`, accent `#B25A1B` (AA on light), hover `#8F4A14`.

## Deployment

Static hosting — no build command, publish directory is the repo root (`.`).

- **Netlify:** New site from Git → build command empty → publish directory `.` → Deploy. Or drag-and-drop the folder in Netlify Drop.
- **Vercel:** Import repo → Framework preset “Other” → output directory `.` → Deploy.
- **GitHub Pages:** Settings → Pages → Deploy from branch → `main` / root (`/`) → Save. Site appears at `https://<user>.github.io/<repo>/`.

Add a custom domain in your host dashboard when ready.

## Contributing

The team works on this project together. To contribute:

1. Create a branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -m "Add your feature"`
3. Push the branch: `git push origin feature/your-feature`
4. Open a pull request for review

## Contact

- **Email:** [EMAIL]
- **Phone:** [PHONE]
- **Location:** [LOCATION]
- **Website:** [WEBSITE URL]

## License

© 2026 BinaryForge. All rights reserved.