import Link from 'next/link';
import { Icon } from '@iconify/react';

const Header = () => {
  const resumeLink =
    'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/Mahbubur%20Rahman%20CV.pdf?alt=media&token=64bbfa05-8620-4e18-982e-64976d7005fa';

  return (
    <div className='flex w-full items-center justify-between py-2'>
      <div>
        <Link href='/' className='flex items-center font-bold'>
          <Icon icon='icon-park:left' />
          <Icon icon='icon-park:right' />
          &nbsp; Mahbubur Rahman
        </Link>
      </div>

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

        <Link href={resumeLink} className='flex items-center gap-2' target='_blank'>
          <Icon icon='bx:file' />
          <p>Resume</p>
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
