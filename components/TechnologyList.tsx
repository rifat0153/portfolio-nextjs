import Image from "next/image"

import flutterSvg from '@/public/flutterio-icon.svg';
import vueSvg from '@/public/vuejs-icon.svg';
import dotnetLogo from '@/public/dotnet-logo.png';

export default function TechnologyList() {
  return (
    <div className='pb-20 dark:text-gray-200 lg:pb-40'>
      <p className='pb-4 text-2xl font-medium'>Technologies</p>

      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        <div
          className='rounded-md py-4 text-center font-medium text-black shadow-lg dark:bg-slate-700 dark:text-gray-200
                     dark:shadow-slate-800'
        >
          <Image src={flutterSvg}
            width={300}
            height={300}
            alt='Flutter Image'
            style={{
              objectFit: 'contain',
              width: '80%',
            }}
            className='mx-auto my-2 rounded-full p-10'
          />

          <p className="text-lg lg:text-2xl pb-2 font-medium">Flutter</p>
          <p className='text-sm lg:text-md text-gray-500 dark:text-gray-400 pb-4 lg:pb-8'>2.5+ years</p>

          <p className='text-cyan-600'>Flutter Tech I Use</p>

          <div
            className="lg:text-lg font-medium"
          >
            <p >Riverpod</p>
            <p >Firebase</p>
            <p >Freezed</p>
            <p >Local Packages</p>
          </div>
        </div>

        <div
          className='rounded-md py-4 text-center font-medium text-black shadow-lg dark:bg-slate-700
                    dark:text-gray-200 dark:shadow-slate-800'
        >
          <Image src={vueSvg}
            width={300}
            height={300}
            alt='VueJs Image'
            style={{
              objectFit: 'contain',
              width: '80%',
            }}
            className='mx-auto my-2 rounded-full p-10'
          />

          <p className="text-lg lg:text-2xl pb-2 font-medium">VueJS</p>
          <p className='text-sm lg:text-md text-gray-500 dark:text-gray-400 pb-4 lg:pb-8'>1+ years</p>

          <p className='text-cyan-600'>Vue Techs I Use</p>

          <div
            className="lg:text-lg font-medium"
          >
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
          <Image src={dotnetLogo}
            width={300}
            height={300}
            alt='Dotnet Core Image'
            style={{
              objectFit: 'contain',
              width: '80%',
            }}
            className='mx-auto my-2 rounded-full p-10'
          />

          <p className="text-lg lg:text-2xl pb-2 font-medium">.Net Core</p>
          <p className='text-sm lg:text-md text-gray-500 dark:text-gray-400 pb-4 lg:pb-8'>1+ years</p>

          <p className='text-cyan-600'>.Net Techs I Use</p>

          <div
            className="lg:text-lg font-medium"
          >
            <div>Web API</div>
            <div>EF Core</div>
            <div>xUnit</div>
            <div>Moq</div>
          </div>
        </div>
      </div>
    </div>
  );
}
