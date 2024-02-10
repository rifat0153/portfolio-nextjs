import { Card, CardBody, CardHeader, Chip } from '@nextui-org/react';
import Link from 'next/link';

import { Skill } from './skills';

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Link href={`/skills/${skill.id}`}>
      <div className='transform cursor-pointer transition-colors duration-1000'>
        <Card
          className='group z-0 mb-4 transform bg-gradient-to-r ring-offset-2 transition-all duration-250 hover:z-30 
                hover:scale-105 hover:bg-gradient-to-br hover:from-gray-100 hover:to-blue-200 hover:transition-all focus:ring-2 '
          aria-describedby='skill-card'
          tabIndex={0}
        >
          <CardHeader className='flex items-start justify-between px-4 pb-0 pt-2'>
            <h4 className='text-large font-bold'>{skill.name}</h4>
            <span
              className={`${skill.icon} text-xl text-blue-500 transition-all duration-500 lg:text-2xl`}
            />
          </CardHeader>

          <CardBody>
            <div className='flex flex-wrap gap-4'>
              {skill.tags.map((tag, idx) => {
                return (
                  <Chip
                    key={idx}
                    className='mr-2 border-blue-200 text-sm group-hover:border-black/20'
                    size='sm'
                    variant='dot'
                    color='success'
                  >
                    {tag}
                  </Chip>
                );
              })}
            </div>
          </CardBody>
        </Card>
      </div>
    </Link>
  );
}
