import Disclaimer from '@/components/Disclaimer';
import { SkillsCarousel } from '@/components/SkillsCarousel';
import SocialLinks from '@/components/SocialLinks';

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-12 gap-4 gap-y-20 pt-8 lg:gap-20 lg:gap-y-0 lg:pt-[30vh]'>
        <div className='col-span-12 break-words text-left text-lg leading-10 lg:col-span-8'>
          <p>
            Hi, I am
            <span className='text-2xl font-semibold text-cyan-500'> Mahbubur </span>. I&apos;m a
            full-stack web/mobile developer, skilled in languages such as C#, Typescript, and Dart.
            I have extensive experience with platforms like
            <span className='font-semibold text-lime-600'> Vue.js </span>,
            <span className='font-semibold text-blue-600'> Flutter </span> and
            <span className='font-semibold text-purple-600'> .Net Core </span>. Beyond standard
            development, I&apos;ve dabbled in Python-based machine learning, which has led to
            several key publications.
          </p>
        </div>

        <div className='col-span-12 inline-flex items-center justify-center text-center lg:col-span-4'>
          <SkillsCarousel />
        </div>
      </div>

      <div className='px-4 py-32 lg:px-0 lg:pb-[35vh] lg:pt-8'>
        <SocialLinks />
      </div>

      <section className=''>
        <Disclaimer />
      </section>
    </>
  );
}
