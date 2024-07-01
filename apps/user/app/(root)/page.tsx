import { MaxWidthWrapper } from "@repo/ui/components/MaxWidthWrapper";
import { Button } from "@repo/ui/components/ui/button";
import SvgIcon, { IconNames } from "../../icons/SvgIcon";
import { Separator } from "@repo/ui/components/ui/separator";
import { newsCardDatas } from "../../constants/newsCardDatas";
import Image from "next/image";
import React from "react";
import { Card } from "@repo/ui/components/ui/card";
import { aboutUsDatas } from "../../constants/aboutUsDatas";
import { ourSectorDatas } from "../../constants/ourSectorDatas";
import { truncateText } from "../../utils/textUtils";
import MarqueeDemo from "../components/marquees/Demo";
import { ImageMarquee } from "../components/marquees/ImageMarquee";
import { logos, textValues } from "../../constants/marqueeDatas";

export default function Home() {
  return (
    <>
      <div className="bg-primary-blue">
        <div className="bg-primary-orange">

      <ImageMarquee mainClass="py-0 gap-0" className="" datas={textValues}/>
        </div>

        <MaxWidthWrapper className="text-center">
          <div className="font-medium text-white pt-6">
            <p className="text-[12px] font-light md:text-base lg:text-2xl xl:text-3xl">
              युवा रोजगार कौशल प्रशिक्षण
            </p>
            <p className="font-extrabold text-base py-2 md:text-2xl lg:text-3xl xl:text-[40px] xl:py-3 ">
              YOUTH EMPLOYABILITY SKILL TRAINING
            </p>
            <p className="text-[11px] md:text-sm font-light lg:text-lg xl:text-2xl ">
              (An Aided Skill Training Institute Under the Government Project)
            </p>
            <p className="text-[12px] md:text-sm font-light py-2 pb-8 xl:pb-10 lg:text-lg  xl:text-2xl">
              सरकारी परियोजना के तहत एक सहायता प्राप्त कौशल प्रशिक्षण संस्थान
            </p>
            <p className="font-bold text-xxs md:text-xs md:font-light lg:text-base">
              Approved Co-Operation Accreditation And Affiliation Given By
            </p>
            <p className="text-base md:font-bold py-2 xl:py-3 lg:text-lg xl:text-xl">
              MSME TECHNOLOGY DEVELOPMENT CENTRE
            </p>
            <p className="font-normal text-xxs md:font-light md:text-xs lg:text-base">
              Ministry of Micro, Small & Medium Enterprises, Government of India
            </p>
            <p className="text-xxs py-6 md:text-xs md:py-3 xl:py-4 lg:text-sm xl:text-base">Run By</p>
            <p className="font-bold text-base lg:text-lg xl:text-xl">
              National Skill Development Corporation
            </p>
            <p className="font-normal text-xxs md:text-xs md:font-light lg:text-base">(NSDC TP ID :144430)</p>
            <p className="text-xxs py-6 md:text-xs md:font-light md:py-3 lg:text-base xl:py-5">A Government of India Project</p>
            <div className="flex justify-center">
              <span className="text-white text-[10px] md:font-light md:text-sm lg:text-base rounded-lg xl:text-xl p-1.5 xl:p-2.5 xl:mb-14 border bg-transparent mb-6 md:mb-8 inline-flex justify-center items-center">
                Vocational Training for Unemployed Youth
              </span>
            </div>
          </div>
        </MaxWidthWrapper>
       
      </div>
        <ImageMarquee mainClass="w-24 md:w-52" className="md:h-20 h-10" datas={logos}/>
      {/* latest news */}
      <MaxWidthWrapper>
        <div className="flex justify-between items-center mt-6 mb-5">
          <div className="flex pl-3 justify-center items-center gap-2">
            <SvgIcon name="fullCoverage" className="w-5 md:w-6" />
            <span className="font-extrabold text-primary-orange text-[18px]">
              Latest News
            </span>
          </div>
          <Button className="bg-primary-orange h-8 text-[12px]">
            view all
          </Button>
        </div>
        <Separator />
        <div className="grid md:grid-cols-6">

        <div className="grid md:grid-cols-3 md:col-span-4  gap-3 pt-4">
          {newsCardDatas.map((card, index) => (
            <NewsCard card={card} key={index} />
          ))}
        </div>
        <div className="grid gap-4 pt-4 md:md:col-span-2">
          {newsCardDatas.map((card, index) => (
            <NewsCardMini card={card} key={index} />
          ))}
        </div>
        </div>

      </MaxWidthWrapper>
      {/* annual reports */}
      <MaxWidthWrapper className="mt-8 px-0 md:px-0 ">
        <div className="relative">
          <Image
            src="/others/annual report.svg"
            alt="image"
            width={400}
            height={400}
            className="w-full md:h-[170px] object-cover"
          />
          <div className="absolute top-5 left-0 right-0 text-white text-center">
            <p className="font-bold">Annual Reports</p>
            <p className="font-normal text-xs px-2 pt-2 pb-5 max-w-[400px] mx-auto md:font-light">
              Access our comprehensive collection of annual reports to gain
              insights into our financial performance, strategic initiatives,
              and growth over the years
            </p>
            <Button className="bg-primary-orange h-8 text-xs">
              View Reports
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* free skill training */}

      <MaxWidthWrapper>
        <div className="flex justify-between items-center mt-6 mb-5">
          <div className="flex pl-3 justify-center items-center gap-2">
            <SvgIcon name="skillTraining" className="w-5 md:w-6" />
            <span className="font-extrabold text-primary-orange text-[18px]">
              Free Skill Training{" "}
            </span>
          </div>
          <Button className="bg-primary-orange h-8 text-[12px]">
            view all
          </Button>
        </div>
        <Separator />
        <Image
          src="/others/graduationlady.svg"
          alt="image"
          width={400}
          height={400}
          className="mt-5 w-full md:hidden"
        />
         <div className="bg-black text-white text-center hidden md:flex justify-center items-center mt-4 h-[35vh]">
          marquee
        </div>
        <div className="md:relative md:mb-32">
<div className="grid md:grid-cols-2 md:gap-5 md:mt-10  md:relative ">
  <div className="md:order-2">
  <p className="text-xxs uppercase mt-16 md:mt-0 font-medium">About us</p>
        <Separator className="my-4 md:my-2" />

        <p className=" text-primary-orange font-extrabold text-2xl md:text-lg md:w-[80%] md:leading-5">
          Enhancing Employability Through Vocational Skill Development
        </p>

        <p className="text-primary-blue text-xs opacity-70 py-2 md:text-xxs md:leading-4">
          National Youth Programme, Youth employability skill training (A Unit
          Under Government Autonomous Education Institution) Society For
          Development of Technical Vocational Education NEW DELHI.. registered
          under PTU AC 12A Government of India department of labour government
          of nct New Delhi National Youth program on ISO 9001 2008 certified
          institution was established to provide vocational skill development
          training with sole in of improving the the job aspirants with specific
          skill in private and government sector.
        </p>
  </div>

        <Image
          src="/others/rocketMan.svg"
          alt=""
          width={400}
          height={400}
          className="mt-2 w-full md:mt-0 object-cover h-full"
        />
</div>
<div className="bg-primary-orange hidden md:flex absolute -bottom-24 left-16 right-64 justify-around p-2 mb-7 md:max-w-[600px]">
          {aboutUsDatas.map((data, index) => (
            <AboutCard key={index} card={data} />
          ))}
        </div>
        </div>
        
      </MaxWidthWrapper>

      <MaxWidthWrapper className="px-0 mt-7 md:px-0">
        <div className="bg-primary-orange md:hidden flex justify-around p-2 mb-7 md:max-w-[400px]">
          {aboutUsDatas.map((data, index) => (
            <AboutCard key={index} card={data} />
          ))}
        </div>
        <div>
          <div className="relative">
            <Image
              src="/others/ourMission.svg"
              alt=""
              width={400}
              height={400}
              className="mt-2 h-[340px] md:h-[300px] object-cover w-full "
            />

            <div className="absolute  top-0 left-0 right-0 text-center max-w-[500px] mx-auto md:flex md:flex-col md:justify-center md:items-center md:h-full">
              <p className="text-white  text-xxs pt-4 ">
                OUR MISSION
              </p>
              <Separator className="my-4 md:my-2" />
              <p className="text-white text-2xl  px-2  font-extrabold pt-1 md:text-lg">
                Equipping Students with Critical Thinking, Global Perspectives,
                and Core Values for Future Success
              </p>
              <p className="text-xs text-white px-2 font-extralight opacity-70 pt-4">
                We are National Youth program anything to prepare our students
                for a rapidly changing want by equipping them with critical
                thinking skills global perspective and respect for Core values
                of honesty integrity loyalty and compassion developing these
                skills is the cornerstone of the education we offer students
                will have success for today and be prepared for tomorrow.
              </p>
            </div>
          </div>
        </div>

       
      </MaxWidthWrapper>
      <MaxWidthWrapper>
          <div className=" mt-6 mb-5">
            <div className="flex pl-3  items-center gap-2">
              <SvgIcon name="ourAffirmations" className="w-5 md:w-6" />
              <span className="font-extrabold text-primary-orange text-[18px]">
                Our Affilations and Collaboration
              </span>
            </div>
          </div>
          <Separator className="my-4" />
        </MaxWidthWrapper>
      <div className="bg-black text-white text-center flex justify-center items-center h-[15vh]">
        marquee
      </div>

      <MaxWidthWrapper>
        <div className=" mt-6 mb-5">
          <div className="flex pl-3  items-center gap-2">
            <SvgIcon name="ourSectors" className="w-5 md:w-6" />
            <span className="font-extrabold text-primary-orange text-[18px]">
              Our Sectors
            </span>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="bg-black text-white text-center hidden md:flex justify-center items-center h-[15vh]">
        marquee
      </div>
        <div className="flex flex-col gap-4 md:hidden">
          {ourSectorDatas.slice(0, 2).map((sector) => (
            <SectorCards sector={sector} />
          ))}
          <Button className="text-[10px] w-20 mx-auto h-8 bg-primary-orange">
            View all
          </Button>
        </div>
      </MaxWidthWrapper>
      <div className=" mt-6 mb-5">
        <div className="flex pl-3  items-center gap-2">
          <SvgIcon name="contactUs" className="w-5 md:w-6" />
          <span className="font-extrabold text-primary-orange text-[18px]">
            Contact Us
          </span>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="bg-black text-white text-center flex justify-center items-center h-[45vh]">
        contact us form
      </div>
    </>
  );
}

