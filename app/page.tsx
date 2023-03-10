import Image from 'next/image';

import profileNoBg from '@/public/profile-nobg.png';
import TechnologyList from '@/components/TechnologyList';
import PortfolioList from '@/components/PortfolioList';
import SocialLinks from '@/components/SocialLinks';
import CompanyList from '@/components/CompanyList';
import Disclaimer from '@/components/Disclaimer';

export default function Home() {
  return (
    <div className='mx-auto w-full max-w-5xl px-4 pb-40 dark:text-gray-200'>
      <div className='py-10 text-center'>
        <p className='text-5xl font-medium text-cyan-600 '>Mahbubur Rahman</p>
        <p className='mt-2 text-2xl dark:text-gray-100'>Typescript, Dart and C# Developer </p>
        <p className='text-md mt-5 leading-8 text-gray-800 dark:text-gray-300'>
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

      <p className='pt-2 pb-10 text-base leading-8 lg:pb-20'>
        As a professional developer, I offer a wide range of services to my clients. My expertise
        includes full-stack web development using technologies such as{' '}
        <span className='font-medium text-cyan-600'>Vue 3</span> and{' '}
        <span className='font-medium text-cyan-600'>React</span>, mobile app development using{' '}
        <span className='font-medium text-cyan-600'>Flutter</span>, API development using{' '}
        <span className='font-medium text-cyan-600'>.NET Core</span> and{' '}
        <span className='font-medium text-cyan-600'>NodeJS</span>. I have experience working with
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

      <p className='text-2xl font-medium'>Leadership Experience</p>

      <p className='pt-2 pb-10 text-base leading-8 lg:pb-20'>
        I have lead a small team of developers in a startup based in Bangladesh. I have successfully
        managed the team and delivered the project on time. I hepled junior developers write
        <span className='font-medium text-cyan-600'> clean </span>
        and <span className='font-medium text-cyan-600'> maintable </span>
        code. This experience has helped me develop
        strong leadership skills and the ability to work well in a team environment.
      </p>

      <TechnologyList />

      <CompanyList />

      <div className='mt-32'>
        <PortfolioList />
      </div>

      <div className='mt-32'>
        <Disclaimer />
      </div>
    </div>
  );
}
