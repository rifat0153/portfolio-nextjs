'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import Header from '@/components/Header';
import { AnalyticsWrapper } from '@/components/analytics';
import { Alegreya, Inter } from 'next/font/google';
import DynamicBreadcrumbs from '@/components/DynamicBreadcrumbs';
import Head from './head';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const alegreya = Alegreya({ subsets: ['latin'], variable: '--font-alegreya' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <html lang='en'>
      {/* 
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />

      <body
        className={`
          w-full transition-width duration-1000
          ${false ? 'dark' : ''}
          ${alegreya.variable} ${inter.variable} font-sans`}
      >
        <NextUIProvider navigate={router.push}>
          <div className='w-full'>
            <div className='mx-auto max-w-6xl '>
              <nav className='sticky top-0 z-20'>
                <Header />
              </nav>
              <main className='w-full p-4 pb-10 transition-colors duration-500 dark:bg-gray-900 lg:p-0 lg:pb-40'>
                <div className='mx-auto w-full max-w-5xl'>
                  <div className='my-2'>
                    <DynamicBreadcrumbs />
                  </div>

                  {children}
                </div>
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
