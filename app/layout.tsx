'use client';

import { AnalyticsWrapper } from '@/components/analytics';
import Header from '@/components/Header';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Alegreya, Inter, Roboto, Barriecito } from '@next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const alegreya = Alegreya({ subsets: ['latin'], variable: '--font-alegreya' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, toggleDarkMode] = useDarkMode();

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
        <nav>
          <Header />
        </nav>

        <main className='transition-colors duration-500 dark:bg-gray-900'>{children}</main>

        <AnalyticsWrapper />
      </body>
    </html>
  );
}
