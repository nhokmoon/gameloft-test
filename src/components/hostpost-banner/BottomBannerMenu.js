import React from "react";
import Image from "next/image";
import SteamLogo from "../../../public/images/logo/Steam.png";
import MicrosoftLogo from "../../../public/images/logo/Microsoft.png";
import NitendoLogo from "../../../public/images/logo/Nitendo.png";

const BottomBannerMenu = () => {
  return (
    <div className="bg-blue-200">
      <div className="container mx-auto p-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="text-center md:text-left text-blue-500 md:ml-0 md:mr-4 lg:ml-44">
            Download latest version
          </div>
          <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0 lg:mr-44">
            <Image src={NitendoLogo} alt="Nitendo Logo" width={100} height={40} />
            <Image src={MicrosoftLogo} alt="Microsoft Logo" width={100} height={40} />
            <Image src={SteamLogo} alt="Steam Logo" width={100} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBannerMenu;
