import { getPermalink, getAsset, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'The Club',
      href: '/#missao',
    },
    { 
      text: 'Team', 
      href: '/team' 
    },
    {
      text: 'Services',
      href: '/services',
    },
    {
      text: 'Research',
      href: '/research',
    },
    {
      text: 'Events',
      href: '/events',
    },
    {
      text: 'Recruitment',
      href: '/recruitment',
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
    { 
      ariaLabel: 'Instagram', 
      icon: 'tabler:brand-instagram', 
      href: 'https://www.instagram.com/nova_real_estate_club' /* <- Confirma se o @ do Instagram é este! */
    },
    { 
      ariaLabel: 'LinkedIn', 
      icon: 'tabler:brand-linkedin', 
      href: 'https://www.linkedin.com/company/nrec-nova-real-estate-club/posts/?feedView=all' 
    },
  ],
  footNote: `
    © ${new Date().getFullYear()} Nova Real Estate Club · Carcavelos, Portugal. All rights reserved.
  `,
};
