import { projectIDs } from '../projects/projects';
import { getSkillsByExperienceId, skillIDs, SkillIDType } from '../skills/skills';

export const experienceIDs = {
  Senceive: 'senceive',
  FlutterFreelance: 'flutter-freelance',
  PlanBInsights: 'plan-b-insights',
  BengalSoftware: 'bengal-software',
} as const;

export type ExperienceIDType = (typeof experienceIDs)[keyof typeof experienceIDs];

export interface WorkExperience {
  id: ExperienceIDType;
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
  bulletPoints: string[];
  country?: string;
  image?: string;
  associatedSkills: (typeof skillIDs)[keyof typeof skillIDs][];
  associatedProjects: (typeof projectIDs)[keyof typeof projectIDs][];
}

export const getWorkExperienceByIds = (ids: string[]) => {
  return workExperiences.filter((experience) => ids.includes(experience.id));
};

export const getWorkExperiencesBySkillId = (skillId: SkillIDType) => {
  const experiences = workExperiences.filter((experience) =>
    getSkillsByExperienceId(experience.id).some((skill) => skill.id === skillId)
  );
  return experiences;
};

export const getWorkExperienceByProjectIds = (projectIds: string[]): WorkExperience[] => {
  const experiences = workExperiences.filter((experience) =>
    experience.associatedProjects.some((projectId) => projectIds.includes(projectId))
  );
  return experiences;
};

export const workExperiences: WorkExperience[] = [
  {
    id: experienceIDs.Senceive,
    jobTitle: 'Software Engineer',
    company: 'Senceive',
    duration: 'June 2022 – Current',
    country: 'United Kingdom',
    description:
      'Full-stack developer working on a range of projects including the web monitoring platform, signal box, and production dashboard utilizing .Net, Vue, Nuxt, and TypeScript.',
    bulletPoints: [
      `Server development with .Net exposing REST API for frontend clients. Followed best practices
      including clean architecture, mediator pattern, SOLID principles etc that led to maintainable and
      testable code.`,

      `SPA/App development with Vue.js and Nuxt.js. Used pinia and vue composables for state
      management, TailwindCss/CSS for styling, Typescript plus Zod for data validation and strict
      typing and Tanstack Query for advanced asynchronous operations and caching.`,

      `Took initiative in designing and refactoring major products, optimizing architectures for
      substantial gains in performance and reliability.`,
      `Led the redesign and API overhaul of the flagship data/alert management/monitoring tool,
      transitioning from .NET 5 to .NET 8.`,

      `Designed and developed an full-stack anomaly detection system for Network Rail, contributing to
      remote monitoring and early problem detection, thereby improving the reliability and performance
      of rail systems.`,

      `Utilized Python and Open AI to generate C# Dapper boilerplate code for interacting with stored
      procedures in the database, streamlining development processes and enhancing code efficiency.`,
      `Created internal dashboards for statistical data analysis, providing a unified source for product
      performance assessment and actionable insights.`,
    ],
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/senceive-1.png?alt=media&token=aec7c648-318c-4757-8275-6266b7cfeff7',
    associatedSkills: ['unit-testing'],
    associatedProjects: ['web-monitor-4', 'signal-box', 'production-dashboard'],
  },
  {
    id: experienceIDs.FlutterFreelance,
    jobTitle: 'Flutter Lead & Developer (Contract / Remote)',
    company: 'Elvan AB, RSI LAB, Spotlas',
    duration: 'January 2022 – May 2023',
    country: 'Sweden, Bangladesh, United Kingdom',
    description: 'Developed and maintained mobile applications for various clients.',
    bulletPoints: [
      `Developed 4 mobile applications over two years using both Flutter and React Native`,

      `Led the development of a client-specific restaurant application at Elvan AB, mentoring a team of
      two Flutter developers, and transitioning to a mono repo structure, resulting in streamlined project
      management and enhanced efficiency`,

      `Developed the latest "The Daily Star - Bangladesh" app at RSI LAB, leading to 100k+ downloads,
      10,000+ daily active users, and a 70% reduction in Android device crashes`,

      `Collaborated with the development team at Spotlas to address and rectify software bugs,
      ensuring app reliability and solidifying user trust.`,
    ],
    associatedSkills: ['flutter', 'dart', 'nodejs', 'rest-api', 'firebase', 'mongodb'],
    associatedProjects: ['elvan-restaurant-app', 'daily-star-app', 'spotlas'],
  },
  {
    id: experienceIDs.PlanBInsights,
    jobTitle: 'Junior Software Developer',
    company: 'Plan B Insights',
    country: 'Bangladesh',
    duration: 'January 2021 – September 2021',
    description:
      'Junior software developer tasked with developing and maintaining the Plan B Insights mobile application and backend services.',
    bulletPoints: [
      `Developed a charity app with Flutter with integrated geospatial features, enhancing user
       engagement and enabling real-time location-based notifications.`,

      `Developed REST APIs with express.js and mongodb.`,

      `Utilized docker compose for easy deployment on Google Cloud Run.`,
    ],
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/plan%20b%20insights%201.png?alt=media&token=e7faf080-208c-44c7-8303-0578a742b816',
    associatedSkills: [
      'flutter',
      'dart',
      'nodejs',
      'mongodb',
      'firebase',
      'google-cloud-run',
      'docker',
      'rest-api',
    ],
    associatedProjects: ['aalokito'],
  },
  {
    id: experienceIDs.BengalSoftware,
    jobTitle: 'Software Intern',
    company: 'Bengal Software',
    duration: 'September 2020 – December 2020',
    country: 'Bangladesh',
    description:
      'Worked as a software intern, working on React and Node.js projects, and learning about the software development process.',
    bulletPoints: [
      `Created web pages with React/Redux with RESPI API integration via Axios.`,
      `Learned the basics of Node.js and REST API development`,
    ],
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/bengal-soft.png?alt=media&token=b0b0b1df-2db5-4c21-9f8a-c200a05764fb',
    associatedSkills: ['react', 'nodejs', 'rest-api'],
    associatedProjects: [],
  },
] as const;
