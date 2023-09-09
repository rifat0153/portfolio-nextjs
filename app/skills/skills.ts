import { getWorkExperienceByProjectIds, workExperiences } from '../experiences/experinces';
import { ProjectIDType, softwareProjects } from '../projects/projects';

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
  NodeJs: 'nodejs',
  TailwindCSS: 'tailwindcss',
  GoogleCloudRun: 'google-cloud-run',
  Docker: 'docker',
  RestApi: 'rest-api',
  UnitTesting: 'unit-testing',
  EntityFramework: 'entity-framework',
} as const;

export type SkillIDType = (typeof skillIDs)[keyof typeof skillIDs];

export interface Skill {
  id: SkillIDType;
  name: string;
  icon: string;
  url: string;
  description?: string;
  tags: string[];
  associatedProjects?: ProjectIDType[];
}

export const getSkillsByIds = (ids: string[]): Skill[] => {
  return softwareSkills.filter((skill) => ids.includes(skill.id));
};

export const getSkillsByExperienceId = (experienceId: string): Skill[] => {
  const experince = workExperiences.find((experience) => experience.id === experienceId);

  if (!experince) {
    return [];
  }

  const skills = experince.associatedProjects.flatMap((projectId) => {
    const projectSkills = getSkillsByProjectId(projectId);
    return projectSkills;
  });

  skills.push(...getSkillsByIds(experince.associatedSkills));

  const skillsSet = new Set(skills);

  return Array.from(skillsSet);
};

export const getSkillsByProjectId = (projectId: string): Skill[] => {
  const project = softwareProjects.find((project) => project.id === projectId);

  if (!project) {
    return [];
  }

  // get all work experiences associated with the project
  const experiences = getWorkExperienceByProjectIds([projectId]);

  // get all skills associated with the project
  const skills = experiences.flatMap((experience) => {
    const experienceSkills = getSkillsByIds(experience.associatedSkills);
    return experienceSkills;
  });

  // merge with project skills
  skills.push(...getSkillsByIds(project.associatedSkills));

  // remove duplicates
  const skillsSet = new Set(skills);

  return Array.from(skillsSet);
};

