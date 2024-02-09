'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { getSkillsByExperienceId, Skill } from '../skills/skills';
import { SkillChips } from '../skills/skill_chips';
import { WorkExperience } from './experinces';

export default function ExperienceCard({ experience }: { experience: WorkExperience }) {
  const router = useRouter();

  const navigateToExperience = () => {
    router.push(`/experiences/${experience.id}`);
  };

  const getSkills = (): Skill[] => getSkillsByExperienceId(experience.id);

  return (
    <div
      tabIndex={0}
      className='w-full cursor-pointer rounded-lg bg-white p-4 text-left shadow-lg transition-shadow duration-200 ease-in-out hover:shadow-xl focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100
               active:outline-none sm:p-6'
      aria-describedby={`experience-${experience.id}-job-title experience-${experience.id}-company experience-${experience.id}-duration experience-${experience.id}-country experience-${experience.id}-description`}
      onClick={navigateToExperience}
    >
      <div className='flex items-start gap-4 sm:gap-6'>
        <div className='flex-grow'>
          <div className='flex items-center gap-4 text-2xl font-bold leading-8'>
            <p>{experience.jobTitle}</p>
          </div>

          <div className='font-normal leading-6'>
            <p className='pt-2 text-lg font-semibold text-gray-700'>{experience.company}</p>
            <p className='text-sm leading-6 text-gray-600'>{experience.duration}</p>
            <p className='text-sm leading-6 text-gray-600'>{experience.country}</p>
          </div>

          <p className='mt-2 text-lg font-semibold leading-6 text-gray-700'>
            {experience.description}
          </p>

          {experience.bulletPoints && (
            <ExperienceBulletPoints bulletPoints={experience.bulletPoints} />
          )}

          <div className='mt-8 flex flex-wrap gap-8'>
            <SkillChips skills={getSkills()} />
          </div>
        </div>
      </div>
    </div>
  );
}

const ExperienceBulletPoints = ({ bulletPoints }: { bulletPoints: string[] }) => {
  // process the bullet points to remove new lines and empty strings
  const newBulletPoints = bulletPoints.map((point) => point.replace(/\n/g, '').trim());

  return (
    <ul className='mt-4 text-md leading-6 text-gray-700'>
      {newBulletPoints.map((point, index) => (
        <li key={index} className='my-2 list-inside list-disc'>
          {point}
        </li>
      ))}
    </ul>
  );
};
