import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'INBTP',
  description: "Institut National du Bâtiment et des Travaux Publics",
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/favicon.png',
    },
  },
};

export default metadata;