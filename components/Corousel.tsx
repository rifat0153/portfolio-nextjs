import React, { ReactNode, useState, useEffect, useRef } from 'react';

interface CarouselProps<T> {
  items: T[];
  // eslint-disable-next-line no-unused-vars
  renderItem: (item: T) => React.ReactNode;
  autoplayInterval?: number;
  prevIcon?: ReactNode;
  nextIcon?: ReactNode;
}

export function Carousel<T>({
  items,
  renderItem,
  autoplayInterval = 3000,
  prevIcon = <span className='i-ic-baseline-arrow-back'></span>,
  nextIcon = <span className='i-ic-baseline-arrow-forward'></span>,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay] = useState(true);
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

      <div className=''>{items[currentIndex] && renderItem(items[currentIndex])}</div>
    </div>
  );
}
