import Image from 'next/image';

import CompanyList from '@/components/CompanyList';
import Disclaimer from '@/components/Disclaimer';
import PortfolioList from '@/components/PortfolioList';
import SocialLinks from '@/components/SocialLinks';
import TechnologyList from '@/components/TechnologyList';
import profileNoBg from '@/public/profile-nobg.png';

export default function Home() {
  return (
    <div className='px-4 pb-40 dark:text-gray-200'>
      <div className='py-10 text-center'>
        <p className='text-5xl font-medium text-cyan-600 '>Mahbubur Rahman</p>
        <p className='mt-4 text-2xl dark:text-gray-100'>Typescript, Dart and C# Developer </p>
        <p className='mt-4 text-md leading-8 text-gray-800 dark:text-gray-300'>
          I am a versatile developer with 3 years of experience in Typescript, C#, Dart, VueJs, .Net
          Core, and Flutter. Strong in both front-end and back-end development, with a proven
          ability to deliver high-quality solutions.
        </p>
      </div>

      <SocialLinks />

      <div className='mt-10 lg:mt-20'>
        <Image
          priority={true}
          src={profileNoBg}
          alt='Profile Image'
          style={{
            objectFit: 'contain',
          }}
          className='mx-auto my-10 h-80 w-80 rounded-full bg-gradient-to-b from-cyan-600'
        />
      </div>

      <section>
        <ExperienceSection />
      </section>

      <TechnologyList />

      <CompanyList />

      <section className='mt-32'>
        <PortfolioList />
      </section>

      <section className='mt-32'>
        <Disclaimer />
      </section>
    </div>
  );
}

const ExperienceSection = () => {
  return (
    <>
      <p className='pt-10 text-2xl font-medium'>Experince</p>

      <p className='pt-2 pb-10 text-base leading-8 lg:pb-10'>
        I&apos;m a Full-Stack Software Developer with three years of industry experience. My
        technical skills span across
        <span className='font-medium text-cyan-600'> Vue 3</span>,
        <span className='font-medium text-cyan-600'> React</span>,
        <span className='font-medium text-cyan-600'> Flutter</span>,
        <span className='font-medium text-cyan-600'> .NET Core</span>, and
        <span className='font-medium text-cyan-600'> NodeJS</span>. I have been fortunate to work on
        various projects, ranging from startups to well-established agencies and industry
        enterprises. I have also led small teams, advocating for clean, maintainable coding
        practices, and timely, high-quality software product delivery. Equipped with a strong
        academic background in Data Science & Analytics and Computer Science & Engineering, I am
        passionate about keeping myself updated with industry trends and constantly expanding my
        skill set.
      </p>

      <p className='pt-10 text-2xl font-medium'>Experience & Leadership</p>

      <p className='pt-2 pb-10 text-base leading-8 lg:pb-10'>
        My professional journey has been dynamic and varied. I&apos;ve led a small team of
        developers at a startup in Bangladesh, and I have extensive experience in
        <span className='font-medium text-cyan-600'> Agile methodologies</span> and
        <span className='font-medium text-cyan-600'> test-driven development</span>. My database
        knowledge extends to
        <span className='font-medium text-cyan-600'> SQL</span>,
        <span className='font-medium text-cyan-600'> Firestore</span> and
        <span className='font-medium text-cyan-600'> MongoDB</span>, and I have tackled geo-queries
        successfully. My leadership style promotes a collaborative team environment and guides
        junior developers towards writing clean, maintainable code.
      </p>

      <p className='pt-10 text-2xl font-medium'>Projects & Publications</p>

      <p className='pt-2 pb-10 text-base leading-8 lg:pb-20'>
        My portfolio includes diverse projects such as the Elvan client restaurant application,
        Spotlas chat feature, and The Daily Star mobile app. Besides these practical applications, I
        have also contributed to academic research, authoring papers on Blockchain Technology,
        Automated Waste Collecting Robot, and Surveillance Drone technology.
      </p>
    </>
  );
};
