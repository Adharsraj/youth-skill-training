import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="w-full">
      <div className="relative md:h-[280px] h-[180px] w-full">
        <Image
          src={'/aboutus/main.svg'}
          alt="Section Image"
          className="h-full object-cover"
          layout="fill"
        />
        <div className="absolute inset-0 flex text-white">
          <div className="text-left md:w-[500px] mt-8 ml-6">
            <h2 className="lg:text-4xl md:text-3xl text-xl font-bold">
              YOUTH EMPLOYABILITY PROGRAMME
            </h2>
            <p className="mt-4 text-xxs md:text-base">
              Nurturing critical thinking, global perspectives, and core values to empower youth for future success in a rapidly evolving world.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start mt-8 px-4">
        <div className="relative md:w-1/2 w-full md:h-[280px] h-[180px]">
          <Image
            src={'/aboutus/about.svg'}
            alt="Left Section Image"
            className="object-cover"
            layout="fill"
          />
        </div>
        <div className="md:w-1/2 w-full mt-2 md:mt-0 md:ml-6">
          <p className="text-xs md:text-md lg:text-lg text-center md:text-left">ABOUT US</p>
          <h2 className="lg:text-3xl md:text-xl text-xl font-bold text-red-600 text-center md:text-left">
            Enhancing Employability Through Vocational Skill Development
          </h2>
          <p className="mt-4 text-xs lg:text-sm xl:text-lg md:text-xs text-center md:text-left">
            National Youth Programme, Youth employability skill training (A Unit Under Government Autonomous Education Institution) Society For Development of Technical Vocational Education NEW DELHI.. registered under PTU AC 12A Government of India department of labour government of nct New Delhi National Youth program on ISO 9001 2008 certified institution was established to provide vocational skill development training with sole in of improving the the job aspirants with specific skill in private and government sector.
          </p>
        </div>
      </div>
      <div className="mt-8 bg-primary-blue w-full h-auto py-8">
        <div className="flex justify-center gap-x-4 md:gap-x-20">
          <div className="flex flex-col items-center text-center  md:mt-[-10px]">
            <Image
              src={'/aboutus/school.svg'}
              alt="Icon 1"
              width={40}
              height={40}
              className="w-8 h-8 md:w-12 md:h-12"
            />
            <p className="mt-2 text-white text-xxs md:text-sm">355</p>
            <p className="text-white text-xxs md:text-xs">Training Centers</p>
          </div>
          <div className="flex flex-col items-center text-center ">
            <Image
              src={'/aboutus/studentcap.svg'}
              alt="Icon 2"
              width={30}
              height={30}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <p className="mt-2 text-white text-xxs md:text-sm">19,708</p>
            <p className="text-white text-xxs md:text-xs">Enrolled Candidates</p>
          </div>
          <div className="flex flex-col items-center text-center md:mt-2 mt-2 lg:mt-2">
            <Image
              src={'/aboutus/medel.svg'}
              alt="Icon 3"
              width={25}
              height={25}
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <p className="mt-2 text-white text-xxs md:text-sm">14,555</p>
            <p className="text-white text-xxs md:text-xs">Certified Candidates</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start mt-2 px-4">
        <div className="md:w-1/2 w-full mt-4 md:mt-0 md:ml-6">
          <p className="text-xs md:text-md lg:text-lg text-center md:text-left">OUR MISSION</p>
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-red-600 text-center md:text-left">
            Equipping Students with Critical Thinking, Global Perspectives, and Core Values for Future Success
          </h2>
          <p className="mt-4 text-xs md:text-md lg:text-lg text-center md:text-left">
            We are National Youth program anything to prepare our students for a rapidly changing want by equipping them with critical thinking skills global perspective and respect for Core values of honesty integrity loyalty and compassion developing these skills is the cornerstone of the education we offer students will have success for today and be prepared for tomorrow.
          </p>
        </div>
        <div className="relative md:w-1/2 w-full md:h-[280px] h-[180px]">
          <Image
            src={'/aboutus/mission.svg'}
            alt="Mission Section Image"
            className="object-cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
