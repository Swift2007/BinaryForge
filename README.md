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

> Update this section to match what the project actually uses.

- HTML, CSS and JavaScript (or [React + Vite / Next.js])
- [Tailwind CSS / custom CSS]
- Contact form powered by [Formspree / EmailJS / custom backend]

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (if using a build tool)
- Git

### Installation

```bash
# Clone the repository
git clone [REPOSITORY URL]
cd binaryforge

# Install dependencies (skip for plain HTML/CSS/JS)
npm install

# Start the development server
npm run dev
```

For a plain HTML/CSS/JS version, open `index.html` in your browser or use a simple local server such as the VS Code "Live Server" extension.

### Build for production

```bash
npm run build
```

## Project structure

> Adjust to match your actual files.

binaryforge/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md

## Editing content

- **Text and copy:** edit the section content in `index.html` (or the matching components).
- **Colors:** change the CSS variables at the top of the stylesheet.
- **Services:** add or remove service cards in the Services section.
- **Contact details:** update the email, phone, location and social links in the Contact section and footer.
- **Contact form:** set your form endpoint or service key in the form configuration.

## Deployment

The site can be hosted for free on:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

Connect the repository, set the build command (`npm run build`, if applicable) and the output folder, then deploy. Add a custom domain such as `binaryforge.com` in the hosting dashboard.

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