import { projectIDs } from '../projects/projects';
import { getSkillsByExperienceId, skillIDs, SkillIDType } from '../skills/skills';

export const experienceIDs = {
  Senceive: 'senceive',
  FlutterFreelance: 'flutter',
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
      'Full-stack C# developer working on a range of projects utilizing .Net, Vue, Nuxt, and TypeScript.',
    bulletPoints: [
      `Architected and developed high-performance REST APIs and backend systems using .NET, C#, Dapper, and EF, deployed on Azure with Docker containerization.`,
      `Spearheaded the development of cutting-edge SPAs using Vue.js, SCSS, Tailwind, and TypeScript, significantly enhancing product functionality and web accessibility.`,
      `Led the development of a mission-critical anomaly detection system for Network Rail, substantially improving monitoring and reliability of the UK rail system.`,
      `Orchestrated a major backend migration to .NET 8, implementing SOLID principles, Functional Design Patterns, DDD, and clean architecture, resulting in a 40% performance boost for data-intensive operations.`,
      `Developed advanced image detection and segmentation models using YOLO, TensorFlow, and Python to enhance object detection capabilities on train tracks.`,
      `Designed and implemented internal dashboards for statistical analysis, driving early issue identification and performance enhancements in production.`,
    ],
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/senceive-1.png?alt=media&token=aec7c648-318c-4757-8275-6266b7cfeff7',
    associatedSkills: ['unit-testing'],
    associatedProjects: ['web-monitor-4', 'signal-box', 'production-dashboard'],
  },
  {
    id: experienceIDs.FlutterFreelance,
    jobTitle: 'Flutter Developer',
    company: 'RSI Lab',
    duration: 'January 2022 – May 2023',
    country: 'Dhaka, Bangladesh',
    description: 'Developed and maintain IOS and Android mobile applications built with Flutter.',
    bulletPoints: [
      `Led the development of "The Daily Star - Bangladesh'' app using Flutter and Riverpod, achieving 100k+ downloads, 10,000+ daily active users, and a 70% reduction in Android device crashes.`,
      `Successfully implemented the pre-existing Figma design system into the app, ensuring a consistent and visually appealing user interface across all features.`,
      `Optimized app performance by implementing custom SliverLists, employing efficient caching strategies, and offloading work from the main thread, resulting in significant reduction of UI jank and improved overall user experience.`,
      `Managed feature flags for different categories of news, allowing for flexible and customizable content delivery.`,
      `Continuously identified and resolved bugs, maintaining high app stability and user satisfaction.`,
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
      'Full Stack Developer responsible for creating mobile applications and backend services, ensuring seamless integration and high performance.',
    bulletPoints: [
      `Developed Aalokito, a location-based charity application for food and clothing distribution, utilizing Flutter, GetX, Firebase, and REST APIs for the frontend.`,
      `Implemented user authentication and authorization using Firebase Auth, ensuring secure access to the application.`,
      `Created robust backend systems using Node.js, Express, and MongoDB, implementing RESTful APIs to support the mobile application.`,
      `Implemented Docker containerization with Docker Compose, streamlining environment setup and enabling efficient deployment to Google Cloud Run.`,
      `Gained hands-on experience in full-stack development, from mobile app creation to backend services, authentication, and cloud deployment.`,
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
      'Software Intern focused on React and Node.js projects, gaining hands-on experience in the software development process.',
    bulletPoints: [
      `Contributed to ongoing projects by developing and maintaining web components using React.js and CSS.`,
      `Rapidly gained proficiency in React.js, Node.js, and REST API development, applying industry best practices.`,
    ],
    image:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/bengal-soft.png?alt=media&token=b0b0b1df-2db5-4c21-9f8a-c200a05764fb',
    associatedSkills: ['react', 'nodejs', 'rest-api'],
    associatedProjects: [],
  },
] as const;
