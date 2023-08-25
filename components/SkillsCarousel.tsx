'use client';

import { Icon } from '@iconify/react';
import { Carousel } from './Corousel';

export interface Skill {
  id: number;
  name: string;
  icon: string;
  url: string;
}

const softwareSkills: Skill[] = [
  {
    id: 1,
    name: 'Typescript',
    icon: 'devicon:typescript',
    url: 'https://www.example.com/javascript',
  },
  {
    id: 2,
    name: 'JavaScript',
    icon: 'devicon:javascript',
    url: 'https://www.example.com/javascript',
  },
  {
    id: 3,
    name: 'React',
    icon: 'devicon:react',
    url: 'https://www.example.com/react',
  },
  {
    id: 4,
    name: 'Node.js',
    icon: 'devicon:nodejs',
    url: 'https://www.example.com/nodejs',
  },
  {
    id: 5,
    name: 'Node.js',
    icon: 'devicon:nodejs',
    url: 'https://www.example.com/nodejs',
  },
  {
    id: 6,
    name: 'Node.js',
    icon: 'devicon:nodejs',
    url: 'https://www.example.com/nodejs',
  },
  // Add more software skills here
];

export function SkillsCarousel() {
  return (
    <div className='mx-auto w-60'>
      <Carousel
        items={softwareSkills}
        renderItem={(skill) => {
          return (
            <div>
              {/* <a href={skill.url} target='_blank' rel='noopener noreferrer'>
                <img src={skill.icon} alt={skill.name} width='50' height='50' />
              </a> */}

              <a href={skill.url} target='_blank' rel='noopener noreferrer'>
                <Icon icon={skill.icon} className='inline-flex justify-center' fontSize={120} />
              </a>

              <p className='mt-4 font-semibold'>{skill.name}</p>
            </div>
          );
        }}
      />
    </div>
  );
}
