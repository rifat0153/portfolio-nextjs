'use client';

import { Card } from '@nextui-org/react';
import { Icon } from '@iconify/react';

import { Project } from './projects';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className='p-4'>
      <div className='flex w-full items-start justify-between'>
        <p className='text-xl'>{project.name}</p>

        <button onClick={() => {}}>
          <Icon icon='uil:link' className='font-bold' fontSize={20} />
        </button>
      </div>

      <p className='pt-4 text-sm leading-6'>{project.description}</p>
    </Card>
  );
}

export default ProjectCard;
