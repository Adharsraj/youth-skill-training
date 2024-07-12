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
  title,
  desc,
}: {
  img?: string;
  name?: string;
  username?: string;
  body?: string;
  className?: string;
  mainClass?: string;
  title?:string;
  desc?:string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-52 cursor-pointer overflow-hidden rounded-none py-5",
        mainClass
      )}
    >
      {img && (
        <div className="flex justify-center items-center relative">
          <Image
            className={cn("w-40 ", className)}
            width={60}
            height={60}
            alt="logos"
            src={img}
          />
          {title && desc && (
            <div className="absolute text-white bottom-5 left-3">
              <p className="font-bold text-xl pb-2">{title}</p>
              <p className="text-xxs">{desc}</p>

            </div>
          )}
        </div>
      )}
    </figure>
  );
};

interface ImageMarqueeProps {
  datas: {
    name?: string;
    username?: string;
    body?: string;
    img?: string;
    title?:string;
    desc?:string;
  }[];
  className?: string;
  mainClass?: string;
  reverse?:boolean;
}

export const ImageMarquee = ({
  datas,
  className,
  mainClass,
  reverse
}: ImageMarqueeProps) => {
  const secondRow = datas.slice(datas.length / 2);
  return (
    <div className="relative">
      <Marquee reverse={reverse?reverse:false} pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard
            key={review.username}
            mainClass={mainClass}
            className={className}
            {...review}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};
