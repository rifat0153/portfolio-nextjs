'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Skill } from '../skills/skills';
import { WorkExperience } from './experinces';
import { SkillChips } from '../skills/skill_chips';
import { getSkillsByExperienceId } from '../utils/utils';

export default function ExperinceCard({ experience }: { experience: WorkExperience }) {
  const router = useRouter();

  const navigateToExperience = () => {
    router.push(`/experiences/${experience.id}`);
  };

  const getSkills = (): Skill[] => getSkillsByExperienceId(experience.id);

  return (
    <div
      tabIndex={0}
      className='w-full cursor-pointer rounded-lg p-4 text-left shadow-lg @container  focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
               focus:ring-offset-gray-100 active:outline-none'
      aria-describedby={`experience-${experience.id}-job-title experience-${experience.id}-company experience-${experience.id}-duration experience-${experience.id}-country experience-${experience.id}-description`}
      onClick={navigateToExperience}
    >
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 h-[15rem] rounded-lg @lg:col-span-3 @lg:h-1/3'>
          {experience.image && (
            <div className='relative h-full w-full rounded-lg object-cover'>
              <Image
                src={experience.image!}
                alt={experience.company}
                height={400}
                width={400}
                fill={false}
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>
          )}

          {!experience.image && (
            <div className='inline-flex h-full w-full items-center justify-center text-lg font-bold'>
              {experience.company}
            </div>
          )}
        </div>

        <div className='col-span-12 p-2 font-inter text-gray-800 @lg:col-span-9'>
          <div className='flex items-center gap-4 text-lg font-semibold leading-8'>
            <p>{experience.jobTitle}</p>
            <p className='text-xs text-gray-400'>{experience.company}</p>
          </div>

          <div className='font-normal leading-6'>
            <p className='pt-2 text-md font-semibold'>{experience.company}</p>
            <p className='text-sm leading-6'>{experience.duration}</p>
            <p className='text-sm leading-6'>{experience.country}</p>
          </div>

          <p className='mt-2 text-md leading-6'>{experience.description}</p>

          <div className='mt-8 flex flex-wrap gap-8'>
            <SkillChips skills={getSkills()} />
          </div>
        </div>
      </div>
    </div>
  );
}
