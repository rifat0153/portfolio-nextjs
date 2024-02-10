'use client';

import { useState } from 'react';
import { Input } from '@nextui-org/react';

import { softwareSkills } from './skills';
import { SkillCard } from './skill_card';

export default function SkillsPage() {
  const [skillList, setskillList] = useState(softwareSkills);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    if (query !== '') {
      const newList = softwareSkills.filter((skill) => {
        return skill.name.toLowerCase().includes(query.toLowerCase());
      });
      setskillList(newList);
    } else {
      setskillList(softwareSkills);
    }
  };

  return (
    <div className='@container lg:pt-[2vh]'>
      <div className='py-4 lg:py-8'>
        <Input
          type='text'
          placeholder='Search for skill'
          onChange={handleSearch}
          className='py-10'
        />
      </div>

      <div className='@2xl:columns-2 @3xl:columns-3'>
        {skillList.map((skill) => {
          return (
            <div key={skill.id} className=''>
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
