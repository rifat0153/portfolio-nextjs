'use client';

import { Card } from '@nextui-org/react';
import { Icon } from '@iconify/react';

import { Project } from './projects';
import { SkillChips } from '../skills/skill_chips';
import { getSkillsByProjectId } from '../utils/utils';

export default function ProjectCard({ project }: { project: Project }) {
  const getSkills = () => getSkillsByProjectId(project.id);
  return (
    <Card className='p-4'>
      <div className='flex w-full items-start justify-between'>
        <p className='text-xl'>{project.name}</p>

        <button onClick={() => {}}>
          <Icon icon='uil:link' className='font-bold' fontSize={20} />
        </button>
      </div>

      <p className='pt-4 text-sm leading-6'>{project.description}</p>

      <div className='mt-8 flex flex-wrap gap-8'>
        <SkillChips skills={getSkills()} />
      </div>
    </Card>
  );
}

// const ProjectSkillsChip = ({ project }: { project: Project }) => {
//   return (
//     <div className='flex flex-wrap gap-2 pt-4'>
//       {project.as.map((skill, index) => {
//         return (
//           <div key={index} className='rounded-full bg-gray-200 px-2 py-1 text-xs'>
//             {skill}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
