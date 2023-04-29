import Image from 'next/image';

import StoreLinks from '@/components/StoreLinks';
import { portfolios } from '@/data/portfolio';

export default function PortfolioList() {
  return (
    <>
      <p className='mt-20 mb-4 text-2xl font-medium'>Portfolio</p>

      {portfolios.map((portfolio) => {
        return (
          <div
            key={portfolio.name}
            className={`mt-4 grid border-spacing-2 grid-cols-1 gap-x-5 gap-y-5 rounded-lg border-2 lg:mt-10 
                        border-${portfolio.themeColor}-300 p-2 md:grid-cols-3 lg:p-4`}
          >
            <div
              className={`flex h-full flex-col justify-between gap-8 rounded-lg bg-gradient-to-b 
                          from-${portfolio.themeColor}-700 to-${portfolio.themeColor}-500 p-2`}
            >
              <div>
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
