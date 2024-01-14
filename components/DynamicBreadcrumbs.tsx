import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

const DynamicBreadcrumbs = () => {
  const path = usePathname();
  const pathSegments = path.split('/').filter((path) => path);

  if (pathSegments.length < 2) {
    return null;
  }

  return (
    <Breadcrumbs variant='solid' underline='focus'>
      {pathSegments.map((segment, index) => {
        const breadcrumbPath = `/${pathSegments.slice(0, index + 1).join('/')}`;

        return (
          <BreadcrumbItem href={breadcrumbPath} key={breadcrumbPath}>
            {segment}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};

export default DynamicBreadcrumbs;
