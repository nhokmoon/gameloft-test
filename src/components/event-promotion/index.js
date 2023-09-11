"use client";
import React from "react";

import Slider from "../slider";

const promotions = [
  {
    title: "Promotion 1",
    description: "This is the first promotion.",
    image: "/promotion1.jpg",
  },
  {
    title: "Promotion 2",
    description: "This is the second promotion.",
    image: "/promotion2.jpg",
  },
  {
    title: "Promotion 3",
    description: "This is the third promotion.",
    image: "/promotion3.jpg",
  },
  {
    title: "Promotion 4",
    description: "This is the four promotion.",
    image: "/promotion3.jpg",
  },
  {
    title: "Promotion 5",
    description: "This is the five promotion.",
    image: "/promotion3.jpg",
  },
];

const EventPromotionComponent = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden text-left text-[2.19rem] text-white font-inter bg-blue-300">
      <b className="absolute w-[90%] top-[5%] left-[5%] md:right-[10%] md:left-[10%] text-2xl md:text-3xl text-dodgerblue">
        SPECIAL EVENTS & PROMOTIONAL
      </b>
      <div className="absolute w-[80%] top-[25%] left-[5%] bottom-1 md:right-[10%] md:left-[10%] md:top-[15%] text-sm md:text-base text-[1rem] text-dodgerblue">
        <div className="absolute w-full top-0 left-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.
        </div>
      </div>

      <Slider promotions={promotions} />
    </div>
  );
};

export default EventPromotionComponent;
