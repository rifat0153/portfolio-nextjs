'use client';

const CarouselSkeleton = () => {
  return (
    <div className='carousel-skeleton'>
      <div className='skeleton-item' />
      <style jsx>{`
        .carousel-skeleton {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .skeleton-item {
          flex: 1;
          height: 100px;
          background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
          background-size: 400% 400%;
          animation: pulse 1.2s ease-in-out infinite;
        }
        @keyframes pulse {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: -135% 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default CarouselSkeleton;
