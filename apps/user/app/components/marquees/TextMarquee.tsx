import React from "react";
import { cn } from "../../../utils/utils";

interface IProps {
  className?: string;
}

export const TextMarquee: React.FC<IProps> = ({ className }) => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div
        className={cn("py-12 animate-marqueeText whitespace-nowrap", className)}
      >
        <span className="text-4xl mx-4">Marquee Item 1</span>
        <span className="text-4xl mx-4">Marquee Item 2</span>
        <span className="text-4xl mx-4">
          Marquee Item 3 Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur odit aliquam in sunt fuga, eum, reprehenderit
          dolores quas iste unde, mollitia sequi magnam vero. Minima voluptatum
          fuga laudantium doloribus asperiores?
        </span>
        <span className="text-4xl mx-4">Marquee Item 4</span>
        <span className="text-4xl mx-4">Marquee Item 5</span>
      </div>

      <div className="absolute top-0 py-12 animate-marquee2Text whitespace-nowrap">
        <span className="text-4xl mx-4">Marquee Item 1</span>
        <span className="text-4xl mx-4">Marquee Item 2</span>
        <span className="text-4xl mx-4">
          Marquee Item 3 Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur odit aliquam in sunt fuga, eum, reprehenderit
          dolores quas iste unde, mollitia sequi magnam vero. Minima voluptatum
          fuga laudantium doloribus asperiores?
        </span>{" "}
        <span className="text-4xl mx-4">Marquee Item 4</span>
        <span className="text-4xl mx-4">Marquee Item 5</span>
      </div>
    </div>
  );
};