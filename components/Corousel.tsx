import React, { ReactNode, useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  autoplayInterval?: number;
  prevIcon?: ReactNode;
  nextIcon?: ReactNode;
}

export function Carousel<T>({
  items,
  renderItem,
  autoplayInterval = 3000,
  prevIcon = <Icon icon='ic:baseline-arrow-back' fontSize={20} />,
  nextIcon = <Icon icon='ic:baseline-arrow-forward' fontSize={20} />,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoplay) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, autoplayInterval);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [autoplay, items.length, autoplayInterval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className='relative h-full w-full overflow-hidden'>
      <button onClick={handlePrev} className='absolute inset-y-0 left-2 '>
        {prevIcon}
      </button>

      <button onClick={handleNext} className='absolute inset-y-0 right-2 '>
        {nextIcon}
      </button>

      <div
        className='flex h-full w-full'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <AnimatePresence initial={false}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className='h-full w-full'
              style={{ display: `${index === currentIndex ? 'block' : 'none'}` }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {renderItem(item)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
