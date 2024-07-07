"use client";
import * as React from "react";
import Image from "next/image";
import { ourSectorDatas } from "../../../../constants/ourSectorDatas";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/components/ui/carousel";

type Sector = {
  img: string;
  title: string;
  desc: string;
  slider: {
    heading: string;
    description: string;
  }[];
  sliderHeading: string;
  s2Img: string;
  s2heading: string;
  s2paragraph: string;
  s3Img: string;
  s4Img: string;
  s4heading: string;
  s4paragraph: string;
};

interface ElectronicsPageProps {
  params: {
    sectorid: string;
  };
}

const ElectronicsPage: React.FC<ElectronicsPageProps> = ({ params }) => {
  const p = params?.sectorid;

  const sector = ourSectorDatas.find(
    (sector) =>
      p.replace(/%20/g, " ").toLowerCase() === sector.title.toLowerCase()
  );

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      sector && prevSlide === sector.slider.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      sector && prevSlide === 0 ? sector.slider.length - 1 : prevSlide - 1
    );
  };

  if (!sector) {
    return (
      <p>No sector found with the title {params.sectorid.replace(/%20/g, " ").toLowerCase()}</p>
    );
  }

  return (
    <div>
      <div className="relative md:h-[280px] h-[180px] w-full">
        <Image
          src={sector.img}
          alt="Section Image"
          className="h-full object-cover"
          layout="fill"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold">
              {sector.title}
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full px-0">
        {/* Section 1 */}
        <section className="my-8 px-0">
          <div className="flex flex-col-reverse md:flex-row items-center h-auto md:h-[300px] justify-center w-full px-0">
            <div className="relative w-full md:w-1/3 h-[200px] md:h-full mb-4 md:mb-0 md:mr-8">
              <Image
                src={sector.s2Img}
                alt="Section Image"
                className="w-full h-full object-cover"
                layout="fill"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="lg:text-3xl text-xl text-center lg:text-left font-bold text-red-600">
                {sector.s2heading}
              </h2>
              <p className="mt-4 md:text-md text-xs lg:text-lg text-center md:text-left">
                {sector.s2paragraph}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="my-8 px-0">
          <div className="flex flex-col md:flex-row items-center h-auto md:h-[380px] bg-primary-blue w-full px-0">
            <div className="relative w-full md:w-1/2 overflow-hidden mb-4 md:mb-0 sm:h-[250px]">
              <Carousel
                opts={{
                  loop: true,
                  align: "start",
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
              >
                <h3 className="lg:text-2xl md:text-xl text-md font-semibold text-white text-center">
                  {sector.sliderHeading}
                </h3>
                <CarouselContent>
                  {sector.slider.map((slide, slideIndex) => (
                    <CarouselItem
                      key={slideIndex}
                      className="flex items-center justify-center h-[200px] md:h-[250px]"
                    >
                      <div className="flex flex-col items-center justify-center px-4 sm:p-6 text-center">
                        <h3 className="lg:text-2xl md:text-lg text-md font-semibold text-white mb-2">
                          {slide.heading}
                        </h3>
                        <p className="text-white md:text-[12px] lg:text-lg text-[7px] w-[160px] lg:w-[450px] md:w-[310px] mx-auto">
                          {slide.description}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-[30px] md:ml-[20px] lg:ml-[80px] px-2 py-1 z-10">
                  <span className="hidden md:block">Previous</span>
                </CarouselPrevious>
                <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-[30px] md:mr-[20px] lg:mr-[80px] px-2 py-1 z-10">
                  <span className="hidden md:block">Next</span>
                </CarouselNext>
              </Carousel>
            </div>
            <div className="relative w-full md:w-1/3 h-[200px] md:h-[280px] ml-0 md:ml-8">
              <Image
                src={sector.s3Img}
                alt="Section Image"
                className="lg:w-full lg:h-full px-8 py-8 object-cover"
                layout="fill"
              />
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col md:flex-row items-center h-auto md:h-[280px] justify-center w-full px-0 my-8">
          <div className="w-full md:w-1/2">
            <h2 className="lg:text-3xl font-bold md:text-xl text-lg text-red-600 lg:text-left text-center">
              {sector.s4heading}
            </h2>
            <p className="mt-4 md:text-md lg:text-lg text-xs text-center lg:text-left">
              {sector.s4paragraph}
            </p>
          </div>
          <div className="relative w-full md:w-1/3 h-[200px] md:h-full ml-0 md:ml-8 mt-4 md:mt-0">
            <Image
              src={sector.s4Img}
              alt="Section Image"
              className="w-full h-full object-cover"
              layout="fill"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ElectronicsPage;
