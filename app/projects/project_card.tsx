import Link from 'next/link';
import { Card } from '@nextui-org/react';

import { Project } from './projects';
import { SkillChips } from '../skills/skill_chips';
import { getSkillsByProjectId } from '../skills/skills';

export default function ProjectCard({ project }: { project: Project }) {
  const getSkills = () => getSkillsByProjectId(project.id);

  const icon = () => (project.link.type === 'external' ? 'i-bytesize-external' : 'i-uil-link');

  const ProjectLink = () => {
    return (
      <Link href={project.link.url} target={project.link.type === 'internal' ? '_self' : '_blank'}>
        <span className={icon()}></span>
      </Link>
    );
  };

  return (
    <Card className='p-4'>
      <div className='flex w-full items-start justify-between'>
        <p className='text-xl'>{project.name}</p>

        <ProjectLink />
      </div>

      <p className='pt-4 text-sm leading-6'>{project.description}</p>

      <div className='mt-8 flex flex-wrap gap-8'>
        <SkillChips skills={getSkills()} />
      </div>
    </Card>
  );
}