interface SectorProps {
  image: string;
  title: string;
  desc: string;
}

interface SectorCardProps {
  sector: SectorProps;
}
const SectorCards: React.FC<SectorCardProps> = ({ sector }) => (
  <>
    <div className="relative">
      <Image
        src={sector.image}
        alt="sectorImages"
        className=" h-[240px] object-cover w-full"
        width={400}
        height={80}
      />
      <div className="absolute bottom-2 left-3 text-white">
        <p className="font-black">{sector.title}</p>
        <p className="text-xxs pt-1 w-[60%]">{sector.desc}</p>
      </div>
    </div>
  </>
);

interface AboutProps {
  count: number;
  title: string;
  picture: string;
}

interface AboutCardProps {
  card: AboutProps;
}

const AboutCard: React.FC<AboutCardProps> = ({ card }) => (
  <div className="flex flex-col items-center text-center text-white md:p-2">
    <SvgIcon  name={card.picture as IconNames} className="h-14 md:h-7" />
    <span className="md:py-0.5 flex">{card.count}</span>
    <span className="text-xs w-1/2 font-bold  md:w-full md:text-xxs">{card.title}</span>
  </div>
);

interface CardProps {
  picture: string;
  title: string;
  desc: string;
  day: string;
  month: string;
}

interface NewsCardProps {
  card: CardProps;
}

