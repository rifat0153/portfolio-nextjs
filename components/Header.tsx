'use client';

import { useDarkMode } from '@/hooks/useDarkMode';

const resumeLink =
  'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/MAHBUBUR-RAHMAN_25384701_cv-library.pdf?alt=media&token=ce3933f7-d339-4465-991d-2f150c5ff74e';

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div
      className='flex w-full items-center justify-between gap-4 px-10 py-4 transition-colors
                      duration-500 dark:bg-gray-900 dark:text-gray-200'
    >
      <p className='font-burtons font-alegreya text-2xl font-bold'>Dev Portfolio</p>

      <div className='hidden items-center gap-8 font-alegreya  text-xl font-bold transition-colors duration-500 md:flex'>
        <button className='transition-all duration-500 hover:text-cyan-500 hover:underline'>
          Portfolio
        </button>

        <button className='transition-all duration-500 hover:text-cyan-500 hover:underline'>
          About
        </button>

        <button className='transition-all duration-500 hover:text-cyan-500 hover:underline'>
          Contact
        </button>
      </div>

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
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
              <path d='M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z'></path>
            </g>
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
  );
};

export default Header;
