import React, { FC } from 'react';
import { Script } from 'gatsby';

export const GatsbySharedScripts: FC = () => {
  return (
    <Script type='application/ld+json'>{`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://www.spookytech.com",
      "name": "Spooky technologies",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+5-601-785-8543",
        "contactType": "Customer Support"
      }
    }
  `}</Script>
  );
};
