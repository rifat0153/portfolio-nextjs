'use client';

import { ReactNode, useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

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
  prevIcon = <Icon icon='ic:baseline-arrow-back' fontSize={20} />, // Default icon
  nextIcon = <Icon icon='ic:baseline-arrow-forward' fontSize={20} />, // Default icon
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
    <div className='relative h-full w-full'>
      <button onClick={handlePrev} className='absolute inset-y-0 left-2 '>
        {prevIcon}
      </button>

      <button onClick={handleNext} className='absolute inset-y-0 right-2 '>
        {nextIcon}
      </button>

      {items.map((item, index) => (
        <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
