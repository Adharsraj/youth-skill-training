import { cn } from "../lib/utils";
import { ReactNode } from "react";


export const MaxWidthWrapper: React.FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "font-montserrat font-normal px-2 max-w-[1400px] 3xl:max-w-[1920px] xl:px-[3vw]   mx-auto lg:px-[10vw] md:px-[5vw]",
        className
      )}
    >
      {children}
    </div>
  );
};

interface IProps {
  children: ReactNode;
  className?: string;
}
