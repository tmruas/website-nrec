import { getPermalink, getAsset, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'The Club',
      href: '/#missao',
    },
    {
      text: 'Services',
      href: '/#servicos',
    },
    {
      text: 'Research',
      href: '/research',
    },
    {
      text: 'Events',
      href: '/#eventos',
    },
    {
      text: 'Recruitment',
      href: '/#recruitment',
    },
  ],
  actions: [
    { text: 'Partnerships', href: '/parcerias', variant: 'primary' }
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms & Conditions', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/nrec_novasbe' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/nova-real-estate-club' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Nova Real Estate Club · Carcavelos, Portugal. All rights reserved.
  `,
};
