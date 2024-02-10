'use client';

import { Button } from '@nextui-org/react';
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
                <span className={`${skill.icon} text-7xl`} />
              </Link>

              <p className='mt-4 font-semibold'>{skill.name}</p>
            </div>
          );
        }}
      />

      <Link href='/skills'>
        <Button
          className='mt-4 sm:mt-10'
          variant='bordered'
          size='sm'
          color='secondary'
          endContent={<AnchorIcon />}
        >
          View All Skills
        </Button>
      </Link>
    </div>
  );
}

const AnchorIcon = () => {
  return <span className='i-mdi-link' />;
};
