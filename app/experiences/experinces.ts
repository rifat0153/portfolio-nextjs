import { projectIDs } from '../projects/projects';
import { skillIDs } from '../skills/skills';

export const experienceIDs = {
  Senceive: 'senceive',
  ElvanAB: 'elvan-ab',
  RsiLab: 'rsi-lab',
  Spotlas: 'spotlas',
  PlanBInsights: 'plan-b-insights',
  BengalSoftware: 'bengal-software',
} as const;

export type ExperienceIDType = (typeof experienceIDs)[keyof typeof experienceIDs];

export interface WorkExperience {
  id: ExperienceIDType;
  jobTitle: string;
  company: string;
  duration: string; // Could be a date range or years
  description: string;
  associatedSkills: (keyof typeof skillIDs)[];
  associatedProjects: (keyof typeof projectIDs)[];
}

export const workExperiences: WorkExperience[] = [
  {
    id: experienceIDs.Senceive,
    jobTitle: 'Software Engineer',
    company: 'Senceive',
    duration: 'June 2022 – Current',
    description:
      "Built a brand new anomaly detection system for Network Rail to remotely monitor rail stations and early problem detection. Developed internal dashboards for statistical data analysis, making it a single source to analyze product performance and take necessary actions. Performed regression and system-level testing to verify software quality and function prior to release. Collaborated with team members to create applications' system analysis based on client requirements.",
    associatedSkills: ['VUEJS', 'NEXTJS'],
    associatedProjects: [projectIDs.ANOMALY_DETECTION as keyof typeof projectIDs],
  },
  {
    id: experienceIDs.ElvanAB,
    jobTitle: 'Flutter Lead ( Contract / Remote )',
    company: 'Elvan AB',
    duration: 'January 2023 – May 2023',
    description:
      'Engineered and led a client restaurant application with admin panel (web) using Flutter and Dart. Managed a team of two Flutter developers, giving leadership experience. Transitioned the project to a mono repo structure, leading to easier project management.',
    associatedSkills: [], // Fill this out based on the specific skills you used for this job
    associatedProjects: [], // Same here
  },
  {
    id: experienceIDs.RsiLab,
    jobTitle: 'Flutter Developer (Contract)',
    company: 'RSI LAB',
    duration: 'January 2022 – December 2022',
    description:
      'Built "The Daily Star - Bangladesh" mobile app for both iOS and Android platforms with 10,000+ daily active users and 100k+ downloads. Improved app scrolling performance by 30%, implementing nested scroll views and proper data caching. Reduced the number of crashes on Android devices.',
    associatedSkills: [], // Fill this out based on the specific skills you used for this job
    associatedProjects: [], // Same here
  },
  {
    id: experienceIDs.Spotlas,
    jobTitle: 'Junior Flutter Developer',
    company: 'Spotlas',
    duration: 'March 2022 – June 2022',
    description:
      'Participated in the development and maintenance of the Chat feature. Collaborated with other developers to identify and alleviate software bugs.',
    associatedSkills: [], // Fill this out based on the specific skills you used for this job
    associatedProjects: [], // Same here
  },
  {
    id: experienceIDs.PlanBInsights,
    jobTitle: 'Junior Software Developer',
    company: 'Plan B Insights',
    duration: 'January 2021 – September 2021',
    description:
      'Developed a charity app with Flutter, NodeJs (Express) and MongoDB from scratch. Implemented geospatial support via MongoDB geo queries and real-time notification using Firestore. Managed NodeJs backend deployment to Google Cloud Run with Docker.',
    associatedSkills: [], // Fill this out based on the specific skills you used for this job
    associatedProjects: [], // Same here
  },
  {
    id: experienceIDs.BengalSoftware,
    jobTitle: 'Software Intern',
    company: 'Bengal Software',
    duration: '2020 – December 2020',
    description:
      'Learned React and Nodejs while working as an intern. Developed Web UI according to design.',
    associatedSkills: [], // Fill this out based on the specific skills you used for this job
    associatedProjects: [], // Same here
  },
];
