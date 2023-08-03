'use client';

import { AnalyticsWrapper } from '@/components/analytics';
import Header from '@/components/Header';
import { Alegreya, Inter } from 'next/font/google';
import './globals.css';

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
        w-full transition-colors duration-1000
        ${false ? 'dark' : ''}
        ${alegreya.variable} ${inter.variable} font-sans`}
      >
        <nav>
          <Header />
        </nav>

        <main className='w-full transition-colors duration-500 dark:bg-gray-900'>
          <div className='mx-auto w-full max-w-5xl'>{children}</div>
        </main>

        {/* only add the analytics component in production */}
        {process.env.NODE_ENV === 'production' && <AnalyticsWrapper />}
      </body>
    </html>
  );
}
