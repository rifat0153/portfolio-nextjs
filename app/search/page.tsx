'use client';

import { useEffect, useState } from 'react';
import { Input } from '@nextui-org/react';
import { WorkExperience, workExperiences } from '../experiences/experinces';
import { Project, softwareProjects } from '../projects/projects';
import { Skill, softwareSkills } from '../skills/skills';
import { fulltextSearch } from '../utils/utils';
import useDebouncedState from '@/hooks/useDebouncedState';

interface SearchResult {
  project: Project[];
  skills: Skill[];
  experiences: WorkExperience[];
}

const search = (query: string) => {
  const result: SearchResult = {
    project: fulltextSearch(softwareProjects, query),
    skills: fulltextSearch(softwareSkills, query),
    experiences: fulltextSearch(workExperiences, query),
  };

  return result;
};

function SearchPage() {
  // const [searchQuery, setSearchQuery] = useState('');
  const [searchQuery, setSearchQuery, debouncedState] = useDebouncedState('', 500);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  useEffect(() => {
    if (debouncedState !== '') {
      const result = search(debouncedState);
      setSearchResult(result);
    } else {
      setSearchResult(null);
    }
  }, [debouncedState]);

  return (
    <div className='flex h-[90vh] flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold'>Search is coming Soon</h1>

      <Input
        type='text'
        placeholder='Search anything'
        onChange={(e) => setSearchQuery(e.target.value)}
        className='py-10'
      />

      {searchResult && (
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-2xl font-bold'>Projects</h1>
          <div className='flex flex-col items-center justify-center'>
            {searchResult.project.map((project) => (
              <div key={project.id} className=''>
                <p>{project.name}</p>
              </div>
            ))}
          </div>

          <h1 className='text-2xl font-bold'>Skills</h1>
          <div className='flex flex-col items-center justify-center'>
            {searchResult.skills.map((skill) => (
              <div key={skill.id} className=''>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>

          <h1 className='text-2xl font-bold'>Experiences</h1>
          <div className='flex flex-col items-center justify-center'>
            {searchResult.experiences.map((experience) => (
              <div key={experience.id} className=''>
                <p>{experience.company}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
