'use client';

import { useState } from 'react';
import { Input } from '@nextui-org/react';
import { softwareSkills } from './skills';
import { useRouter } from 'next/navigation';
import { SkillCard } from './skill_card';

export default function SkillsPage() {
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

  const handleNavigation = (skillId: string) => {
    console.log(skillId);

    router.push(`/skills/${skillId}`);
  };

  return (
    <div className='lg:pt-[2vh]'>
      <div className='py-4 lg:py-8'>
        <Input
          type='text'
          placeholder='Search for skill'
          onChange={handleSearch}
          className='py-10'
        />
      </div>

      {/* <div className='grid grid-cols-3 gap-4'> */}
      <div className='columns-3'>
        {skillList.map((skill) => {
          return (
            <div
              key={skill.id}
              // className='col-span-3 first:col-span-2 lg:col-span-1 [&>*:nth-child(odd)]:col-span-2 '
              className=''
            >
              <SkillCard skill={skill} onPress={handleNavigation} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
