import { Card, CardBody, CardHeader } from '@nextui-org/react';
import Link from 'next/link';
import { workExperiences } from '@/app/experiences/experinces';

export default function ExperienceCard({ expIdx }: { expIdx: string }) {
  const experience = workExperiences.find((exp) => exp.id === expIdx);

  if (!experience) {
    return <span></span>;
  }

  return (
    <Link href={`/experiences/${experience?.id}`}>
      <Card className='min-h-full'>
        <CardHeader className='text-xl font-bold lg:text-2xl'>{experience.company}</CardHeader>
        <CardBody className='text-medium lg:text-lg'>{experience.description}</CardBody>
      </Card>
    </Link>
  );
}
