'use client';

import { useRouter } from 'next/navigation';
import { Chip } from '@nextui-org/react';
import { workExperiences } from '@/app/experiences/experinces';

export default function ExperienceDetail({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const experiences = workExperiences;

  const experience = experiences.find((exp) => exp.id === params.slug);

  if (!experience) {
    return <div>Not found</div>;
  }

  return (
    <div className='inline-flex flex-col justify-center pt-8 text-medium font-normal leading-7 lg:pt-[35vh]'>
      <Chip color='danger' variant='faded'>
        {experience.jobTitle} @ {experience.company}
      </Chip>

      <div className='mt-4 lg:mt-10'>{experience?.description}</div>
    </div>
  );
}
