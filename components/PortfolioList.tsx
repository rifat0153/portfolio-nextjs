import spotlasImg1 from '@/public/spotlas_1.png';
import spotlasImg2 from '@/public/spotlas_2.png';
import dailyStarImg1 from '@/public/daily_star_1.png';
import dailyStarImg2 from '@/public/daily_star_2.png';
import Image from 'next/image';
import StoreLinks from './StoreLinks';

export default function PortfolioList() {
  return (
    <>
      <p className='mt-20 mb-4 text-2xl font-medium'>Portfolio</p>
      {/* <div className='grid-col-1 grid grid-flow-row items-center gap-x-4 gap-y-20 lg:grid-cols-3 '> */}
      <div
        className='grid border-spacing-2 grid-cols-1 gap-x-5 gap-y-5 rounded-lg border-2 border-pink-300 p-2 
                   lg:grid-cols-3 lg:p-4'
      >
        <div className='flex h-full flex-col justify-between gap-8 rounded-lg bg-gradient-to-b from-pink-700 p-2'>
          <div>
            <p className='text-2xl font-medium text-gray-100'>Spotlas</p>
            <p className='mt-2 leading-8 text-gray-100'>
              Spotlas is the social network revolutionising the way people discover, choose and
              experience spots around the world – from cafes, restaurants, bars and nightclubs to
              hotels, museums, shops and beaches...Any spot. Any time. Anywhere.
            </p>
          </div>

          <div className='pb-4'>
            <StoreLinks
              appstoreLink='https://apps.apple.com/gb/app/spotlas/id1464125251'
              playstoreLink='https://play.google.com/store/apps/details?id=co.uk.wotspot.indigo.ios.stage'
            />
          </div>
        </div>

        <Image
          className='h-full w-full rounded-lg'
          src={spotlasImg1}
          style={{
            objectFit: 'cover',
          }}
          alt='Spotlas App Image'
        />

        <Image
          className='h-full w-full rounded-lg'
          src={spotlasImg2}
          style={{
            objectFit: 'cover',
          }}
          alt='Spotlas App Image'
        />
      </div>

      <div className='mt-4 grid border-spacing-2 grid-cols-1 gap-x-5 gap-y-5 rounded-lg border-2 border-blue-300 p-2 lg:mt-10 lg:grid-cols-3 lg:p-4'>
        <Image
          className='h-full w-full rounded-lg'
          src={dailyStarImg1}
          style={{
            objectFit: 'cover',
          }}
          alt='Daily Star App Image'
        />
        <Image
          className='h-full w-full'
          src={dailyStarImg2}
          style={{
            objectFit: 'cover',
          }}
          alt='Daily Star App Image'
        />

        <div className='flex h-full flex-col justify-between gap-8 rounded-lg bg-gradient-to-b from-blue-700 p-2'>
          <div>
            <p className='text-2xl font-medium text-gray-100'>Daily Star</p>
            <p className='mt-2 leading-8 text-gray-100'>
              Bangladesh&apos;s leading English newspaper updating 24/7 with latest, breaking,
              politics, business, technology, world, entertainment, sports, lifestyle and crime
              news. The Daily Star established its place in the media scene of Bangladesh on January
              14, 1991 as an independent newspaper.
            </p>
          </div>

          <div className='pb-4'>
            <StoreLinks
              appstoreLink='https://apps.apple.com/us/app/the-daily-star/id589009555'
              playstoreLink='https://play.google.com/store/apps/details?id=com.mcc.thedailystar&hl=en_US&gl=US'
            />
          </div>
        </div>
      </div>
    </>
  );
}
