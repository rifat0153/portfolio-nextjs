export interface Skill {
  name: string;
  icon: string;
  url: string;
  description?: string;
  tags: string[];
}

export const softwareSkills: Skill[] = [
  {
    name: 'C-Sharp',
    icon: 'devicon:csharp',
    description:
      'Throughout my career, I’ve heavily leaned on C# for backend development. This expertise has been instrumental in creating robust systems, especially in tandem with .Net Core. My work on the anomaly detection system for Network Rail stands as a testament to my capabilities with C#.',
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/',
    tags: ['Backend', 'Network Rail', 'Anomaly Detection', '.Net Core'],
  },
  {
    name: '.Net',
    icon: 'devicon:dot-net',
    description:
      '.NET Core reflects my prowess in backend development. I’ve used it to craft robust solutions, such as the system for Network Rail, ensuring they’re both high-performing and scalable.',
    url: 'https://dotnet.microsoft.com/en-us/',
    tags: ['Backend', 'Network Rail', 'High-Performance', 'Scalable'],
  },
  {
    name: 'Typescript',
    icon: 'devicon:typescript',
    description:
      'Integrating TypeScript with tools like React and Vue.js, I’ve ensured my applications are type-safe and efficient. It’s not just about writing code; it’s about writing scalable and maintainable code, and TypeScript helps me achieve that.',
    url: 'https://www.typescriptlang.org/',
    tags: ['Type-safe', 'Efficient', 'React', 'Vue.js', 'Scalable', 'Maintainable'],
  },
  {
    name: 'JavaScript',
    icon: 'devicon:javascript',
    description:
      'JavaScript remains central to my development toolkit, enabling me to create dynamic and interactive applications. My expertise, combined with frameworks like React, Vue.js, and Next.js, has powered numerous projects, enhancing user interactions and overall efficiency.',
    url: 'https://developer.mozilla.org/en-US/',
    tags: ['Dynamic', 'Interactive', 'React', 'Vue.js', 'Next.js', 'Efficiency'],
  },
  {
    name: 'Vue.js',
    icon: 'devicon:vuejs',
    description:
      'I’ve always found Vue.js to be a powerful tool for frontend development. Leveraging Vue 3 and complementary tools like Nuxt, I’ve developed intuitive dashboards and applications that emphasize user experience and dynamic web interactions.',
    url: 'https://vuejs.org/',
    tags: ['Frontend', 'Vue 3', 'Nuxt', 'User Experience', 'Dynamic Web Interactions'],
  },
  {
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
    name: 'Flutter',
    icon: 'devicon:flutter',
    description:
      'My experience with Flutter has been both extensive and rewarding. I’ve led projects and crafted applications such as the restaurant app for Elvan AB and contributed significantly to apps like Spotlas. Through Flutter and Dart, I’ve been able to bring to life mobile applications that genuinely resonate with users, as highlighted by the 100k+ downloads of The Daily Star app.',
    url: 'https://flutter.dev/',
    tags: ['Mobile App', 'Elvan AB', 'Spotlas', '100k+ Downloads', 'The Daily Star'],
  },
  {
    name: 'Dart',
    icon: 'devicon:dart',
    description:
      'Paired with Flutter, Dart has been my go-to for crafting the functionality of mobile applications. It’s been essential in delivering apps that are not only performance-optimized but also focused on user experience.',
    url: 'https://dart.dev/',
    tags: ['Mobile App', 'Flutter', 'Performance-Optimized', 'User Experience'],
  },
  {
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
    name: 'Azure',
    icon: 'devicon:azure',
    description:
      'My foray into cloud computing with Azure has been a game-changer. From deploying applications to managing their life cycles, Azure’s suite has allowed me to ensure high availability, scalability, and resilience in all my projects.',
    url: 'https://azure.microsoft.com/en-us/',
    tags: ['Cloud Computing', 'Deployment', 'High Availability', 'Scalability', 'Resilience'],
  },
  // Add more software skills here
];
