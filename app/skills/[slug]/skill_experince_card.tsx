import { Card, CardBody, CardHeader } from '@nextui-org/react';
import Link from 'next/link';
import { workExperiences } from '@/app/experiences/experinces';

export default function SkillExperienceCard({ expIdx }: { expIdx: string }) {
  const experience = workExperiences.find((exp) => exp.id === expIdx);

  if (!experience) {
    return <span></span>;
  }

  return (
    <Link
      href={`/experiences/${experience?.id}`}
      className='cursor-pointer rounded-xl ring-offset-2 transition-all duration-250 focus:outline-1 focus:ring-2 active:ring-2'
    >
      <Card className='min-h-full'>
        <CardHeader className='text-lg font-bold lg:text-2xl'>{experience.company}</CardHeader>
        <CardBody className='text-sm lg:text-medium'>{experience.description}</CardBody>
      </Card>
    </Link>
  );
}
