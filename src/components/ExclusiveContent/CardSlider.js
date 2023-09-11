import Image from "next/image";
import React from "react";
import DownloadIcon from "../../../public/icon/Download.png";

const CardSlider = ({ promotion }) => {
  return (
    <>
      <Image
        src={promotion.image}
        alt=""
        width={100}
        height={50}
        className="absolute w-[200px] h-[150px]"
      />
      <button className="absolute top-[10%] left-[90%]">
        <Image src={DownloadIcon} alt="Share icon" width={15} />
      </button>
    </>
  );
};

export default CardSlider;
