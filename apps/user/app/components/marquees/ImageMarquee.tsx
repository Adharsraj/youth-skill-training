import Image from "next/image";
import { cn } from "../../../utils/utils";
import Marquee from "./Marquee";

const ReviewCard = ({
  img,
  name,
  username,
  className,
  mainClass,
  body,
}: {
  img?: string;
  name?: string;
  username?: string;
  body?: string;
  className?: string;
  mainClass?: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-52 cursor-pointer overflow-hidden rounded-none py-5",
        mainClass
      )}
    >
      {img && (
        <div className="flex justify-center items-center ">
          <Image
            className={cn("w-40 ", className)}
            width={60}
            height={60}
            alt="logos"
            src={img}
          />
        </div>
      )}
      {name && (
        <div className="flex justify-center items-center ">
          <p className={cn("text-white" , className)}>{name}</p>
        </div>
      )}
    </figure>
  );
};

interface ImageMarqueeProps {
  datas?: {
    name?: string;
    username?: string;
    body?: string;
    img?: string;
  }[];
  className?: string;
  mainClass?: string;
}

export const ImageMarquee = ({
  datas,
  className,
  mainClass,
}: ImageMarqueeProps) => {
  const secondRow = datas?.slice(datas.length / 2);
  return (
    <div className="relative">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow?.map((review) => (
          <ReviewCard
            key={review.username}
            mainClass={mainClass}
            className={className}
            {...review}
          />
        ))}
      </Marquee>
      {datas && datas.some((review) => review.img) && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </>
      )}
    </div>
  );
};
