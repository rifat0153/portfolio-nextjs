import CarouselSkeleton from '@/components/CarouselSkeleton';
import Disclaimer from '@/components/Disclaimer';
import { SkillsCarousel } from '@/components/SkillsCarousel';
import SocialLinks from '@/components/SocialLinks';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-12 gap-4 gap-y-20 pt-8 lg:gap-20 lg:gap-y-0 lg:pt-[30vh]'>
        <div className='col-span-12 sm:text-xl lg:col-span-8'>
          <p className='break-words text-left leading-7 sm:leading-10'>
            Hi, I am
            <span className='text-2xl font-bold leading-10 text-fuchsia-600 sm:text-5xl'>
              &nbsp;Mahbubur
            </span>
            , a full-stack web/mobile developer.
            {/* <span className='text-lg font-bold text-rose-900 sm:text-xl'> Specializing</span> in */}
            &nbsp;Specializing in
            <span className='text-lg font-bold text-blue-600 sm:text-xl'> .Net </span>,
            <span className='text-lg font-bold text-lime-600 sm:text-xl'> Vue.js </span>,
            <span className='text-lg font-bold text-cyan-600 sm:text-xl'> React.js </span>, and
            <span className='text-lg font-bold text-blue-600 sm:text-xl'> Flutter </span>. Beyond
            standard development, I&apos;ve dabbled in Python-based machine learning, which has led
            to several key publications.
          </p>

          <div className='pt-4 lg:pt-4'>
            <Suspense fallback={<p></p>}>
              <SocialLinks />
            </Suspense>
          </div>
        </div>

        <div className='col-span-12 inline-flex items-center justify-center text-center lg:col-span-4'>
          <Suspense fallback={<CarouselSkeleton />}>
            <SkillsCarousel />
          </Suspense>
        </div>
      </div>

      <section className='mt-32 sm:mt-[40vh]'>
        <Disclaimer />
      </section>
    </>
  );
}
