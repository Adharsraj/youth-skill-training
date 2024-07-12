import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { newsCardDatas } from '../../../../constants/newsCardDatas';
import ContactForm from '../../../components/contactform';
import { MaxWidthWrapper } from '@repo/ui/components/MaxWidthWrapper';

const NewsDetailsPage = ({ params }) => {
  const newsid = params?.newsid;

  const newsItem = newsCardDatas.find(
    (news) =>
      newsid.replace(/%20/g, " ").toLowerCase() === news.title.toLowerCase()
  );

  if (!newsItem) {
    return <p>No news found with the title {newsid.replace(/%20/g, " ").toLowerCase()}</p>;
  }

  const getRelatedArticles = () => {
    const filteredNews = newsCardDatas.filter(
      (news) => news.title.toLowerCase() !== newsItem.title.toLowerCase()
    );
    const shuffledNews = filteredNews.sort(() => 0.5 - Math.random());
    return shuffledNews.slice(0, 3);
  };

  const relatedArticles = getRelatedArticles();

  const renderPassages = (newsItem) => {
    const passages = [];
    if (newsItem.passageMain) {
      passages.push(
        <p
          key="main"
          className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-700 mt-4"
        >
          {newsItem.passageMain}
        </p>
      );
    }
    let i = 1;
    while (newsItem[`passage${i}`]) {
      passages.push(
        <p
          key={i}
          className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-700 mt-4"
        >
          {newsItem[`passage${i}`]}
        </p>
      );
      i++;
    }
    return passages;
  };

  return (
    <MaxWidthWrapper>
      <div className="container mx-auto p-4">
        <div className="relative md:h-[280px] h-[180px] w-full">
          <Image
            src={newsItem.picture}
            alt="Section Image"
            className="h-full object-cover"
            layout="fill"
          />
        </div>
        <div className="mt-4">
          <span className="text-md font-semibold">{newsItem.category}</span>
          <span className="text-sm ml-10">{newsItem.day} {newsItem.month} {newsItem.year}</span>
        </div>
        <div className="lg:text-4xl md:text-2xl font-bold mb-2">{newsItem.title}</div>
        <span className="text-sm md:text-base lg:text-md text-gray-700 block mb-4">
          {newsItem.subtitle}
        </span>
        {renderPassages(newsItem)}
      </div>

      <div className="mt-8  rounded-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {relatedArticles.map((newsItem, index) => (
            <div key={index} className="cursor-pointer border border-whitesmoke overflow-hidden">
              <Link href={`/newsroom/${encodeURIComponent(newsItem.title)}`}>
                <div className="relative">
                  <Image
                    src={newsItem.picture}
                    alt="News Image"
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="w-full h-[150px] md:h-[125px] xl:h-[225px] object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-primary-blue rounded-md text-white px-3 py-2 ml-4">
                    <p className="font-semibold text-xs text-center">{newsItem.day}</p>
                    <p className="font-semibold text-xs">{newsItem.month}</p>
                  </div>
                </div>
                <div className="mt-2 p-4">
                  <p className="font-bold">{newsItem.title}</p>
                  <p className="text-sm text-gray-700">{newsItem.desc}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm font-bold text-primary-blue">Read more</span>
                    <Image
                      src="/news/arrow.svg"
                      alt="Arrow Image"
                      width={10}
                      height={10}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-6 mb-8">
        <div className="lg:w-2/4">
          <ContactForm />
        </div>
        <div className="p-2 bg-primary-blue w-full lg:w-[500px] lg:h-[330px] h-auto lg:mt-[70px] lg:ml-[90px] text-center rounded-md">
          <p className="font-bold text-md lg:text-xl text-white p-6">OFFICE OF THE CHIEF EXECUTIVE OFFICER</p>
          <div className="mt-2 flex flex-col text-center gap-2 text-xs md:text-sm lg:text-xs text-white ml-4">
            <p >YOUTH EMPLOYABILITY SKILL TRAINING - MSCS Act</p>
            <p className='mt-2'>NATIONAL YOUTH PROGRAMME PROJECT REGIONAL OFFICE AUTONOMOUS INSTITUTION</p>
            <p className="text-yellow-300 mt-2">UNDER THE AEGIS MINISTRY OF CO-OPERATION GOVERNMENT OF INDIA</p>
            <p className="text-yellow-300 mt-2">PROJECT OFFICE : YOUTH EMPLOYABILITY SKILL</p>
            <p className="text-yellow-300 mt-2">TRAINING CO-OPERATIVE EDUCATION SOCIETY</p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default NewsDetailsPage;
