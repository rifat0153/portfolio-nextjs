'use client';

import GooglePlayIcon from '@/components/icons/GooglePlayIcon';
import AppStoreIcon from '@/components/icons/AppStoreIcon';
import GithubIcon from './icons/GithubIcon';

function StoreLinks(props: { playstoreLink?: string; appstoreLink?: string; githubLink?: string }) {
  return (
    <div className='flex justify-center gap-8'>
      {props.githubLink}
      {
        // If playstoreLink is not provided, don't render the button
        props.playstoreLink && (
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
        )
      }

      {
        // If appstoreLink is not provided, don't render the button

        props.appstoreLink && (
          <button
            onClick={() => {
              window.open(props.appstoreLink, '_blank');
            }}
          >
            <div className='h-10 w-10'>
              <AppStoreIcon />
            </div>
          </button>
        )
      }

      {
        // If githubLink is not provided, don't render the button
        props.githubLink && (
          <button
            onClick={() => {
              window.open(props.githubLink, '_blank');
            }}
          >
            <div className='h-10 w-10'>
              <GithubIcon />
            </div>
          </button>
        )
      }
    </div>
  );
}

export default StoreLinks;
