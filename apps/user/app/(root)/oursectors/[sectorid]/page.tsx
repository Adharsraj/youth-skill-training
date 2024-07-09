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
      <p>
        No sector found with the title{" "}
        {params.sectorid.replace(/%20/g, " ").toLowerCase()}
      </p>
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
        <section className="my-8 px-0 bg-primary-blue max-w-[1920px] mx-auto">
          <div className="md:flex w-full md:justify-center md:items-center">
            <div className="md:w-2/5">
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
                <h3 className="text-lg font-bold text-white text-center mt-4">
                  {sector.sliderHeading}
                </h3>
                <CarouselContent>
                  {sector.slider.map((slide, slideIndex) => (
                    <CarouselItem
                      key={slideIndex}
                      className="flex items-center justify-center"
                    >
                      <div className="text-center w-[180px] flex flex-col gap-2 pt-6">
                        <h3 className="leading-5 text-white font-bold text-sm">
                          {slide.heading}
                        </h3>
                        <p className="text-white text-xxs leading-4">
                          {slide.description}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10">
                  <span className="hidden md:block">Previous</span>
                </CarouselPrevious>
                <CarouselNext className="absolute top-1/2 right-3 transform -translate-y-1/2 z-10">
                  <span className="hidden md:block">Next</span>
                </CarouselNext>
              </Carousel>
            </div>
            <div className=" flex items-center justify-center pb-4 md:pb-0 w-full">
              <Image
                src={sector.s3Img}
                alt="Section Image"
                className="h-[205px] w-full object-cover px-2 md:py-2 md:px-4 md:h-[230px] lg:h-[450px] lg:py-5 lg:px-5"
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
