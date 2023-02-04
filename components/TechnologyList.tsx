export default function TechnologyList() {
  return (
    <div className='pb-20 dark:text-gray-200 lg:pb-40'>
      <p className='pb-4 text-2xl font-medium'>Technologies</p>

      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        <div
          className='rounded-md py-4 text-center font-medium text-black shadow-lg dark:bg-slate-700 dark:text-gray-200
                     dark:shadow-slate-800'
        >
          <p>Flutter</p>
          <p className='text-sm text-gray-500 dark:text-gray-400'>3 years</p>

          <p className='text-cyan-600'>Flutter Tech I Use</p>

          <div>Riverpod</div>
          <div>Firebase</div>
          <div>Freezed</div>
          <div>Local Packages</div>
        </div>

        <div
          className='rounded-md py-4 text-center font-medium text-black shadow-lg dark:bg-slate-700
                    dark:text-gray-200 dark:shadow-slate-800'
        >
          <p>VueJS</p>
          <p className='text-sm text-gray-500'>1+ years</p>

          <p className='text-cyan-600'>Vue Techs I Use</p>

          <div>Composable</div>
          <div>Tailwind</div>
          <div>Pinia</div>
          <div>Vitest</div>
        </div>

        <div
          className='rounded-md py-4 text-center font-medium text-black shadow-lg dark:bg-slate-700
                    dark:text-gray-200 dark:shadow-slate-800'
        >
          <p>.Net Core</p>
          <p className='text-sm text-gray-500'>1+ years</p>

          <p className='text-cyan-600'>.Net Techs I Use</p>

          <div>Web API</div>
          <div>EF Core</div>
          <div>xUnit</div>
          <div>Moq</div>
        </div>
      </div>
    </div>
  );
}
