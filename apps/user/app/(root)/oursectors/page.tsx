import { MaxWidthWrapper } from "@repo/ui/components/MaxWidthWrapper";
import React from "react";
import SvgIcon from "../../../icons/SvgIcon";
import { Separator } from "@repo/ui/components/ui/separator";
import { sectorsPageDatas } from "../../../constants/marqueeDatas";
import Image from "next/image";
import Link from "next/link";

interface Sector {
  img: string;
  title: string;
  desc: string;
}

interface SectorCardProps {
  sector: Sector;
}

const SectorCard: React.FC<SectorCardProps> = ({ sector }) => {
  return (
    <Link href={`/oursectors/${sector.title}`}>
    <div className="bg-black">
      <div className="flex justify-center items-center relative">
        <Image
          className="w-full h-[250px] md:w-[215px] xl:w-[415px] xl:h-[355px] md:h-[200px] object-cover"
          width={500}
          height={500}
          alt="logos"
          src={sector.img}
        />
        <div className="absolute text-white bottom-5 left-3">
          <p className="font-bold text-sm xl:text-xl pb-2">{sector.title}</p>
          <p className="text-xxs xl:text-xs">{sector.desc}</p>
        </div>
      </div>
    </div>
    </Link>

  );
};

const OurSectors = () => {
  return (
    <MaxWidthWrapper>
      <div className=" mt-6 mb-5 xl:mt-14">
        <div className="flex pl-3  items-center gap-2">
          <SvgIcon name="ourSectors" className="w-5 md:w-6 lg:w-8 xl:w-10" />
          <span className="font-extrabold text-primary-orange text-[18px] lg:text-xl xl:text-[28px]">
            Our Sectors
          </span>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col md:flex-row md:flex-wrap md:mx-auto md:justify-center gap-4 xl:gap-5 xl:pb-12 pb-4 xl:mt-20">
        {sectorsPageDatas.map((sector, index) => (
          <SectorCard key={index} sector={sector} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default OurSectors;
