import Link from 'next/link';
import { getSkillsByExperienceId } from '../skills/skills';
import { SkillChips } from '../skills/skill_chips';
import { WorkExperience } from './experinces';
import { Card, CardBody, CardFooter, CardHeader, Divider, Image } from '@nextui-org/react';

export default function ExperienceCard({ experience }: { experience: WorkExperience }) {
  const skills = getSkillsByExperienceId(experience.id);

  return (
    <Link href={`/experiences/${experience.id}`}>
      <Card
        className='overflow-hidden transition-shadow duration-1000 ease-in-out hover:shadow-2xl'
        aria-describedby={`experience-${experience.id}-job-title experience-${experience.id}-company experience-${experience.id}-duration experience-${experience.id}-country experience-${experience.id}-description`}
      >
        {/* <Image
          isBlurred
          alt='Card background'
          className='rounded-xl object-cover'
          src={experience.image}
          width='150%'
          // fit cover
          style={{ objectFit: 'fill' }}
        /> */}

        <CardHeader className='flex flex-wrap items-center justify-between'>
          <p className='text-2xl font-bold'>
            {experience.jobTitle} | {experience.company}
          </p>

          <span>
            {experience.duration} | {experience.country}
          </span>
        </CardHeader>

        <Divider />

        <CardBody className='font-normal leading-6'>
          <p className='pt-4 text-lg font-semibold leading-6 text-gray-700'>
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
