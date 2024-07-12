import React from 'react';
import Image from 'next/image';
import FeaturedNewsComponent from '../../components/featuredNews';
import LatestNewsComponent from '../../components/latestNews';
import { Separator } from '@repo/ui/components/ui/separator';
import TrendingNewsComponent from '../../components/trendingNews';
import ContactForm from '../../components/contactform';
import { MaxWidthWrapper } from '@repo/ui/components/MaxWidthWrapper';
import { newsCardDatas } from '../../../constants/newsCardDatas';

const getRandomIndex = (length: number) => Math.floor(Math.random() * length);

const parseMonth = (month: string): number => new Date(`${month} 1, 2000`).getMonth();

const NewsPage: React.FC = () => {
  const featuredNewsIndex = getRandomIndex(newsCardDatas.length);
  const featuredNews = newsCardDatas[featuredNewsIndex];
  const featuredNewsList = newsCardDatas.slice(0, 3);
  const latestNewsList = newsCardDatas
    .slice()
    .sort((a, b) => new Date(
      Number(b.year),
      parseMonth(b.month),
      Number(b.day)
    ).getTime() - new Date(
      Number(a.year),
      parseMonth(a.month),
      Number(a.day)
    ).getTime())
    .slice(0, 3);
  const trendingNewsList = newsCardDatas.slice(2, 6);

  return (
    <MaxWidthWrapper>
      <div className="mb-8">
        <div className="flex justify-start items-center mb-4">
          <Image
            src="/aboutus/latestortrend.svg"
            alt="Thumbnail"
            width={25}
            height={25}
            className="mr-2"
          />
          <h1 className="md:text-2xl text-lg font-bold text-red-600">Featured News</h1>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-wrap justify-center">
          {featuredNews && <FeaturedNewsComponent featuredNews={featuredNews} newsList={featuredNewsList} />}
        </div>
      </div>
      <LatestNewsComponent newsList={latestNewsList} />
      <div className="mt-8">
        <div className="flex justify-start mb-4">
          <Image
            src="/aboutus/latestortrend.svg"
            alt="Thumbnail"
            width={25}
            height={25}
            className="mr-2"
          />
          <h1 className="md:text-2xl text-lg font-bold text-red-600">Trending News</h1>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-wrap justify-center">
          <TrendingNewsComponent trendingNews={trendingNewsList} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mt-6 mb-8">
        <div className="lg:w-2/4">
          <ContactForm />
        </div>
        <div className="p-2 bg-primary-blue w-full lg:w-[500px] lg:h-[330px] h-auto lg:mt-[70px] lg:ml-[90px] text-center rounded-md">
          <p className="font-bold text-md lg:text-xl text-white p-6">OFFICE OF THE CHIEF EXECUTIVE OFFICER</p>
          <div className="mt-2 flex flex-col text-center gap-2 text-xs md:text-sm lg:text-xs text-white ml-4">
            <p>YOUTH EMPLOYABILITY SKILL TRAINING - MSCS Act</p>
            <p className="mt-2">NATIONAL YOUTH PROGRAMME PROJECT REGIONAL OFFICE AUTONOMOUS INSTITUTION</p>
            <p className="text-yellow-300 mt-2">UNDER THE AEGIS MINISTRY OF CO-OPERATION GOVERNMENT OF INDIA</p>
            <p className="text-yellow-300 mt-2">PROJECT OFFICE : YOUTH EMPLOYABILITY SKILL</p>
            <p className="text-yellow-300 mt-2">TRAINING CO-OPERATIVE EDUCATION SOCIETY</p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default NewsPage;
