"use client"
import React, { useState } from 'react';
import { electronicsPageData } from '../../../constants/innerData';
import Image from 'next/image';

const ElectronicsPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === electronicsPageData[2].slider.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? electronicsPageData[2].slider.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="w-full px-0">
      {electronicsPageData.map((section, index) => (
        <section key={index} className="my-8 px-0">
          {section.section === 1 && (
            <div className="relative md:h-[280px] h-[180px] w-full">
              <Image
                src={section.image}
                alt="Section Image"
                className="h-full object-cover"
                layout="fill"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold">{section.text}</h2>
                </div>
              </div>
            </div>
          )}
          {section.section === 2 && (
            <div className="flex flex-col-reverse md:flex-row items-center h-auto md:h-[300px] justify-center w-full px-0">
              <div className="relative w-full md:w-1/3 h-[200px] md:h-full mb-4 md:mb-0 md:mr-8">
                <Image
                  src={section.image}
                  alt="Section Image"
                  className="w-full h-full object-cover"
                  layout="fill"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="lg:text-3xl text-xl text-center lg:text-left font-bold text-red-600">{section.heading}</h2>
                <p className="mt-4 md:text-md text-xs lg:text-lg text-center md:text-left">{section.paragraph}</p>
              </div>
            </div>
          )}
          {section.section === 3 && (
            <div className="flex flex-col md:flex-row items-center h-auto md:h-[380px] bg-primary-blue w-full px-0">
              <div className="relative w-full md:w-1/2 overflow-hidden mb-4 md:mb-0">
                <div className="relative w-full h-full">
                  <div
                    className="flex transition-transform duration-500"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                  >
                    {section.slider && section.slider.map((slide, slideIndex) => (
                      <div key={slideIndex} className="flex-none w-full flex-shrink-0 px-4 py-2">
                        <h3 className="lg:text-3xl md:text-xl text-md font-semibold text-white text-center">{slide.heading}</h3>
                        <p className="mt-2 text-white md:text-xs lg:text-md text-xs text-center w-[180px] md:w-[300px] mx-auto">{slide.description}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-[30px]  md:ml-[20px] lg:ml-[160px] text-white px-2 py-1 z-10"
                    onClick={prevSlide}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2  mr-[30px]  md:mr-[20px] lg:mr-[160px] text-white px-2 py-1 z-10"
                    onClick={nextSlide}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="relative w-full md:w-1/3 h-[200px] md:h-[280px] ml-0 md:ml-8">
                <Image
                  src={section.image}
                  alt="Section Image"
                  className="lg:w-full lg:h-full w-[300px] h-[300px] object-cover"
                  layout="fill"
                />
              </div>
            </div>
          )}
          {section.section === 4 && (
            <div className="flex flex-col md:flex-row items-center h-auto md:h-[280px] justify-center w-full px-0">
              <div className="w-full md:w-1/2">
                <h2 className="lg:text-3xl font-bold md:text-xl text-lg text-red-600 lg:text-left text-center">{section.heading}</h2>
                <p className="mt-4 md:text-md lg:text-lg text-xs text-center lg:text-left">{section.description}</p>
              </div>
              <div className="relative w-full md:w-1/3 h-[200px] md:h-full ml-0 md:ml-8 mt-4 md:mt-0">
                <Image
                  src={section.image}
                  alt="Section Image"
                  className="w-full h-full object-cover"
                  layout="fill"
                />
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default ElectronicsPage;
