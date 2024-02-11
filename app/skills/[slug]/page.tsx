import { getWorkExperiencesBySkillId } from '@/app/experiences/experinces';
import { Chip } from '@nextui-org/react';
import { softwareSkills } from '../skills';
import SkillExperienceCard from '@/app/skills/[slug]/skill_experince_card';

export default function SkillDetail({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const skills = softwareSkills;

  const skill = skills.find((skill) => skill.id === params.slug);

  if (!skill) {
    return <div>Not found</div>;
  }

  const experiences = getWorkExperiencesBySkillId(skill.id);

  return (
    <div className='inline-flex flex-col justify-center pt-8 text-medium font-normal leading-7 lg:pt-8'>
      {/* <Chip color='danger' variant='faded'>
        {params.slug}
      </Chip> */}

      <h1 className='text-2xl font-bold lg:text-4xl'>{skill?.name}</h1>

      <div className='mt-4 lg:mt-10'>{skill?.description}</div>

      <section>
        <h2 className='mt-10 text-xl font-bold lg:text-3xl'>Related Experiences</h2>

        <div className='mt-10 grid auto-rows-min grid-cols-1 gap-4 sm:grid-cols-2'>
          {experiences?.map((experience) => (
            <SkillExperienceCard expIdx={experience.id} key={experience.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
