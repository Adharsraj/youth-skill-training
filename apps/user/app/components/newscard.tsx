import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <Link href={`/news/${news.title.replace(/\s+/g, "-").toLowerCase()}`}>
      <div className="bg-white cursor-pointer shadow-md rounded-lg overflow-hidden">
        <Image
          className="w-full h-[200px] object-cover"
          width={500}
          height={500}
          alt="News Image"
          src={news.picture}
        />
        <div className="p-4">
          <div className="text-gray-600 text-sm mb-2">
            {news.day} {news.month}
          </div>
          <h3 className="font-bold text-lg mb-2">{news.title}</h3>
          <p className="text-sm text-gray-700">{news.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
