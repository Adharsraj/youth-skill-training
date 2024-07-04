import React from 'react';
import { MaxWidthWrapper } from "@repo/ui/components/MaxWidthWrapper";
import Image from 'next/image'; 

const GalleryPage: React.FC = () => {
  const images = [
    '/gallery/gal1.svg',
    '/gallery/gal2.svg',
    '/gallery/gal3.svg',
    '/gallery/gal4.svg',
    '/gallery/gal3.svg',
    '/gallery/gal4.svg',
  ];

  return (
    <MaxWidthWrapper>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-4">
          <div className="h-8 mr-2">
            <Image src="/gallery/thumb.svg" alt="Thumbnail" width={32} height={32} />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-0 text-red-600">Free Skill Training</h1>
            <h2 className="text-xl font-bold text-red-600">Gallery</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <Image src={image} alt={`Image ${index + 1}`} width={500} height={500} />
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default GalleryPage;
