import React from "react";
import SvgIcon from "../../../icons/SvgIcon";
import { Separator } from "@repo/ui/components/ui/separator";
import { newsCardDatas } from "../../../constants/newsCardDatas";
import Image from "next/image";
import Link from "next/link";
import { MaxWidthWrapper } from "@repo/ui/components/MaxWidthWrapper";

interface News {
  day: string;
  month: string;
  title: string;
  desc: string;
  picture: string;
}

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Link href={`/newsroom/${encodeURIComponent(news.title)}`}>
      <div className="bg-black cursor-pointer">
        <div className="flex justify-center items-center relative">
          <Image
            className="w-full h-[250px] md:w-[215px] xl:w-[415px] xl:h-[355px] md:h-[200px] object-cover"
            width={500}
            height={500}
            alt="News Image"
            src={news.picture}
          />
          <div className="absolute text-white bottom-5 left-3">
            <p className="font-bold text-sm xl:text-xl pb-2">{news.title}</p>
            <p className="text-xxs xl:text-xs">{news.desc}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const NewsPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="mt-6 mb-5 xl:mt-14">
        <div className="flex pl-3 items-center gap-2">
          <SvgIcon name="newsIcon" className="w-5 md:w-6 lg:w-8 xl:w-10" />
          <span className="font-extrabold text-primary-orange text-[18px] lg:text-xl xl:text-[28px]">
            Latest News
          </span>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5 xl:pb-12 pb-4 xl:mt-20">
        {newsCardDatas.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default NewsPage;
