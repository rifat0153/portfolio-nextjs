import Disclaimer from '@/components/Disclaimer';
import { SkillsCarousel } from '@/components/SkillsCarousel';

export default function Home() {
  return (
    <>
      <div className='inline-flex w-full items-center justify-center px-4 dark:text-gray-200'>
        <div className='grid grid-cols-12 gap-20 py-[40vh]'>
          <p className='col-span-8 text-left text-lg leading-8'>
            Hi, I am Mahbubur. I&apos;m a full-stack web/mobile developer, skilled in languages such
            as C#, Typescript, and Dart. I have extensive experience with platforms like Vue.js,
            Flutter, and .Net Core. Beyond standard development, I&apos;ve dabbled in Python-based
            machine learning, which has led to several key publications.
          </p>

          <div className='col-span-4 inline-flex items-center justify-center text-center'>
            <SkillsCarousel />
          </div>
        </div>
      </div>

      <section className=''>
        <Disclaimer />
      </section>
    </>
  );
}
