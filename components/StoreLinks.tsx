'use client';

import GooglePlayIcon from '@/components/icons/GooglePlayIcon';
import AppStoreIcon from '@/components/icons/AppStoreIcon';

function StoreLinks(props: { playstoreLink: string; appstoreLink: string }) {
  return (
    <div className='flex justify-center gap-8'>
      <div className='h-10 w-10'>
        <button
          onClick={() => {
            window.open(props.playstoreLink, '_blank');
          }}
        >
          <div className='h-10 w-10'>
            <GooglePlayIcon />
          </div>
        </button>
      </div>
      <button
        onClick={() => {
          window.open(props.appstoreLink, '_blank');
        }}
      >
        <div className='h-10 w-10'>
          <AppStoreIcon />
        </div>
      </button>
    </div>
  );
}

export default StoreLinks;
