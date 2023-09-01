'use client';

import { AnalyticsWrapper } from '@/components/analytics';
import Header from '@/components/Header';
import { Alegreya, Inter } from 'next/font/google';
import './globals.css';

import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const alegreya = Alegreya({ subsets: ['latin'], variable: '--font-alegreya' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body
        className={`
          w-full duration-1000 transition-colors
          ${false ? 'dark' : ''}
          ${alegreya.variable} ${inter.variable} font-sans`}
      >
        <NextUIProvider>
          <div className='w-full'>
            <div className='mx-auto max-w-6xl'>
              <nav className='sticky top-0 z-20'>
                <Header />
              </nav>
              <main className='w-full p-4 duration-500 transition-colors dark:bg-gray-900'>
                <div className='mx-auto w-full max-w-5xl'>{children}</div>
              </main>
            </div>
          </div>
        </NextUIProvider>
        {/* only add the analytics component in production */}
        {process.env.NODE_ENV === 'production' && <AnalyticsWrapper />}
      </body>
    </html>
  );
}
