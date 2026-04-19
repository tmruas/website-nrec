import { getPermalink, getAsset, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'O Clube',
      href: '/#missao',
    },
    {
      text: 'Serviços',
      href: '/#servicos',
    },
    {
      text: 'Research',
      href: getBlogPermalink(),
    },
    {
      text: 'Eventos',
      href: '/#eventos',
    },
    {
      text: 'Recrutamento',
      href: '/#recrutamento',
    },
  ],
  actions: [
    { text: 'Parcerias', href: '/parcerias', variant: 'primary' }
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Termos e Condições', href: getPermalink('/terms') },
    { text: 'Política de Privacidade', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/nrec_novasbe' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/nova-real-estate-club' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Nova Real Estate Club · Carcavelos, Portugal. Todos os direitos reservados.
  `,
};
