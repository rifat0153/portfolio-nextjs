'use client';

import { Chip } from '@nextui-org/react';
import { softwareSkills } from '../skills';
import ExperinceChip from './experince-chip';

export default function SkillDetail({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const skills = softwareSkills;

  const skill = skills.find((skill) => skill.name === params.slug);

  if (!skill) {
    return <div>Not found</div>;
  }

  return (
    <div className='inline-flex flex-col justify-center pt-8 text-medium font-normal leading-7 lg:pt-[35vh]'>
      <Chip color='danger' variant='faded'>
        {params.slug}
      </Chip>

      <div className='mt-4 lg:mt-10'>{skill?.description}</div>

      <div className='mt-10 flex w-full gap-4'>
        {skill?.associatedExperiences?.map((experience, idx) => {
          return (
            <div key={idx} className='flex gap-10'>
              <ExperinceChip expIdx={experience} idx={idx} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
