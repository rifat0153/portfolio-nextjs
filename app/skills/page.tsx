'use client';

import { useState } from 'react';
import { Input } from '@nextui-org/react';
import { softwareSkills } from './skills';
import { useRouter } from 'next/navigation';

function SkillsPage() {
  const router = useRouter();

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

  const handleNavigation = (skillName: string) => {
    router.push(`/skills/${skillName}`);
  };

  return (
    <div className='pt-8 lg:pt-[20vh]'>
      <div className='py-8'>
        <Input
          type='text'
          placeholder='Search by skill'
          onChange={handleSearch}
          className='py-10'
        />
      </div>

      <div className='grid grid-cols-3 gap-14'>
        {skillList.map((skill, index) => {
          return (
            <button
              key={index}
              onClick={() => handleNavigation(skill.name)}
              className='col-span-1 cursor-pointer'
            >
              <h3>{skill.name}</h3>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsPage;
