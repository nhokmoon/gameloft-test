import React from "react";
import GameLoftLogo from "../../../public/images/logo/Gameloft_Logo_Flat_W.png";
import Image from "next/image";

const TopStickyMenu = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-blue-200 z-50">
      <Image src={GameLoftLogo} alt="Gameloft Logo" className="w-20 h-10 mx-4 my-2" />
      {/* Add your hamburger icon here */}
    </div>
  );
};

export default TopStickyMenu;
