import Link from 'next/link';
import { Icon } from '@iconify/react';

const Header = () => {
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK || '';

  return (
    <div className='flex w-full items-center justify-between bg-gradient-to-b from-white to-white/90 px-4 py-4'>
      <div>
        <Link href='/' className='flex items-center font-bold'>
          <Icon icon='icon-park:left' />
          <Icon icon='icon-park:right' />
          <span className='hidden lg:block'>&nbsp; Mahbubur Rahman</span>
        </Link>
      </div>

      <div className='flex items-center justify-center gap-10'>
        <Link href='/skills' className='flex items-center gap-2'>
          <Icon icon='ic:baseline-bookmark' />
          <p className='hidden lg:block'>Skills</p>
        </Link>

        <Link href='/projects' className='flex items-center gap-2'>
          <Icon icon='fe:tiled' />
          <p className='hidden lg:block'>Projects</p>
        </Link>

        <Link href='/experiences' className='flex items-center gap-2'>
          <Icon icon='ph:briefcase-fill' />
          <p className='hidden lg:block'>Experiences</p>
        </Link>

        <Link href={resumeLink} className='flex items-center gap-2' target='_blank'>
          <Icon icon='bx:file' />
          <p className='hidden lg:block'>Resume</p>
        </Link>
      </div>

      <div className='flex items-center justify-center gap-2'>
        <Link href='/search'>
          <Icon icon='material-symbols:search' fontSize={22} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
