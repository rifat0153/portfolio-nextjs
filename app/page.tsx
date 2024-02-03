import CarouselSkeleton from '@/components/CarouselSkeleton';
import Disclaimer from '@/components/Disclaimer';
import { SkillsCarousel } from '@/components/SkillsCarousel';
import SocialLinks from '@/components/SocialLinks';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-12 gap-4 gap-y-20 pt-8 lg:gap-20 lg:gap-y-0 lg:pt-[30vh]'>
        <div className='col-span-12 break-words text-left text-medium leading-[1rem] sm:text-lg lg:col-span-8'>
          <p>
            Hi, I am
            <span className='text-2xl font-bold text-cyan-500 sm:text-5xl'> Mahbubur</span>, a
            full-stack web/mobile developer. Proficient in
            <span className='text-lg font-bold text-blue-600 sm:text-xl'> .Net </span>,
            <span className='text-lg font-bold text-lime-600 sm:text-xl'> Vue.js </span>,
            <span className='text-lg font-bold text-blue-800 sm:text-xl'> React.js </span>, and
            <span className='text-lg font-bold text-purple-600 sm:text-xl'> Flutter </span>. Beyond
            standard development, I&apos;ve dabbled in Python-based machine learning, which has led
            to several key publications.
          </p>
        </div>

        <div className='col-span-12 inline-flex items-center justify-center text-center lg:col-span-4'>
          <Suspense fallback={<CarouselSkeleton />}>
            <SkillsCarousel />
          </Suspense>
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
