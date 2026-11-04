// HAUTEK page copy.
// OWNER: edit all wording here. Short, plain sentences.
// No exclamation marks. Headlines under 8 words.
// The sections loop over these lists, so reorder or reword freely.

export const hero = {
  // One large headline. Keep it under 8 words.
  title: 'Software built to last.',
  // One supporting sentence.
  intro:
    'HAUTEK is a small software startup. We design and build mobile apps, websites and business tools, and we stay to maintain them.',
  primaryCta: { label: 'See our services', href: '#services' },
  secondaryCta: { label: 'Contact us', href: '#contact' },
};

export const whyUs = {
  eyebrow: 'Why we exist',
  // One large statement paragraph, one to three sentences.
  statement:
    'HAUTEK started as a few friends building software together. We wanted businesses to get software that is reliable, honest and fairly priced, and built to serve them for years. That is still the whole idea.',
  principles: [
    {
      title: 'Reliable',
      text: 'We build software that keeps working, long after launch day.',
    },
    {
      title: 'Honest',
      text: 'We say what something costs, how long it takes, and why.',
    },
    {
      title: 'Fairly priced',
      text: 'A small team means you pay for the work, not the overhead.',
    },
  ],
};

export const services = {
  eyebrow: 'Services',
  heading: 'What we build',
  intro:
    'Four things, done well. If your project fits one of these, we can help.',
  items: [
    {
      // The id doubles as a deep-link anchor for the footer's Services column.
      id: 'mobile-apps',
      index: '01',
      title: 'Mobile Apps',
      text: 'iOS and Android apps, from first sketch to the app stores.',
    },
    {
      id: 'websites',
      index: '02',
      title: 'Websites',
      text: 'Fast, clear websites that say what you do and win trust.',
    },
    {
      id: 'web-applications',
      index: '03',
      title: 'Web Applications',
      text: 'Tools your team and customers use every day, in the browser.',
    },
    {
      id: 'custom-software',
      index: '04',
      title: 'Custom Software',
      text: 'Systems shaped around how your business already works.',
    },
  ],
  // One call to action for the whole section, closing the list.
  cta: { label: 'Start a project', href: '#contact' },
};

export const work = {
  eyebrow: 'Work',
  heading: 'Recent projects',
  intro: 'A few things we have shipped. Open a project to see its details.',
  // The slug drives the project page (/projects/<slug>) built by
  // src/pages/projects/[slug].astro. `about` is a brief explainer
  // sourced from each project's Privacy Policy; the card href must
  // match the slug, and each project's documents live at
  // /terms/<slug> and /privacy/<slug>.
  items: [
    {
      slug: 'serafim',
      title: 'Serafim',
      text: 'A social app for communities: posts, reactions and real-time chat.',
      about:
        'Serafim is a social app for communities. You sign in with email or Google, build a profile with your display name, bio and interests, and add friends. Posts, comments and reactions called sparks fill your feed, and groups and circles organise your people. Real-time chat keeps the conversation going, with backups you can save to Google Drive. The app collects no precise location, and you can delete your account and data when you leave.',
      href: '/projects/serafim',
      cta: 'Project details',
    },
    {
      slug: 'hitarujp',
      title: 'HitaruJP',
      text: 'A Japanese language app with curated videos matched to your level.',
      about:
        'HitaruJP is a Japanese language app built around curated videos. You set your JLPT level, and the app recommends videos that fit it. Watch with transcripts on YouTube, save sentences, and grow vocabulary and flashcards through review sessions. AI explanations break down what you are reading. Progress tracks your activity days, and the backend stores no email addresses.',
      href: '/projects/hitarujp',
      cta: 'Project details',
    },
  ],
};

export const process = {
  eyebrow: 'Process',
  heading: 'How we work',
  intro:
    'Four steps, the same every time. You always know where things stand.',
  steps: [
    {
      index: '01',
      title: 'Talk',
      text: 'A short conversation about what you need and what success looks like.',
    },
    {
      index: '02',
      title: 'Plan',
      text: 'A written proposal: scope, price, timeline, and what counts as done.',
    },
    {
      index: '03',
      title: 'Build',
      text: 'Work happens in small, visible steps, with a review at each one.',
    },
    {
      index: '04',
      title: 'Support',
      text: 'After launch we stay close: fixes, updates and honest advice.',
    },
  ],
};

export const faq = {
  eyebrow: 'FAQ',
  heading: 'Common questions',
  intro: 'Short answers to what people ask before starting a project.',
  items: [
    {
      question: 'How much does a project cost?',
      answer:
        'Every project is quoted after a short conversation. You get a fixed price in writing before work starts, so there are no surprises.',
    },
    {
      question: 'How long does a project take?',
      answer:
        'A simple website takes weeks; larger systems take longer. Your proposal includes a timeline with clear checkpoints.',
    },
    {
      question: 'Who owns the software?',
      answer:
        'You do. When the project is paid in full, the designs, code and content we made for you are yours.',
    },
    {
      question: 'Do you offer support after launch?',
      answer:
        'Yes. Everything we build can run on a support plan: fixes, updates and small improvements, priced separately from the build.',
    },
    {
      question: 'Where are you based?',
      answer:
        'Malawi. We work with clients anywhere over email, phone and video calls.',
    },
    {
      question: 'How do we start?',
      answer:
        'Send a message through the form below, or write to us directly. We reply within two working days.',
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  heading: 'Let\u2019s talk about what you want to build.',
  intro:
    'Tell us what you have in mind. We reply within two working days.',
  form: {
    firstNameLabel: 'First name',
    firstNamePlaceholder: 'First name',
    surnameLabel: 'Surname',
    surnamePlaceholder: 'Surname',
    emailLabel: 'Email',
    emailPlaceholder: 'Email',
    phoneLabel: 'Phone',
    phonePlaceholder: 'Phone',
    messageLabel: 'Message',
    messagePlaceholder: 'Message',
    consent:
      'I consent to HAUTEK using the information in this form to reply to my message.',
    submit: 'Send message',
    note: 'This form is not connected yet. Sending opens your email app instead. Add your Web3Forms access key in src/data/site.ts to change that.',
    successTitle: 'Thanks. We got your message.',
    successText: 'We reply within two working days.',
  },
};

export const footer = {
  note: 'Software built by a small startup that cares about craft.',
  rights: '\u00A9 2026 HAUTEK. All rights reserved.',
};
