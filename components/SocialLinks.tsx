'use client';

import LinkedInIcon from './icons/LinkedInIcon';
import GithubIcon from './icons/GithubIcon';

export default function SocialLinks() {
  return (
    <div className='flex justify-center gap-16'>
      <button
        onClick={() => {
          window.open('https://www.linkedin.com/in/mahbubur-rahman-988508172/', '_blank');
        }}
      >
        <div className='h-8 w-8'>
          <LinkedInIcon />
        </div>
      </button>
      <button
        onClick={() => {
          window.open(' https://github.com/rifat0153', '_blank');
        }}
      >
        <div className='h-8 w-8'>
          <GithubIcon />
        </div>
      </button>
    </div>
  );
}
