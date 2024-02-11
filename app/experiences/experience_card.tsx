import Link from 'next/link';
import { getSkillsByExperienceId } from '../skills/skills';
import { SkillChips } from '../skills/skill_chips';
import { WorkExperience } from './experinces';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

export default function ExperienceCard({ experience }: { experience: WorkExperience }) {
  const skills = getSkillsByExperienceId(experience.id);

  return (
    <Link href={`/experiences/${experience.id}`} className=''>
      <Card
        className='w-full cursor-pointer rounded-xl bg-white shadow-md ring-offset-2 transition-shadow duration-1000 ease-in-out hover:shadow-xl focus:outline-1 focus:ring-2 active:ring-2'
        aria-describedby={`experience-${experience.id}-job-title experience-${experience.id}-company experience-${experience.id}-duration experience-${experience.id}-country experience-${experience.id}-description`}
      >
        <CardHeader className=''>
          <p className='text-2xl font-bold'>{experience.jobTitle}</p>
        </CardHeader>

        <CardBody className='font-normal leading-6'>
          <p className='text-lg font-semibold text-gray-700'>{experience.company}</p>
          <p className='text-sm leading-6 text-gray-600'>{experience.duration}</p>
          <p className='text-sm leading-6 text-gray-600'>{experience.country}</p>

          <p className='py-4 text-lg font-semibold leading-6 text-gray-700'>
            {experience.description}
          </p>
        </CardBody>

        <CardFooter className=''>
          <SkillChips skills={skills} />
        </CardFooter>
      </Card>
    </Link>
  );
}
