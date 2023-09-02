'use client';

import { Icon } from '@iconify/react';
import { Carousel } from './Corousel';
import Link from 'next/link';
import { softwareSkills } from '@/app/skills/skills';

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
