'use client';

import { useRouter } from 'next/navigation';
import { Chip } from '@nextui-org/react';
import { softwareSkills } from '../skills';
import { workExperiences } from '@/app/experiences/experinces';

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

export function ExperinceChip({ expIdx, idx }: { expIdx: string; idx: number }) {
  const router = useRouter();
  const experience = workExperiences.find((exp) => exp.id === expIdx);

  const textColors = [
    // purple
    '#9F7AEA',
    // blue
    '#22D3EE',
    // green
    '#22C55E',
    // yellow
    '#F7C948',
  ];

  function handleNavigation() {
    router.push(`/experiences/${experience?.id}`);
  }

  if (!experience) {
    return <span> </span>;
  }

  return (
    <button
      onClick={handleNavigation}
      className='rounded-lg border-1 border-black px-2 py-1 text-sm'
      style={{
        color: textColors[idx % textColors.length],
      }}
    >
      {experience.jobTitle} @ {experience.company}
    </button>
  );
}
