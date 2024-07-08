// pages/news.js
import React from 'react';
import Image from 'next/image';
import { newsCardDatas } from '../../../../constants/newsCardDatas';
import { MaxWidthWrapper } from '@repo/ui/components/MaxWidthWrapper';

const NewsPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="container mx-auto p-4">
        {newsCardDatas.map((news, index) => (
          <div key={index} className="mb-8">
            <div className="text-center mb-4">
              <span className="text-xs font-semibold">{news.lat}</span>
              <span className="text-xs mx-2">{news.day}</span>
              <span className="text-xs">{news.month}</span>
              <span className="text-xs mx-2">{news.year}</span>
            </div>
            <div className="text-center text-[48px] font-bold mb-2">{news.title}</div>
            <div className="flex justify-center text-[16px] mb-4 w-full">
              <div className="max-w-[900px] text-center">
                {news.subtitle}
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <Image src={news.picture} alt="News Image" className='w-full h-auto' />
            </div>
            <div className="text-left text-xl font-semibold mb-2">{news.heading}</div>
            <div className="text-justify text-md leading-relaxed mb-4">
              {news.newsdesc}
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default NewsPage;
