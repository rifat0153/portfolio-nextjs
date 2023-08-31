import { ExperienceIDType, experienceIDs } from '../experiences/experinces';
import { ProjectIDType, projectIDs } from '../projects/projects';

export const skillIDs = {
  Csharp: 'csharp',
  Dotnet: 'dotnet',
  SqlServer: 'sql-server',
  MongoDB: 'mongodb',
  Typescript: 'typescript',
  Javascript: 'javascript',
  VueJs: 'vuejs',
  NuxtJs: 'nuxtjs',
  React: 'react',
  NextJs: 'nextjs',
  Flutter: 'flutter',
  Dart: 'dart',
  Firebase: 'firebase',
  Azure: 'azure',
} as const;

export type SkillIDType = (typeof skillIDs)[keyof typeof skillIDs];

export interface Skill {
  id: SkillIDType;
  name: string;
  icon: string;
  url: string;
  description?: string;
  tags: string[];
  associatedExperiences?: ExperienceIDType[];
  associatedProjects?: ProjectIDType[];
}

export const softwareSkills: Skill[] = [
  {
    id: skillIDs.Csharp,
    name: 'C-Sharp',
    icon: 'devicon:csharp',
    description:
      'Throughout my career, I’ve heavily leaned on C# for backend development. This expertise has been instrumental in creating robust systems, especially in tandem with .Net Core. My work on the anomaly detection system for Network Rail stands as a testament to my capabilities with C#.',
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/',
    tags: ['Backend', 'Network Rail', 'Anomaly Detection', '.Net Core'],
    associatedExperiences: [experienceIDs.Senceive],
    associatedProjects: [projectIDs.ANOMALY_DETECTION],
  },
  {
    id: skillIDs.Dotnet,
    name: '.Net',
    icon: 'devicon:dot-net',
    description:
      '.NET Core reflects my prowess in backend development. I’ve used it to craft robust solutions, such as the system for Network Rail, ensuring they’re both high-performing and scalable.',
    url: 'https://dotnet.microsoft.com/en-us/',
    tags: ['Backend', 'Network Rail', 'High-Performance', 'Scalable'],
    associatedExperiences: [experienceIDs.Senceive],
  },
  {
    id: skillIDs.Typescript,
    name: 'Typescript',
    icon: 'devicon:typescript',
    description:
      'Integrating TypeScript with tools like React and Vue.js, I’ve ensured my applications are type-safe and efficient. It’s not just about writing code; it’s about writing scalable and maintainable code, and TypeScript helps me achieve that.',
    url: 'https://www.typescriptlang.org/',
    tags: ['Type-safe', 'Efficient', 'React', 'Vue.js', 'Scalable', 'Maintainable'],
    associatedExperiences: [experienceIDs.Senceive, experienceIDs.ElvanAB, experienceIDs.RsiLab],
  },
  {
    id: skillIDs.Javascript,
    name: 'JavaScript',
    icon: 'devicon:javascript',
    description:
      'JavaScript remains central to my development toolkit, enabling me to create dynamic and interactive applications. My expertise, combined with frameworks like React, Vue.js, and Next.js, has powered numerous projects, enhancing user interactions and overall efficiency.',
    url: 'https://developer.mozilla.org/en-US/',
    tags: ['Dynamic', 'Interactive', 'React', 'Vue.js', 'Next.js', 'Efficiency'],
  },
  {
    id: skillIDs.VueJs,
    name: 'Vue.js',
    icon: 'devicon:vuejs',
    description:
      'I’ve always found Vue.js to be a powerful tool for frontend development. Leveraging Vue 3 and complementary tools like Nuxt, I’ve developed intuitive dashboards and applications that emphasize user experience and dynamic web interactions.',
    url: 'https://vuejs.org/',
    tags: ['Frontend', 'Vue 3', 'Nuxt', 'User Experience', 'Dynamic Web Interactions'],
  },
  {
    id: skillIDs.NextJs,
    name: 'Next.js',
    icon: 'devicon:nextjs',
    description:
      'Next.js has been instrumental in my endeavors in server-side rendering and static website generation using React. I’ve capitalized on its features to produce applications that combine speed, scalability, and top-notch SEO performances.',
    url: 'https://nextjs.org/',
    tags: [
      'Server-side Rendering',
      'Static Website Generation',
      'React',
      'Speed',
      'Scalability',
      'SEO',
    ],
  },
  {
    id: skillIDs.Flutter,
    name: 'Flutter',
    icon: 'devicon:flutter',
    description:
      'My experience with Flutter has been both extensive and rewarding. I’ve led projects and crafted applications such as the restaurant app for Elvan AB and contributed significantly to apps like Spotlas. Through Flutter and Dart, I’ve been able to bring to life mobile applications that genuinely resonate with users, as highlighted by the 100k+ downloads of The Daily Star app.',
    url: 'https://flutter.dev/',
    tags: ['Mobile App', 'Elvan AB', 'Spotlas', '100k+ Downloads', 'The Daily Star'],
  },
  {
    id: skillIDs.Dart,
    name: 'Dart',
    icon: 'devicon:dart',
    description:
      'Paired with Flutter, Dart has been my go-to for crafting the functionality of mobile applications. It’s been essential in delivering apps that are not only performance-optimized but also focused on user experience.',
    url: 'https://dart.dev/',
    tags: ['Mobile App', 'Flutter', 'Performance-Optimized', 'User Experience'],
  },
  {
    id: skillIDs.React,
    name: 'React',
    icon: 'devicon:react',
    description:
      'React.js stands at the forefront of my frontend development toolkit. While my CV showcases proficiency across various technologies, my foundational knowledge of JavaScript has been enhanced significantly by integrating React.js. It has empowered me to create dynamic, responsive, and user-centric applications. Whether building Web UIs as an intern at Bengal Software or leveraging complementary technologies like Next.js, my React-based projects always emphasize performance, scalability, and user engagement.',
    url: 'https://www.example.com/react',
    tags: [
      'Frontend',
      'JavaScript',
      'Dynamic',
      'Responsive',
      'User Engagement',
      'Next.js',
      'Performance',
      'Scalability',
    ],
  },
  {
    id: skillIDs.Azure,
    name: 'Azure',
    icon: 'devicon:azure',
    description:
      'My foray into cloud computing with Azure has been a game-changer. From deploying applications to managing their life cycles, Azure’s suite has allowed me to ensure high availability, scalability, and resilience in all my projects.',
    url: 'https://azure.microsoft.com/en-us/',
    tags: ['Cloud Computing', 'Deployment', 'High Availability', 'Scalability', 'Resilience'],
  },
  {
    id: skillIDs.SqlServer,
    name: 'SQL Server',
    icon: 'devicon-plain:microsoftsqlserver-wordmark',
    description:
      'SQL Server has been a cornerstone in my arsenal for relational database management. From designing relational schemas to optimizing queries, I’ve leveraged SQL Server to guarantee data integrity, security, and high performance in my applications.',
    url: 'https://www.microsoft.com/en-us/sql-server/',
    tags: ['Database', 'RDBMS', 'High-Performance', 'Data Integrity'],
    associatedExperiences: [],
    associatedProjects: [],
  },
  {
    id: skillIDs.MongoDB,
    name: 'MongoDB',
    icon: 'devicon:mongodb',
    description:
      'When it comes to NoSQL databases, MongoDB stands out. I’ve used it extensively to develop applications requiring flexibility, scalability, and high-performance data operations. Its document-oriented structure allowed me to build applications more agilely, adapting to changing requirements on the fly. Additionally, I’ve utilized MongoDB’s Geo Queries for spatially aware functionalities, enabling location-based services and features in my applications.',
    url: 'https://www.mongodb.com/',
    tags: ['Database', 'NoSQL', 'Flexible', 'Document-Oriented'],
    associatedExperiences: [],
    associatedProjects: [],
  },
  {
    id: skillIDs.NuxtJs,
    name: 'Nuxt.js',
    icon: 'devicon:nuxtjs',
    description:
      'Building upon my Vue.js expertise, Nuxt.js has been my go-to framework for creating Universal Vue.js Applications. I’ve harnessed its capabilities for server-side rendering, SEO improvements, and to simplify the configuration complexities often associated with modern web development.',
    url: 'https://nuxtjs.org/',
    tags: ['Frontend', 'Vue.js', 'Server-side Rendering', 'SEO'],
    associatedExperiences: [],
    associatedProjects: [],
  },
  {
    id: skillIDs.Firebase,
    name: 'Firebase',
    icon: 'logos:firebase',
    description:
      'Firebase’s suite of tools has been invaluable for rapidly developing web and mobile applications. From its real-time database to authentication and cloud functions, Firebase has allowed me to create fully-fledged applications with reduced backend complexity.',
    url: 'https://firebase.google.com/',
    tags: ['Backend', 'Real-time Database', 'Authentication', 'Serverless'],
    associatedExperiences: [],
    associatedProjects: [],
  },
  // Add more software skills here
];
