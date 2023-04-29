import { StaticImageData } from 'next/image';

import dailyStarImg1 from '@/public/daily_star_1.png';
import dailyStarImg2 from '@/public/daily_star_2.png';
import spotlasImg1 from '@/public/spotlas_1.png';
import spotlasImg2 from '@/public/spotlas_2.png';

export type Portfolio = {
  name: string;
  description: string;
  images: StaticImageData[];
  links: {
    appstoreLink: string;
    playstoreLink: string;
  };
  themeColor?: string;
};

export const portfolios: Portfolio[] = [
  {
    name: 'Elvan',
    description: 'Elvan Description',
    images: [spotlasImg1, spotlasImg2],
    links: {
      appstoreLink: 'https://apps.apple.com/gb/app/spotlas/id1464125251',
      playstoreLink: 'https://play.google.com/store/apps/details?id=co.uk.wotspot.indigo.ios.stage',
    },
    themeColor: 'pink',
  },
  {
    name: 'Spotlas',
    description:
      'Spotlas is the social network revolutionising the way people discover, choose and experience spots around the world – from cafes, restaurants, bars and nightclubs to hotels, museums, shops and beaches...Any spot. Any time. Anywhere.',
    images: [spotlasImg1, spotlasImg2],
    links: {
      appstoreLink: 'https://apps.apple.com/gb/app/spotlas/id1464125251',
      playstoreLink: 'https://play.google.com/store/apps/details?id=co.uk.wotspot.indigo.ios.stage',
    },
    themeColor: 'pink',
  },
  {
    name: 'Daily Star',
    description:
      "Bangladesh's leading English newspaper updating 24/7 with latest, breaking, politics, business, technology, world, entertainment, sports, lifestyle and crime news. The Daily Star established its place in the media scene of Bangladesh on January 14, 1991 as an independent newspaper.",
    images: [dailyStarImg1, dailyStarImg2],
    links: {
      appstoreLink: 'https://apps.apple.com/us/app/the-daily-star/id589009555',
      playstoreLink:
        'https://play.google.com/store/apps/details?id=com.mcc.thedailystar&hl=en_US&gl=US',
    },
    themeColor: 'blue',
  },
];
