"use client";
import React from "react";
import ExclusiveSlider from "./ExclusiveSlider";

const promotions = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcsZuhNg&s",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcsZuhNg&s",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcsuhNg&s",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZsuhNg&s",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcsZuhNg&s",
  },
];

const ExclusiveContentComponent = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden text-left text-[2.19rem] text-white font-inter bg-white">
      <b className="absolute w-[90%] top-[5%] left-[5%] md:right-[10%] md:left-[10%] text-2xl md:text-3xl text-dodgerblue">
        EXCLUSIVE GAME CONTENT
      </b>
      <div className="absolute w-[80%] top-[25%] left-[5%] bottom-1 md:right-[10%] md:left-[10%] md:top-[15%] text-sm md:text-base text-[1rem] text-dodgerblue">
        <div className="absolute w-full top-0 left-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.
        </div>
      </div>
      <ExclusiveSlider promotions={promotions} />
    </div>
  );
};

export default ExclusiveContentComponent;
