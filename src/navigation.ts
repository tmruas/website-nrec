import { getPermalink, getAsset, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'The Club',
      href: '/#missao',
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
  links: [
    {
      title: 'The Club',
      links: [
        { text: 'About Us', href: '/' },
        { text: 'Meet the Team', href: '/team' },
        { text: 'Services & Partnerships', href: '/services' },
      ],
    },
    {
      title: 'Discover',
      links: [
        { text: 'Research & Insights', href: '/research' },
        { text: 'Events & Networking', href: '/events' },
        { text: 'Join Us (Recruitment)', href: '/recruitment' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Nova SBE Campus', href: '#' },
        { text: 'Carcavelos, Portugal', href: '#' },
        { text: 'Email Us', href: 'realestate.club@novasbe.pt' }, /* Podes alterar este email para o vosso oficial */
      ],
    },
  ],
  secondaryLinks: [
    /* Deixamos vazio para manter limpo de falsas Políticas de Privacidade */
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/nova_real_estate_club' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/nrec-nova-real-estate-club/posts/?feedView=all' },
  ],
  footNote: `
    © 2026 Nova Real Estate Club. All rights reserved.
  `,
};
