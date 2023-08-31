import { workExperiences } from '@/app/experiences/experinces';
import { useRouter } from 'next/navigation';

export default function ExperinceChip({ expIdx, idx }: { expIdx: string; idx: number }) {
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
    return <span></span>;
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
