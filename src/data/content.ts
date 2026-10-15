// BinaryForge page copy.
// OWNER: edit all wording here. Short, plain sentences.
// No exclamation marks. Headlines under 8 words.
// The sections loop over these lists, so reorder or reword freely.

export const hero = {
  // One large headline. Keep it under 8 words.
  title: 'Where ideas are forged into software.',
  // One supporting sentence.
  intro:
    'We design and build mobile apps, websites and business software. A small team, close to the work.',
  primaryCta: { label: 'See our services', href: '#services' },
  secondaryCta: { label: 'Contact us', href: '#contact' },
};

export const whyUs = {
  eyebrow: 'Why we exist',
  // One large statement paragraph, one to three sentences.
  statement:
    'BinaryForge started as a few friends building software together. We wanted businesses to get software that is reliable, honest and fairly priced. That is still the whole idea.',
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
      index: '01',
      title: 'Mobile Apps',
      text: 'iOS and Android apps, from first sketch to the app stores.',
    },
    {
      index: '02',
      title: 'Websites',
      text: 'Fast, clear websites that say what you do and win trust.',
    },
    {
      index: '03',
      title: 'Web Applications',
      text: 'Tools your team and customers use every day, in the browser.',
    },
    {
      index: '04',
      title: 'Custom Software',
      text: 'Systems shaped around how your business already works.',
    },
  ],
  // Every service row links here.
  itemCta: { label: 'Start a project', href: '#contact' },
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
      'I consent to BinaryForge using the information in this form to reply to my message.',
    submit: 'Send message',
    note: 'This form is not connected yet. Add your form endpoint in src/data/site.ts.',
    successTitle: 'Thanks. We got your message.',
    successText: 'We reply within two working days.',
  },
};

export const footer = {
  note: 'Software built by a small team that cares about craft.',
  rights: '\u00A9 2026 BinaryForge. All rights reserved.',
};
