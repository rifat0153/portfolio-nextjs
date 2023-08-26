'use client';

import { Icon } from '@iconify/react';
import { Carousel } from './Corousel';
import Link from 'next/link';

export interface Skill {
  name: string;
  icon: string;
  url: string;
}

const softwareSkills: Skill[] = [
  {
    name: 'C#',
    icon: 'devicon:csharp',
    url: 'https://www.example.com/javascript',
  },
  {
    name: '.Net',
    icon: 'devicon:dot-net',
    url: 'https://www.example.com/javascript',
  },
  {
    name: 'Typescript',
    icon: 'devicon:typescript',
    url: 'https://www.example.com/javascript',
  },
  {
    name: 'JavaScript',
    icon: 'devicon:javascript',
    url: 'https://www.example.com/javascript',
  },
  {
    name: 'Vue.js',
    icon: 'devicon:vuejs',
    url: 'https://www.example.com/react',
  },
  {
    name: 'React',
    icon: 'devicon:react',
    url: 'https://www.example.com/react',
  },
  {
    name: 'Flutter',
    icon: 'devicon:flutter',
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
              <Link href={skill.url} target='_blank' rel='noopener noreferrer'>
                <Icon icon={skill.icon} className='inline-flex justify-center' fontSize={120} />
              </Link>

              <p className='mt-4 font-semibold'>{skill.name}</p>
            </div>
          );
        }}
      />
    </div>
  );
}
