import Image from 'next/image';

import CompanyLink from '@/components/CompanyLink';

export default function CompanyTile(props: {
  name: string;
  location: string;
  image: string;
  country?: string;
  link?: string;
  description?: string;
  classes?: string;
}) {
  return (
    <div
      className={`relative h-[25rem] overflow-hidden rounded-2xl border-2 border-gray-300 bg-gradient-to-b
           dark:text-gray-300 ${props.classes}`}
    >
      <div className='absolute inset-x-0 top-0 flex h-[17rem] flex-col items-start justify-center gap-2 overflow-hidden text-ellipsis p-4 leading-8'>
        <p className='text-xl font-bold'>
          {props.name}, {props.location}, {props.country}
        </p>
        <p className='overflow-hidden text-ellipsis'>{props.description}</p>
        <CompanyLink link={props.link!} />
      </div>

      <div
        className='absolute inset-x-0 bottom-0 h-[8rem] w-full border-t-[1px] border-gray-200 bg-white transition-all 
                  duration-700 hover:h-[10rem]'
      >
        <Image
          src={props.image!}
          alt={props.name}
          fill={true}
          sizes='(min-width: 1024px) 33vw'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
}
