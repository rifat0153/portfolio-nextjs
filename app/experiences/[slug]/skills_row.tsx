import { Card } from '@nextui-org/react';
import Link from 'next/link';

import { SkillIDType, getSkillsByIds } from '@/app/skills/skills';

export const SkillsRow = ({ skillIds }: { skillIds: SkillIDType[] }) => {
  const skills = getSkillsByIds(skillIds);

  return (
    <div className='mt-8 flex flex-wrap gap-8'>
      {skills.map((skill) => {
        return (
          <Link key={skill.id} href={`/skills/${skill.id}`}>
            <Card
              className='flex cursor-pointer items-center gap-2 bg-white p-2 text-sm font-semibold shadow-lg transition-shadow duration-200 ease-in-out hover:shadow-xl focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100 active:outline-none'
              aria-describedby={`skill-${skill.id}-name`}
            >
              <span
                className={`${skill.icon} text-xl text-blue-500 transition-all duration-500 md:text-2xl lg:text-4xl`}
              />

              <p className='text-xs font-semibold'>{skill.name}</p>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
