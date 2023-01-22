import React from 'react';

export default function TechnologyList() {
  return (
    <>
      <p className='pb-2 text-2xl font-medium'>Technologies I Have Used</p>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        <div className='rounded-md py-4 text-center font-medium text-black shadow-lg '>
          <p>Flutter</p>
          <p className='text-sm text-gray-500'>2+ years</p>

          <p className='text-cyan-600'>Flutter Tech I Use</p>

          <div>Riverpod</div>
          <div>Firebase</div>
          <div>Freezed</div>
          <div>Local Packages</div>
        </div>

        <div className='rounded-md py-4 text-center font-medium text-black shadow-lg '>
          <p>VueJS</p>
          <p className='text-sm text-gray-500'>1+ years</p>

          <p className='text-cyan-600'>Vue Techs I Use</p>

          <div>Composable</div>
          <div>Tailwind</div>
          <div>Pinia</div>
          <div>Vitest</div>
        </div>

        <div className='rounded-md py-4 text-center font-medium text-black shadow-lg '>
          <p>.Net Core</p>
          <p className='text-sm text-gray-500'>1+ years</p>

          <p className='text-cyan-600'>.Net Techs I Use</p>

          <div>Web API</div>
          <div>EF Core</div>
          <div>xUnit</div>
          <div>Moq</div>
        </div>
      </div>
    </>
  );
}
