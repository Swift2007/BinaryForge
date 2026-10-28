// HAUTEK company facts.
// OWNER: edit these values. They appear in the navbar, contact
// section and footer. Anything marked TODO is a placeholder you
// need to replace with real information.

export const site = {
  name: 'HAUTEK',
  tagline: 'Software built to last.',

  // Real contact details: Malawi numbers, ProtonMail inbox. Numbers
  // live in a list: both the contact section and the footer render
  // every entry as a dialable link.
  email: 'hautek265@protonmail.com',
  phones: ['+265 990265044', '+265 994481263'],
  // Studio remote for now: country-wide operation, no physical office.
  location: 'Malawi',

  // Real profile URLs only. The footer shows its Social column when
  // this list has entries, and hides it when the list is empty.
  // TODO(owner): add profiles (GitHub, LinkedIn, ...) as they exist.
  socials: [] as { label: string; href: string }[],

  // Contact form backend (Web3Forms). The access key is a public token
  // by design: Web3Forms restricts abuse through the allowed-domain
  // list in its dashboard, so keep that set to the real domain.
  // If the key is ever removed, the form falls back to a mailto action
  // so sending always behaves like something real.
  formEndpoint: 'https://api.web3forms.com/submit',
  accessKey: 'eed9add9-2bf9-468c-8d11-661c54ea829a',

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],

  // TODO(owner): replace with the real public URL of this site. The
  // contact form builds its post-submit redirect from this value, so
  // it must be set before deploying.
  canonical: 'https://hautek.example.com/',
};
