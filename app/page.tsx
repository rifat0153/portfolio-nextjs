import Image from 'next/image';

import LinkedInIcon from './../components/icons/LinkedInIcon';
import GithubIcon from './../components/icons/GithubIcon';
import profile from '../public/profile.png';
import profileNoBg from '../public/profile-nobg.png';
import TechnologyList from '@/components/TechnologyList';
import PortfolioList from '@/components/PortfolioList';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  console.log('Hello from HOME');

  return (
    <div className='mx-auto w-full max-w-5xl px-4 pb-40'>
      <div className='py-10 text-center'>
        <p className='text-5xl font-medium text-cyan-600 '>Mahbubur Rahman</p>
        <p className='mt-2 text-2xl'>Typescript, C# and Dart Developer </p>
        <p className='text-md mt-5 leading-8 text-gray-800'>
          I am a versatile developer with 2+ years of experience in Typescript, C#, Dart, VueJs,
          .Net Core, and Flutter. Strong in both front-end and back-end development, with a proven
          ability to deliver high-quality solutions.
        </p>
      </div>

      <SocialLinks />

      <Image
        src={profileNoBg}
        alt='Profile Image'
        style={{
          objectFit: 'contain',
        }}
        className='mx-auto my-10 h-80 w-80 rounded-full bg-gradient-to-b from-cyan-600'
      />

      <p className='pt-10 text-2xl font-medium'>Experience</p>

      <p className='pt-2 pb-10 text-base leading-8'>
        As a professional developer, I offer a wide range of services to my clients. My expertise
        includes full-stack web development using technologies such as{' '}
        <span className='font-medium text-cyan-600'>VueJS</span> and{' '}
        <span className='font-medium text-cyan-600'>NextJS</span>, mobile app development using{' '}
        <span className='font-medium text-cyan-600'>Flutter</span>, API development using{' '}
        <span className='font-medium text-cyan-600'>.NET Core</span> and{' '}
        <span className='font-medium text-cyan-600'>Docker</span>. I have experience working with
        agencies and startups on various projects, and I have also worked in the industry as a{' '}
        <span className='font-medium text-cyan-600'>VueJS</span> and{' '}
        <span className='font-medium text-cyan-600'>.Net</span> developer. I possess a strong
        understanding of software development best practices, including{' '}
        <span className='font-medium text-cyan-600'>Agile methodologies</span> and{' '}
        <span className='font-medium text-cyan-600'>test-driven development</span>. Additionally, I
        have worked with <span className='font-medium text-cyan-600'>Firebase</span> and{' '}
        <span className='font-medium text-cyan-600'>MongoDB</span> databases and have experience
        with <span className='font-medium text-cyan-600'>geo-queries</span>. I have also led a small
        team of 2 developers in a startup. I am a highly adaptable developer with the ability to
        quickly learn new technologies and tools, and I am always looking for ways to improve my
        skills and stay current with industry trends.
      </p>

      <TechnologyList />

      <div className='mt-10'>
        <PortfolioList />
      </div>
    </div>
  );
}
