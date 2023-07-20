import Image from 'next/image';

import dotnetLogo from '@/public/dotnet-logo.png';
import flutterSvg from '@/public/flutterio-icon.svg';
import vueSvg from '@/public/vuejs-icon.svg';

export default function TechnologyList() {
  return (
    <div className='pb-20 dark:text-gray-200 lg:pb-40'>
      <p className='pb-4 text-2xl font-medium'>Technologies</p>

      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        <div
          className='rounded-md py-4 text-center font-medium text-black shadow-lg dark:bg-slate-700 dark:text-gray-200
                     dark:shadow-slate-800'
        >
          <Image
            src={flutterSvg}
            width={300}
            height={300}
            alt='Flutter Image'
            style={{
              objectFit: 'contain',
              width: '80%',
            }}
            className='mx-auto my-2 rounded-full p-10'
          />

          <p className='pb-2 text-lg font-medium lg:text-2xl'>Flutter</p>
          <p className='pb-4 text-sm text-gray-500 dark:text-gray-400 lg:pb-8 lg:text-md'>
            3 years
          </p>

          <p className='text-cyan-600'>Flutter Tech I Use</p>

          <div className='font-medium lg:text-lg'>
            <p>Riverpod</p>
            <p>Firebase</p>
            <p>Freezed</p>
            <p>Local Packages</p>
          </div>
        </div>

        <div
          className='rounded-md py-4 text-center font-medium text-black shadow-lg dark:bg-slate-700
                    dark:text-gray-200 dark:shadow-slate-800'
        >
          <Image
            src={vueSvg}
            width={300}
            height={300}
            alt='VueJs Image'
            style={{
              objectFit: 'contain',
              width: '80%',
            }}
            className='mx-auto my-2 rounded-full p-10'
          />

          <p className='pb-2 text-lg font-medium lg:text-2xl'>VueJS</p>
          <p className='pb-4 text-sm text-gray-500 dark:text-gray-400 lg:pb-8 lg:text-md'>
            2 years
          </p>

          <p className='text-cyan-600'>Vue Techs I Use</p>

          <div className='font-medium lg:text-lg'>
            <div>Composable</div>
            <div>Tailwind</div>
            <div>Pinia</div>
            <div>Vitest</div>
          </div>
        </div>

        <div
          className='rounded-md py-4 text-center font-medium text-black shadow-lg dark:bg-slate-700
                    dark:text-gray-200 dark:shadow-slate-800'
        >
          <Image
            src={dotnetLogo}
            width={300}
            height={300}
            alt='Dotnet Core Image'
            style={{
              objectFit: 'contain',
              width: '80%',
            }}
            className='mx-auto my-2 rounded-full p-10'
          />

          <p className='pb-2 text-lg font-medium lg:text-2xl'>.Net Core</p>
          <p className='pb-4 text-sm text-gray-500 dark:text-gray-400 lg:pb-8 lg:text-md'>
            2 years
          </p>

          <p className='text-cyan-600'>.Net Techs I Use</p>

          <div className='font-medium lg:text-lg'>
            <div>REST API</div>
            <div>EF Core</div>
            <div>xUnit</div>
            <div>Moq</div>
          </div>
        </div>
      </div>
    </div>
  );
}
