import React from "react";
import Image from "next/image";
import ShareImage from "../../../public/icon/Sharing.png";

const CardSliderActive = ({ promotion }) => {
  return (
    <>
      <h2>{promotion.title}</h2>
      <p>{promotion.description}</p>
      <button className="absolute text-[1rem] bottom-8 right-2 left-2 border border-white">
        READ MORE
      </button>
      <button className="absolute top-[10%] left-[90%]">
        <Image src={ShareImage} alt="Share icon" width={15} />
      </button>
    </>
  );
};

export default CardSliderActive;
