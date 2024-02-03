import ExperinceCard from './experience-card';
import { workExperiences } from './experinces';

export default function ExperiencesPage() {
  const experiences = workExperiences;

  return (
    <div className='my-8 lg:my-20'>
      {experiences.map((experience, idx) => (
        <div key={idx} className='py-2 sm:p-4'>
          <ExperinceCard experience={experience} />
        </div>
      ))}
    </div>
  );
}
