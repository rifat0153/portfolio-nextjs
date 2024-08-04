import ExperienceCard from './experience_card';
import { workExperiences } from './experinces';

export default function ExperiencesPage() {
  const experiences = workExperiences;

  return (
    <div className='@container lg:pt-[2vh]'>
      <div className='my-8 lg:my-20'>
        <div className='@2xl:columns-2 @3xl:columns-2'>
          {experiences.map((experience, idx) => (
            <div key={idx} className={`py-2 md:px-0 md:py-2 ${idx === 0 ? '' : ''}`}>
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
