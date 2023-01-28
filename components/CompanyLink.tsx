'use client';

export default function CompanyLink(props: { link: string }) {
  return (
    <p
      className={`cursor-pointer font-bold text-violet-600 transition-all duration-500 hover:underline `}
      onClick={() => window.open(props.link!, '_blank')}
    >
      Link
    </p>
  );
}
