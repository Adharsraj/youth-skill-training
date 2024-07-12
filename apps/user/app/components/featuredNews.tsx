import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import arrowIcon from '../../public/news/arrow.svg';

interface NewsItem {
  picture: string;
  title: string;
  subtitle?: string;
  day: string;
  month: string;
  year: string;
}

interface FeaturedNewsComponentProps {
  featuredNews: NewsItem;
  newsList: NewsItem[];
}

const FeaturedNewsComponent: React.FC<FeaturedNewsComponentProps> = ({ featuredNews, newsList }) => (
  <div className="flex flex-wrap w-full mb-8">
    <div className="w-full lg:w-2/3 lg:pr-8 mb-8 lg:mb-0 relative">
      <div className="rounded-lg overflow-hidden shadow-lg lg:h-[390px] h-[200px] md:h-[350px] lg:h-[325px] xl:h-[480px]">
        <Image
          src={featuredNews.picture}
          alt={featuredNews.title}
          width={850}
          height={600}
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 bg-white p-4 w-[180px] md:w-[330px] mt-[20px] md:mt-[80px] lg:mt-[60px] xl:mt-[120px] rounded-md">
          <p className="font-bold text-xs md:text-xl mb-2">{featuredNews.title}</p>
          <p className="text-gray-700 md:text-sm lg:text-md text-[8px] mb-2">{featuredNews.subtitle}</p>
          <div className="flex items-center">
            <p className="text-gray-500 md:text-sm text-xxs">{`${featuredNews.day} ${featuredNews.month}, ${featuredNews.year}`}</p>
            <Link href={`/newsroom/${encodeURIComponent(featuredNews.title)}`}>
              <div className="ml-2 flex items-center text-primary-blue md:text-sm text-xxs">
                Read more
                <Image src={arrowIcon} alt="Arrow Icon" width={10} height={10} className="ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/3 lg:pl-2">
      {newsList.map((newsItem) => (
        <Link key={`${newsItem.day}-${newsItem.month}-${newsItem.year}-${newsItem.title}`} href={`/newsroom/${encodeURIComponent(newsItem.title)}`}>
          <div className=" flex block mb-4 border border-shadow bg-whitesmoke-100 rounded-lg overflow-hidden">
            <div className="relative flex-none lg:w-[150px] lg:h-[80px] xl:h-[150px] h-[100px] w-[150px] mx-auto">
              <Image
                src={newsItem.picture}
                alt={newsItem.title}
                width={150}
                height={150}
                objectFit="cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-primary-blue text-white p-1">
                <p className="md:text-xs text-[7px] font-bold text-center">{`${newsItem.day} `}</p>
                <p className="md:text-xs text-[7px] font-bold">{` ${newsItem.month}`}</p>
              </div>
            </div>
            <div className="flex flex-col w-full p-4">
              <p className="font-bold text-xxs md:text-md lg:text-md xl:text-lg">{newsItem.title}</p>
              <div className="flex items-center text-primary-blue md:text-md text-xxs lg:text-[14px] mt-auto">
                Read more
                <Image src={arrowIcon} alt="Arrow Icon" width={10} height={10} className="ml-2" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default FeaturedNewsComponent;