const NewsCard: React.FC<NewsCardProps> = ({ card }) => (
  <Card className="border-none relative">
    <Image src={card.picture} width={361} height={197} alt="newscards" />
    <div className="px-2 md:px-0">
      <p className="font-bold leading-5 pt-4 md:text-xxs md:pt-2">{card.title}</p>
      <p className="font-medium text-xs pt-3 md:text-xxs">{truncateText(card.desc,15)} </p>
      <div className="flex  items-center gap-2 pt-8 pb-4 md:pt-2">
        <span className="text-primary-blue font-bold text-xs md:text-xxs ">Read more</span>
        <SvgIcon name="arrowTopRight" className="w-2"/>
      </div>
      <div className="absolute top-0 left-4 md:left-2 bg-primary-blue text-white rounded-b-sm">
        <div className="w-14 md:w-6 flex flex-col justify-center items-center font-bold leading-5 py-2 md:py-1 ">
          <span className="md:text-xxs">{card.day}</span>
          <span className="md:text-xxs">{card.month}</span>
        </div>
      </div>
    </div>
  </Card>
);

const NewsCardMini: React.FC<NewsCardProps> = ({ card }) => (
  <Card className="border-none  flex px-2 py-4 md:py-0 md:px-0">
    <Image
      src={card.picture}
      width={80}
      height={30}
      alt="newscards"
      className="relative h-full object-cover px-2 md:h-14"
    />
    <div className="">
      <p className="font-bold leading-5 text-sm md:text-xxs ">{card.title}</p>
      {/* <p className="font-medium text-xs ">{card.desc} </p> */}
      <div className="flex  items-center gap-2 pt-2">
        <span className="text-primary-blue font-bold text-xs md:text-xxs ">Read more</span>
        <SvgIcon name="arrowTopRight" className="w-2"/>
      </div>
    </div>
  </Card>
);
