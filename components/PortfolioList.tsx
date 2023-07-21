import Image from 'next/image';

import StoreLinks from '@/components/StoreLinks';
import { twMerge, twJoin } from 'tailwind-merge';
import { portfolios } from '@/data/portfolio';

export default function PortfolioList() {
  return (
    <>
      <p className='mt-20 mb-4 text-2xl font-medium'>Portfolio</p>

      {portfolios.map((portfolio) => {
        return (
          <div
            key={portfolio.name}
            className={twMerge(
              `mt-4 grid border-spacing-2 grid-cols-1 gap-x-5 gap-y-5 rounded-lg border-2 p-2 md:grid-cols-3 lg:mt-10 lg:p-4`
            )}
          >
            <div
              className={twJoin(
                'flex h-full flex-col justify-between gap-8 rounded-lg bg-gradient-to-b from-blue-700 to-blue-500 p-2',
                portfolio.classes
              )}
            >
              <div>
                <span
                  className={twJoin(
                    'hidden rounded-lg bg-gradient-to-b from-pink-700 to-pink-700 p-2'
                  )}
                ></span>
                <p className='text-2xl font-medium text-gray-100'>{portfolio.name}</p>
                <p className='mt-2 leading-8 text-gray-100'>{portfolio.description}</p>
              </div>

              <div className='pb-4'>
                <StoreLinks
                  appstoreLink={portfolio.links.appstoreLink}
                  playstoreLink={portfolio.links.playstoreLink}
                />
              </div>
            </div>

            {portfolio.images.map((image) => {
              return (
                <Image
                  key={image.src}
                  className='h-full w-full rounded-lg'
                  src={image}
                  style={{
                    objectFit: 'cover',
                  }}
                  alt={portfolio.name + ' App Image'}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}
