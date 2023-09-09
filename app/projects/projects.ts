import { skillIDs } from '../skills/skills';

export const projectIDs = {
  signalBox: 'signal-box',
  productionDashboard: 'production-dashboard',
  elvanRestaurantApp: 'elvan-restaurant-app',
  dailyStarApp: 'daily-star-app',
  spotlas: 'spotlas',
  aalokito: 'aalokito',
  personalPortfolio: 'personal-portfolio',
} as const;

export type ProjectIDType = (typeof projectIDs)[keyof typeof projectIDs];

export interface Project {
  id: ProjectIDType;
  name: string;
  description: string;
  link: ProjectUrl;
  associatedSkills: (typeof skillIDs)[keyof typeof skillIDs][];
}

export type ProjectUrl = {
  type: 'external' | 'internal';
  url: string;
};

export const getSoftwareProjectsByIds = (ids: string[]) => {
  return softwareProjects.filter((project) => ids.includes(project.id));
};

export const softwareProjects: Project[] = [
  {
    id: projectIDs.signalBox,
    name: 'Anomaly Detection System',
    description:
      'Built a brand new anomaly detection system for Network Rail to remotely monitor rail stations and facilitate early problem detection.',
    link: {
      type: 'internal',
      url: '/experiences/senceive',
    },
    associatedSkills: [
      'csharp',
      'dotnet',
      'sql-server',
      'vuejs',
      'nuxtjs',
      'tailwindcss',
      'azure',
      'typescript',
    ],
  },
  {
    id: projectIDs.productionDashboard,
    name: 'Internal Production Dashboards - Senceive',
    description:
      'At Senceive, I built several internal dashboards leveraging cutting-edge technologies like Vue3, Nuxt 3, and .Net Core. These dashboards were not only visually appealing but also provided a comprehensive and intuitive interface for users to interact with and explore data. By integrating ChartJS, I designed intricate and informative charts, enabling users to visualize complex datasets easily. This initiative was a testament to my capabilities in full-stack development, delivering robust solutions that catered to the needs of both clients and end-users.',
    link: {
      type: 'internal',
      url: '/experiences/senceive',
    },
    associatedSkills: [
      'csharp',
      'dotnet',
      'sql-server',
      'nextjs',
      'tailwindcss',
      'typescript',
      'vuejs',
    ],
  },
  {
    id: projectIDs.elvanRestaurantApp,
    name: 'Client Restaurant Application',
    description:
      'Engineered and led a client restaurant application with an admin panel. The project utilized a mono repo structure for easier management.',
    link: {
      type: 'external',
      url: 'https://github.com/rifat0153/elvan-monorepo',
    },
    associatedSkills: ['flutter', 'dart', 'firebase'],
  },
  {
    id: projectIDs.dailyStarApp,
    name: 'The Daily Star - Bangladesh Mobile App',
    description:
      'Developed a mobile app for both iOS and Android platforms. The app has over 10000+ daily active users with 100k+ downloads.',
    link: {
      type: 'external',
      url: 'https://apps.apple.com/us/app/the-daily-star/id589009555',
    },
    associatedSkills: ['flutter', 'dart', 'firebase', 'nodejs'],
  },
  {
    id: projectIDs.spotlas,
    name: 'Spotlas Chat Feature',
    description: 'Participated in the development and maintenance of the chat feature for Spotlas.',
    link: {
      type: 'external',
      url: 'https://apps.apple.com/gb/app/spotlas/id1464125251',
    },
    associatedSkills: ['flutter', 'rest-api'],
  },
  {
    id: projectIDs.aalokito,
    name: 'Charity App',
    description: 'Developed a charity app with Flutter, NodeJs (Express) and MongoDB from scratch.',
    link: {
      type: 'external',
      url: 'https://github.com/rifat0153/Alokito-App',
    },
    associatedSkills: ['flutter', 'nodejs', 'mongodb', 'google-cloud-run', 'docker'],
  },
  {
    id: projectIDs.personalPortfolio,
    name: 'Personal Portfolio Website',
    description:
      'A showcase of my work and skills, developed using NextJs, TypeScript, and TailwindCSS.',
    link: {
      type: 'external',
      url: 'https://github.com/rifat0153/portfolio-nextjs ',
    },
    associatedSkills: ['nextjs', 'typescript', 'tailwindcss'],
  },
];
