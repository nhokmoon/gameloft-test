import React from "react";
import Image from "next/image";
import imageDecorate from "../../../../public/images/Decorate.png";

const RegistrationForm = () => {
  return (
    <div className="bg-white">
      <div className="ml-4 md:ml-44 mr-4 md:mr-44 mt-4 md:mt-44 flex flex-col md:flex-row mb-4 md:mb-44">
        <div className="w-341 h-476 md:block hidden mt-44 ml-32">
          <Image src={imageDecorate} alt="Left Side Image" layout="responsive" />
        </div>

        <div className="ml-4 md:ml-44 mr-4 md:mr-44 mt-4 md:mt-44 flex flex-col md:flex-row mb-4 md:mb-44">
          <div style={{ width: "251px" }} className="md:w-1/2 p-4 ml-4 md:ml-20">
            <h1 className="text-lg font-bold text-blue-500">Stay in the Snow</h1>
            <p className="text-sm text-blue-500">Don't get left behind!</p>
            <p className="text-sm text-blue-500">Subscribe to our newsletters today!</p>

            <form className="h-full">
              <div className="mb-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-2 py-1 rounded-md text-xs border text-blue-500 border-blue-300 focus:ring focus:ring-blue-300 placeholder-blue-500"
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-2 py-1 rounded-md text-xs border text-blue-500 border-blue-300 focus:ring focus:ring-blue-300 placeholder-blue-500"
                />
              </div>

              <div className="mb-2">
                <select
                  id="country"
                  name="country"
                  className="w-full px-2 py-1 rounded-md text-xs border border-blue-300 focus:ring focus:ring-blue-300 text-blue-500"
                >
                  <option value="country">Country</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                </select>
              </div>

              <div className="mb-2">
                <select
                  id="platform"
                  name="platform"
                  className="w-full px-2 py-1 rounded-md text-xs border border-blue-300 focus:ring focus:ring-blue-300 text-blue-500"
                >
                  <option value="platform">Platform</option>
                  <option value="pc">PC</option>
                  <option value="console">Console</option>
                </select>
              </div>

              <div className="mb-1">
                <label className="block text-xs text-blue-500">
                  <input type="checkbox" name="subscribeNews" value="yes" className="mr-1" />
                  Subscribe to Newsletters
                </label>
              </div>

              <div className="mb-1">
                <label className="block text-xs text-blue-500">
                  <input type="checkbox" name="agreeTerms" value="yes" className="mr-1" />I agree to
                  the Terms and Conditions
                </label>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-auto px-2 py-1 text-blue-500 border border-blue-500 rounded-md text-xs hover:bg-blue-500 hover:text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
