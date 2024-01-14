import Link from 'next/link';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();
  const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK || '';

  const linkClass = (currentPath: string) => (path.includes(currentPath) ? 'text-blue-500' : '');

  return (
    <div className='flex w-full items-center justify-between bg-gradient-to-b from-white to-white/90 px-4 py-4'>
      <div>
        <Link href='/' className={`flex items-center font-bold ${linkClass('/')}`}>
          <Icon icon='icon-park:left' />
          <Icon icon='icon-park:right' />
          <span className='hidden lg:block'>&nbsp; Mahbubur Rahman</span>
        </Link>
      </div>

      <div className='flex items-center justify-center gap-10'>
        <Link href='/skills' className={`flex items-center gap-2 ${linkClass('/skills')}`}>
          <Icon icon='ic:baseline-bookmark' />
          <p className='hidden lg:block'>Skills</p>
        </Link>

        <Link href='/projects' className={`flex items-center gap-2 ${linkClass('/projects')}`}>
          <Icon icon='fe:tiled' />
          <p className='hidden lg:block'>Projects</p>
        </Link>

        <Link
          href='/experiences'
          className={`flex items-center gap-2 ${linkClass('/experiences')}`}
        >
          <Icon icon='ph:briefcase-fill' />
          <p className='hidden lg:block'>Experiences</p>
        </Link>
      </div>

      <Link
        href={resumeLink}
        className={`flex items-center gap-2 ${linkClass(resumeLink)}`}
        target='_blank'
      >
        <Icon icon='bx:file' />
        <p className='hidden lg:block'>Resume</p>
      </Link>
    </div>
  );
};

export default Header;
