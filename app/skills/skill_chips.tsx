import { Tooltip } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Skill } from './skills';

export function SkillChips({
  skills,
  onClick,
}: {
  skills: Skill[];
  // eslint-disable-next-line no-unused-vars
  onClick?: (skill: Skill) => void;
}) {
  const router = useRouter();

  const navigateToSkill = (skill: Skill) => {
    router.push(`/skills/${skill.id}`);
  };

  const handleClick = (skill: Skill, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    onClick?.apply(null, [skill]);

    navigateToSkill(skill);
  };

  return (
    <div className='flex flex-wrap gap-8'>
      {skills.map((skill) => (
        <Tooltip
          key={skill.id}
          content={<p>{skill.name}</p>}
          placement='bottom'
          className='border-none'
        >
          <button onClick={(e) => handleClick(skill, e)}>
            <span className={skill.icon}></span>
            {/* <Icon icon={skill.icon} fontSize={20} /> */}
          </button>
        </Tooltip>
      ))}
    </div>
  );
}
