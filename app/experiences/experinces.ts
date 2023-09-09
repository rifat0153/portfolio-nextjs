import { projectIDs } from '../projects/projects';
import { getSkillsByExperienceId, skillIDs, SkillIDType } from '../skills/skills';

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
  duration: string;
  description: string;
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
      "Built a brand new anomaly detection system for Network Rail to remotely monitor rail stations and early problem detection. Developed internal dashboards for statistical data analysis, making it a single source to analyze product performance and take necessary actions. Performed regression and system-level testing to verify software quality and function prior to release. Collaborated with team members to create applications' system analysis based on client requirements.",
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/senceive-1.png?alt=media&token=aec7c648-318c-4757-8275-6266b7cfeff7',
    associatedSkills: ['unit-testing'],
    associatedProjects: ['signal-box', 'production-dashboard'],
  },
  {
    id: experienceIDs.ElvanAB,
    jobTitle: 'Flutter Lead ( Contract / Remote )',
    company: 'Elvan AB',
    duration: 'January 2023 – May 2023',
    country: 'Sweden',
    description:
      'Engineered and led a client restaurant application with admin panel (web) using Flutter and Dart. Managed a team of two Flutter developers, giving leadership experience. Transitioned the project to a mono repo structure, leading to easier project management.',

    associatedSkills: [],
    associatedProjects: ['elvan-restaurant-app'],
  },
  {
    id: experienceIDs.RsiLab,
    jobTitle: 'Flutter Developer (Contract)',
    company: 'RSI LAB',
    country: 'Bangladesh',
    duration: 'January 2022 – December 2022',
    description:
      'Built "The Daily Star - Bangladesh" mobile app for both iOS and Android platforms with 10,000+ daily active users and 100k+ downloads. Improved app scrolling performance by 30%, implementing nested scroll views and proper data caching. Reduced the number of crashes on Android devices.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/RSI-Lab-1.png?alt=media&token=395b538e-83fc-4760-88e1-afd2a8bf9e8e',
    associatedSkills: ['flutter', 'dart', 'nodejs', 'rest-api', 'firebase'],
    associatedProjects: ['daily-star-app'],
  },
  {
    id: experienceIDs.Spotlas,
    jobTitle: 'Junior Flutter Developer',
    company: 'Spotlas',
    country: 'United Kingdom',
    duration: 'March 2022 – June 2022',
    description:
      'Participated in the development and maintenance of the Chat feature. Collaborated with other developers to identify and alleviate software bugs.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/spotlas-img-1.png?alt=media&token=06585427-a04e-463a-93b8-3cccd78dc0e1',
    associatedSkills: ['rest-api', 'mongodb'],
    associatedProjects: ['spotlas'],
  },
  {
    id: experienceIDs.PlanBInsights,
    jobTitle: 'Junior Software Developer',
    company: 'Plan B Insights',
    country: 'Bangladesh',
    duration: 'January 2021 – September 2021',
    description:
      'Developed a charity app with Flutter, NodeJs (Express) and MongoDB from scratch. Implemented geospatial support via MongoDB geo queries and real-time notification using Firestore. Managed NodeJs backend deployment to Google Cloud Run with Docker.',
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
      'Learned React and Nodejs while working as an intern. Developed Web UI according to design.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/bengal-soft.png?alt=media&token=b0b0b1df-2db5-4c21-9f8a-c200a05764fb',
    associatedSkills: ['react', 'nodejs', 'mongodb'],
    associatedProjects: [],
  },
];
