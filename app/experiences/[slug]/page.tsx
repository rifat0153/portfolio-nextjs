import { workExperiences } from '@/app/experiences/experinces';
import { ExperienceBulletPoints } from '../experience_bullet_points';
import { SkillsRow } from './skills_row';
import { getSkillsByExperienceId } from '@/app/skills/skills';

export default function ExperienceDetail({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const experience = workExperiences.find((exp) => exp.id === params.slug);

  const skills = getSkillsByExperienceId(experience?.id ?? '-1');
  const skillIds = skills.map((skill) => skill.id);

  if (!experience) {
    return <div>Not found</div>;
  }

  return (
    <div className='inline-flex flex-col justify-center pt-8 text-medium font-normal leading-7 lg:pt-10'>
      <h1
        className='text-2xl font-bold lg:text-4xl'
        aria-describedby='experience-title'
        tabIndex={0}
      >
        {experience.jobTitle} @ {experience.company}
      </h1>

      <h2 className='mt-4 text-medium font-semibold lg:mt-10 lg:text-lg'>
        {experience?.description}
      </h2>

      <ExperienceBulletPoints bulletPoints={experience.bulletPoints} />

      <h3 className='mt-8 text-medium font-semibold lg:mt-10 lg:text-3xl '>
        Tech I have used @ {experience.company}
      </h3>

      <SkillsRow skillIds={skillIds} />
    </div>
  );
}
