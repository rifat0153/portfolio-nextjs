import Link from 'next/link';
import { workExperiences } from '@/app/experiences/experinces';

export default function ExperienceChip({ expIdx, idx }: { expIdx: string; idx: number }) {
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

  if (!experience) {
    return <span></span>;
  }

  return (
    <Link href={`/experiences/${experience?.id}`}>
      <p
        className='rounded-lg border-1 border-black px-2 py-1 text-sm'
        style={{
          color: textColors[idx % textColors.length],
        }}
      >
        {experience.jobTitle} @ {experience.company}
      </p>
    </Link>
  );
}
