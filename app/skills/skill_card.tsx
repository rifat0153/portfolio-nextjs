'use client';

import { Icon } from '@iconify/react';
import { Card, CardBody, CardFooter, CardHeader, Chip } from '@nextui-org/react';

import { Skill } from './skills';

export function SkillCard({
  skill,
  onPress,
}: {
  skill: Skill;
  // eslint-disable-next-line no-unused-vars
  onPress: (skillId: string) => void;
}) {
  const handlePress = () => {
    onPress(skill.id);
  };

  return (
    <div className='transform cursor-pointer transition-colors duration-1000' onClick={handlePress}>
      <Card
        onPress={handlePress}
        className='group z-0 mb-4 transform bg-gradient-to-r ring-offset-2 transition-all duration-250 hover:z-30 
              hover:scale-105 hover:bg-gradient-to-br  hover:from-gray-100 hover:to-blue-200 hover:transition-all focus:ring-2 '
        aria-describedby='skill-card'
        tabIndex={0}
      >
        <CardHeader className='flex items-start justify-between px-4 pb-0 pt-2'>
          <h4 className='text-large font-bold'>{skill.name}</h4>
          <Icon icon={skill.icon} fontSize={30} />
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

        {/* <CardFooter>
          <button
            onClick={handlePress}
            className='flex items-center gap-4 text-sm font-semibold transition-all duration-250 group-hover:translate-x-2'
          >
            <span className='hidden group-hover:block'>View Details</span>{' '}
            <Icon icon='bytesize:external' fontSize={20} />
          </button>
        </CardFooter> */}
      </Card>
    </div>
  );
}
