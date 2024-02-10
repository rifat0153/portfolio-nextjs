import { Chip } from '@nextui-org/react';
import { workExperiences } from '@/app/experiences/experinces';
import { ExperienceBulletPoints } from '../experience_bullet_points';
import { SkillsRow } from './skills_row';

export default function ExperienceDetail({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const experience = workExperiences.find((exp) => exp.id === params.slug);

  if (!experience) {
    return <div>Not found</div>;
  }

  return (
    <div className='inline-flex flex-col justify-center pt-8 text-medium font-normal leading-7 lg:pt-10'>
      <Chip color='danger' variant='faded'>
        {experience.jobTitle} @ {experience.company}
      </Chip>

      <div className='mt-4 text-medium font-semibold lg:mt-10 lg:text-lg'>
        {experience?.description}
      </div>

      <ExperienceBulletPoints bulletPoints={experience.bulletPoints ?? []} />

      <SkillsRow skillIds={experience.associatedSkills ?? []} />
    </div>
  );
}
