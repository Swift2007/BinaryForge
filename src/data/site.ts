// BinaryForge company facts.
// OWNER: edit these values. They appear in the navbar, contact
// section and footer. Anything marked TODO is a placeholder you
// need to replace with real information.

export const site = {
  name: 'BinaryForge',
  tagline: 'Where ideas are forged into software.',

  // Real contact details: Malawi numbers, ProtonMail inbox. Numbers
  // live in a list: both the contact section and the footer render
  // every entry as a dialable link.
  email: 'binaryforge265@protonmail.com',
  phones: ['+265 990265044', '+265 994481263'],
  // Studio remote for now: country-wide operation, no physical office.
  location: 'Malawi',

  // TODO: replace with real profile URLs. Delete any you do not use.
  socials: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'X', href: 'https://x.com/' },
  ],

  // Contact form backend (Web3Forms). The access key is a public token
  // by design: Web3Forms restricts abuse through the allowed-domain
  // list in its dashboard, so keep that set to the real domain.
  // If the key is ever removed, the form falls back to a mailto action
  // so sending always behaves like something real.
  formEndpoint: 'https://api.web3forms.com/submit',
  accessKey: 'eed9add9-2bf9-468c-8d11-661c54ea829a',

  nav: [
    { label: 'Why Us', href: '#why-us' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ],

  // TODO: replace with the real public URL of this site.
  canonical: 'https://binaryforge.example.com/',
};