export const softwareSkills: Skill[] = [
  {
    id: skillIDs.Csharp,
    name: 'C-Sharp',
    icon: 'devicon:csharp',
    description:
      'Throughout my career, I’ve heavily leaned on C# for backend development. This expertise has been instrumental in creating robust systems, especially in tandem with .Net Core. My work on the anomaly detection system for Network Rail stands as a testament to my capabilities with C#.',
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/',
    tags: ['Backend', 'Rest Api', 'Sql Server', 'Network Rail', 'Anomaly Detection', '.Net Core'],
  },
  {
    id: skillIDs.Dotnet,
    name: '.Net',
    icon: 'devicon:dot-net',
    description:
      '.NET Core reflects my prowess in backend development. I’ve used it to craft robust solutions, such as the system for Network Rail, ensuring they’re both high-performing and scalable.',
    url: 'https://dotnet.microsoft.com/en-us/',
    tags: ['Backend', 'Network Rail', 'High-Performance', 'Scalable'],
  },
  {
    id: skillIDs.Typescript,
    name: 'Typescript',
    icon: 'devicon:typescript',
    description:
      'Integrating TypeScript with tools like React and Vue.js, I’ve ensured my applications are type-safe and efficient. It’s not just about writing code; it’s about writing scalable and maintainable code, and TypeScript helps me achieve that.',
    url: 'https://www.typescriptlang.org/',
    tags: ['Zod', 'Nuxt', 'Vue.js', 'Next'],
  },
  {
    id: skillIDs.Javascript,
    name: 'JavaScript',
    icon: 'devicon:javascript',
    description:
      'JavaScript remains central to my development toolkit, enabling me to create dynamic and interactive applications. My expertise, combined with frameworks like React, Vue.js, and Next.js, has powered numerous projects, enhancing user interactions and overall efficiency.',
    url: 'https://developer.mozilla.org/en-US/',
    tags: ['NodeJs', 'React', 'Vue.js', 'Next.js'],
  },
  {
    id: skillIDs.VueJs,
    name: 'Vue.js',
    icon: 'devicon:vuejs',
    description:
      'I’ve always found Vue.js to be a powerful tool for frontend development. Leveraging Vue 3 and complementary tools like Nuxt, I’ve developed intuitive dashboards and applications that emphasize user experience and dynamic web interactions.',
    url: 'https://vuejs.org/',
    tags: ['Pinia', 'Nuxt', 'User Experience', 'SPA'],
  },
  {
    id: skillIDs.NextJs,
    name: 'Next.js',
    icon: 'devicon:nextjs',
    description:
      'Next.js has been instrumental in my endeavors in server-side rendering and static website generation using React. I’ve capitalized on its features to produce applications that combine speed, scalability, and top-notch SEO performances.',
    url: 'https://nextjs.org/',
    tags: ['App Router', 'React', 'SEO', 'Server-side Rendering'],
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
  },
  {
    id: skillIDs.MongoDB,
    name: 'MongoDB',
    icon: 'devicon:mongodb',
    description:
      'When it comes to NoSQL databases, MongoDB stands out. I’ve used it extensively to develop applications requiring flexibility, scalability, and high-performance data operations. Its document-oriented structure allowed me to build applications more agilely, adapting to changing requirements on the fly. Additionally, I’ve utilized MongoDB’s Geo Queries for spatially aware functionalities, enabling location-based services and features in my applications.',
    url: 'https://www.mongodb.com/',
    tags: ['Database', 'NoSQL', 'Flexible', 'Document-Oriented'],
  },
  {
    id: skillIDs.NuxtJs,
    name: 'Nuxt.js',
    icon: 'devicon:nuxtjs',
    description:
      'Building upon my Vue.js expertise, Nuxt.js has been my go-to framework for creating Universal Vue.js Applications. I’ve harnessed its capabilities for server-side rendering, SEO improvements, and to simplify the configuration complexities often associated with modern web development.',
    url: 'https://nuxtjs.org/',
    tags: ['Frontend', 'Vue.js', 'Server-side Rendering', 'SEO'],
  },
  {
    id: skillIDs.Firebase,
    name: 'Firebase',
    icon: 'logos:firebase',
    description:
      'Firebase’s suite of tools has been invaluable for rapidly developing web and mobile applications. From its real-time database to authentication and cloud functions, Firebase has allowed me to create fully-fledged applications with reduced backend complexity.',
    url: 'https://firebase.google.com/',
    tags: ['Backend', 'Real-time Database', 'Authentication', 'Serverless'],
  },
  {
    id: skillIDs.RestApi,
    name: 'REST API',
    icon: 'logos:rest',
    description:
      'I have extensive experience designing and developing RESTful web services. Through my expertise with REST APIs, I’ve built scalable and performant systems that offer seamless communication between the frontend and backend components, ensuring a smooth user experience.',
    url: 'https://www.restapitutorial.com/',
    tags: ['Backend', 'Web Services', 'Scalable', 'Performant'],
  },
  {
    id: skillIDs.UnitTesting,
    name: 'Unit Testing',
    icon: 'logos:jest',
    description:
      'A firm believer in the test-driven development approach, I always ensure my code is robust and free from bugs. Through unit testing, I’ve guaranteed the reliability of my software solutions, ensuring they meet the intended requirements and behave predictably under various conditions.',
    url: 'https://jestjs.io/',
    tags: ['Testing', 'Reliability', 'Test-Driven Development'],
  },
  {
    id: skillIDs.EntityFramework,
    name: 'Entity Framework',
    icon: 'devicon:dotnetcore',
    description:
      'Having employed Entity Framework extensively in my projects, I’ve streamlined database operations, leveraging its ORM capabilities. It allows me to work with relational data as domain-specific objects, eliminating the need for most of the data access code.',
    url: 'https://docs.microsoft.com/en-us/ef/',
    tags: ['Database', 'ORM', 'Data Access'],
  },
  {
    id: skillIDs.NodeJs,
    name: 'Node.js',
    icon: 'devicon:nodejs',
    description:
      'Node.js has been a pivotal part of my backend development journey, enabling me to build scalable and performant APIs. Its non-blocking architecture ensures optimal performance even with numerous simultaneous requests.',
    url: 'https://nodejs.org/',
    tags: ['Backend', 'API', 'Non-blocking', 'Performance'],
  },
  {
    id: skillIDs.TailwindCSS,
    name: 'Tailwind CSS',
    icon: 'vscode-icons:file-type-tailwind',
    description:
      'Tailwind CSS offers a utility-first approach to styling, and I’ve leveraged it to craft beautiful and responsive UIs efficiently. Its modular structure allows me to write concise and maintainable CSS.',
    url: 'https://tailwindcss.com/',
    tags: ['Frontend', 'Styling', 'Utility-first', 'Responsive'],
  },
  {
    id: skillIDs.GoogleCloudRun,
    name: 'Google Cloud Run',
    icon: 'logos:google-cloud',
    description:
      'Google Cloud Run has empowered me to deploy containerized applications seamlessly in a fully managed environment. Its scalability and integration with other GCP services make application deployment and management a breeze.',
    url: 'https://cloud.google.com/run',
    tags: ['Cloud', 'Containerization', 'Deployment', 'Scalability'],
  },
  {
    id: skillIDs.Docker,
    name: 'Docker',
    icon: 'devicon:docker',
    description:
      'Docker has revolutionized my workflow by allowing me to containerize applications, ensuring consistency across different environments. Building, shipping, and running applications have never been so straightforward.',
    url: 'https://www.docker.com/',
    tags: ['Containerization', 'Deployment', 'Consistency'],
  },
];
