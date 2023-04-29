import { useDarkMode } from '@/hooks/useDarkMode';
import { useState } from 'react';

const resumeLink =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/MAHBUBUR-RAHMAN_25384701_cv-library.pdf?alt=media&token=ce3933f7-d339-4465-991d-2f150c5ff74e';

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [showHeader, setShowHeader] = useState(true);

  return (
    <>
      {/* Button to toggle show/hide header on smaller screens */}
      <button className='md:hidden' onClick={() => setShowHeader(!showHeader)}>
        {showHeader ? 'Hide Header' : 'Show Header'}
      </button>

      {/* Header component */}
      {showHeader && (
        <div
          className='flex w-full items-center justify-between gap-4 px-10 py-4 transition-colors
                      duration-500 dark:bg-gray-900 dark:text-gray-200'
        >
          <p className='font-burtons font-alegreya text-2xl font-bold'>Dev Portfolio</p>

          {/* <div className='hidden items-center gap-8 font-alegreya  text-xl font-bold transition-colors duration-500 md:flex'>
            <button className='transition-all duration-500 hover:text-cyan-500 hover:underline'>
              Portfolio
            </button>

            <button className='transition-all duration-500 hover:text-cyan-500 hover:underline'>
              About
            </button>

            <button className='transition-all duration-500 hover:text-cyan-500 hover:underline'>
              Contact
            </button>
          </div> */}

          <div className='flex items-center gap-8 '>
            <button onClick={() => toggleDarkMode()}>
              <svg
                className='h-5 w-5'
                fill={`${isDarkMode ? 'white' : 'black'}`}
                viewBox='0 0 35 35'
                data-name='Layer 2'
                id='Layer_2'
                xmlns='http://www.w3.org/2000/svg'
              >
                {/* SVG icon code */}
              </svg>
            </button>

            <button
              className='cursor-pointer rounded-sm bg-gradient-to-r from-cyan-500 to-teal-500 px-2 py-1 '
              onClick={() => {
                window.open(resumeLink, '_blank');
              }}
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
