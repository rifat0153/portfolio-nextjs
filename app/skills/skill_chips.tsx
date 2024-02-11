import { Tooltip } from '@nextui-org/react';
import React from 'react';
import { Skill } from './skills';

export function SkillChips({ skills }: { skills: Skill[] }) {
  return (
    <div className='flex flex-wrap gap-8'>
      {skills.map((skill) => (
        <Tooltip
          key={skill.id}
          content={<p>{skill.name}</p>}
          placement='bottom'
          className='border-none'
        >
          <div>
            <button>
              <span
                className={`${skill.icon} text-medium transition-all duration-500 ease-in-out lg:text-xl`}
              ></span>
            </button>
          </div>
        </Tooltip>
      ))}
    </div>
  );
}
