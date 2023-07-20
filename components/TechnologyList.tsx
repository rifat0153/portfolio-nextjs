'use client';

import Image, { StaticImageData } from 'next/image';

import dotnetLogo from '@/public/dotnet-logo.png';
import flutterSvg from '@/public/flutterio-icon.svg';
import vueSvg from '@/public/vuejs-icon.svg';
import { technologies, Technology } from '@/data/technologies';
import { motion } from 'framer-motion';

const technologyImages = {
  flutterSvg: flutterSvg as StaticImageData,
  vueSvg: vueSvg as StaticImageData,
  dotnetLogo: dotnetLogo as StaticImageData,
};

const techs: Technology[] = technologies.map((tech: any) => ({
  ...tech,
  image: technologyImages[tech.image as keyof typeof technologyImages],
}));

export default function TechnologyList() {
  return (
    <div className='pb-10 dark:text-gray-200 lg:pb-40'>
      <p className='pb-4 text-2xl font-medium'>Technologies</p>

      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        {techs.map((tech, i) => (
          <motion.div
            className='rounded-md py-4 text-center font-medium text-black shadow-lg dark:bg-slate-700 dark:text-gray-200
                       dark:shadow-slate-800'
            key={tech.name}
            initial={{
              translateX: -100,
              translateY: -10,
              opacity: 0,
            }}
            whileInView={{
              translateX: 0,
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.5,
            }}
            exit={{
              translateX: 100,
              translateY: 10,
              opacity: 0,
            }}
          >
            <Image
              src={tech.image}
              width={300}
              height={300}
              alt={`${tech.name} Image`}
              style={{
                objectFit: 'contain',
                width: '80%',
              }}
              className='mx-auto my-2 rounded-full p-10'
            />

            <p className='pb-2 text-lg font-medium lg:text-2xl'>{tech.name}</p>
            <p className='pb-4 text-sm text-gray-500 dark:text-gray-400 lg:pb-8 lg:text-md'>
              {tech.experience}
            </p>

            <p className='text-cyan-600'>{`${tech.name} Tech I Use`}</p>

            <div className='font-medium lg:text-lg'>
              {tech.techs.map((techItem) => (
                <p key={techItem}>{techItem}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
