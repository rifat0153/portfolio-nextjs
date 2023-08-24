import Link from 'next/link';
import { Icon } from '@iconify/react';

const Header = () => {
  const resumeLink =
    'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/Mahbubur%20Rahman%20Dev%20CV%20%2B%20Cover%20Letter.pdf?alt=media&token=71954561-4d50-48a2-bd64-35060cdb62f0';

  return (
    <div className='relative flex w-full items-center justify-center py-2'>
      <Link href='/' className='absolute left-2 font-bold'>
        &lt;&gt; Mahbubur Rahman
      </Link>

      <div className='flex items-center justify-center gap-10'>
        <Link href='/skills' className='flex items-center gap-2'>
          <Icon icon='ic:baseline-bookmark' />
          <p>Skills</p>
        </Link>

        <Link href='/projects' className='flex items-center gap-2'>
          <Icon icon='fe:tiled' />
          <p>Projects</p>
        </Link>

        <Link href='/experiences' className='flex items-center gap-2'>
          <Icon icon='ph:briefcase-fill' />
          <p>Experiences</p>
        </Link>

        <Link href={resumeLink} className='flex items-center gap-2'>
          <Icon icon='bx:file' />
          <p>Resume</p>
        </Link>
      </div>

      <div className='absolute right-2 flex items-center justify-center gap-2'>
        <Link href='/search'>
          <Icon icon='material-symbols:search' fontSize={22} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
