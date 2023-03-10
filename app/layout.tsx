'use client';

import { AnalyticsWrapper } from '@/components/analytics';
import { Alegreya, Inter } from '@next/font/google';
import { useState } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const alegreya = Alegreya({ subsets: ['latin'], variable: '--font-alegreya' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body
        className={`
        transition-colors duration-1000
        ${darkMode ? 'dark' : ''}
        ${alegreya.variable} ${inter.variable} font-sans`}
      >
        <nav
          className='flex w-full items-center justify-between gap-4 px-10 py-4
                      transition-colors duration-500  dark:bg-gray-900 dark:text-gray-200'
        >
          <p className='font-burtons font-alegreya text-2xl font-bold'>Dev Portfolio</p>

          <div className='flex items-center gap-8 '>
            <button
              onClick={() => setdarkMode((v) => !v)}
            >
              <svg
                className='h-5 w-5'
                fill={`${darkMode ? 'white' : 'black'}`}
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
                window.open(
                  'https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/CV%20-%20Mahbubur%20Rahman%20Jan%2026%20V1%20(1).pdf?alt=media&token=6bfa50b9-3c54-41cd-8f74-58253c9420ff',
                  '_blank'
                );
              }}
            >
              Resume
            </button>
          </div>
        </nav>

        <main className='transition-colors duration-500 dark:bg-gray-900'>{children}</main>

        <AnalyticsWrapper />
      </body>
    </html>
  );
}
