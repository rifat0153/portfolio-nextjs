import Link from 'next/link';

const Header = () => {
  return (
    <div
      className='flex w-full items-center justify-between gap-4 px-10 py-4 
                 transition-colors duration-500  dark:bg-gray-900 dark:text-gray-200'
    >
      <Link href='/' className='font-burtons font-alegreya text-2xl font-bold'>
        mahbubur.dev
      </Link>

      <div className='flex items-center gap-4 lg:gap-8'>
        <Link className='font-burtons font-alegreya text-2xl font-semibold' href='/contact'>
          Contact
        </Link>

        <div className='flex items-center gap-8 '>
          <Link
            className='cursor-pointer rounded-sm bg-gradient-to-r from-cyan-500 to-teal-500 px-2 py-1 '
            href='https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/Mahbubur%20Rahman%20Dev%20CV%20%2B%20Cover%20Letter.pdf?alt=media&token=71954561-4d50-48a2-bd64-35060cdb62f0'
            target={'_blank'}
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
