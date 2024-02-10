export const ExperienceBulletPoints = ({ bulletPoints }: { bulletPoints: string[] }) => {
  // process the bullet points to remove new lines and empty strings
  const newBulletPoints = bulletPoints.map((point) => point.replace(/\n/g, '').trim());

  return (
    <ul className='mt-4 text-md leading-6 text-gray-700'>
      {newBulletPoints.map((point, index) => (
        <li key={index} className='font- my-2 list-inside list-disc font-mono'>
          {point}
        </li>
      ))}
    </ul>
  );
};
