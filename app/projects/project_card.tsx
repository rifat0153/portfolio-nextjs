'use client';

import { Card } from '@nextui-org/react';
import { Icon } from '@iconify/react';

import { Project } from './projects';
import { SkillChips } from '../skills/skill_chips';
import { getSkillsByProjectId } from '../utils/utils';
import { useRouter } from 'next/navigation';

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  const getSkills = () => getSkillsByProjectId(project.id);

  const navigateToProject = () => {
    console.log(project.id);

    if (project.link.type === 'external') {
      window.open(project.link.url, '_blank');
      return;
    }

    router.push(project.link.url);
  };

  const icon = () => {
    if (project.link.type === 'external') {
      return 'bytesize:external';
    }

    return 'uil:link';
  };

  return (
    <Card className='p-4'>
      <div className='flex w-full items-start justify-between'>
        <p className='text-xl'>{project.name}</p>

        <button onClick={navigateToProject}>
          <Icon icon={icon()} className='font-bold' fontSize={20} />
        </button>
      </div>

      <p className='pt-4 text-sm leading-6'>{project.description}</p>

      <div className='mt-8 flex flex-wrap gap-8'>
        <SkillChips skills={getSkills()} />
      </div>
    </Card>
  );
}
