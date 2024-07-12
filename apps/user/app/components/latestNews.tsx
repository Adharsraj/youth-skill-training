import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@repo/ui/components/ui/separator';

interface NewsItem {
  picture: string;
  title: string;
  subtitle?: string;
  day: string;
  month: string;
  year: string;
}

interface LatestNewsComponentProps {
  newsList: NewsItem[];
}

const LatestNewsComponent: React.FC<LatestNewsComponentProps> = ({ newsList }) => (
  <div className="mt-8">
    <div className="flex justify-start mb-4">
      <Image
        src="/aboutus/latestortrend.svg"
        alt="Thumbnail"
        width={25}
        height={25}
        className="mr-2"
      />
      <h1 className="text-xl md:text-2xl font-bold text-red-600">Latest News</h1>
    </div>
    <Separator className="my-6" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-md">
      {newsList.map((newsItem, index) => (
        <div key={index} className="border border-whitesmoke rounded-lg overflow-hidden relative">
          <div className="cursor-pointer">
            <Link href={`/newsroom/${encodeURIComponent(newsItem.title)}`}>
              <div className="w-full h-40 md:h-40 lg:h-55 xl:h-60 relative">
                <Image
                  src={newsItem.picture} 
                  alt={newsItem.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <div className="absolute top-0 left-0 bg-primary-blue text-white px-2 py-1 ml-4">
                  <p className="text-xs font-bold">{`${newsItem.day} `}</p>
                  <p className="text-xs font-bold">{` ${newsItem.month}`}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="font-bold text-md md:text-md mb-2">{newsItem.title}</p>
                <p className="text-gray-700 text-xs md:text-xs mb-2">{newsItem.subtitle}</p>
                <div className="flex">
                  <p className="text-gray-500 text-xs text-left">{`${newsItem.day} ${newsItem.month}, ${newsItem.year}`}</p>
                  <span className="ml-2 flex items-right text-primary-blue text-xs">
                    Read more
                    <Image src="/news/arrow.svg" alt="Arrow Icon" width={8} height={8} className="ml-2" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LatestNewsComponent;
