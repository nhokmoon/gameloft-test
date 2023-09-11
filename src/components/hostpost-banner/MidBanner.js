"use client";

import Image1 from "../../../public/images/banner/Image1.png";

import Image from "next/image";

import { useEffect } from "react";

const MidBanner = () => {
  return (
    <div className="right-0 left-0 bg-blue-500 lg:mt-15 flex flex-col items-center">
      <Image src={Image1} alt="Banner Image" width={200} height={200} className="mt-32 md:mt-64" />
      <div className="text-left -ml-8 mr-10 md:ml-12 lg:ml-40 md:mr-12 lg:mr-96 mb-11">
        <h1 className="text-4xl font-semibold md:text-2xl lg:text-xl mt-52 md:mt-24 lg:mt-32">
          Gameloft Game
        </h1>
        <p>Racing Action</p>

        <div className="flex mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0l2.276 6.822h7.318a.5.5 0 01.39.808L15.25 12l2.634 5.372a.5.5 0 01-.39.808H12.725L10 20l-2.726-1.82H.884a.5.5 0 01-.39-.808L3.75 12 .116 6.628a.5.5 0 01.39-.808H3.67L6.396 0h3.208z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0l2.276 6.822h7.318a.5.5 0 01.39.808L15.25 12l2.634 5.372a.5.5 0 01-.39.808H12.725L10 20l-2.726-1.82H.884a.5.5 0 01-.39-.808L3.75 12 .116 6.628a.5.5 0 01.39-.808H3.67L6.396 0h3.208z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0l2.276 6.822h7.318a.5.5 0 01.39.808L15.25 12l2.634 5.372a.5.5 0 01-.39.808H12.725L10 20l-2.726-1.82H.884a.5.5 0 01-.39-.808L3.75 12 .116 6.628a.5.5 0 01.39-.808H3.67L6.396 0h3.208z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0l2.276 6.822h7.318a.5.5 0 01.39.808L15.25 12l2.634 5.372a.5.5 0 01-.39.808H12.725L10 20l-2.726-1.82H.884a.5.5 0 01-.39-.808L3.75 12 .116 6.628a.5.5 0 01.39-.808H3.67L6.396 0h3.208z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0l2.276 6.822h7.318a.5.5 0 01.39.808L15.25 12l2.634 5.372a.5.5 0 01-.39.808H12.725L10 20l-2.726-1.82H.884a.5.5 0 01-.39-.808L3.75 12 .116 6.628a.5.5 0 01.39-.808H3.67L6.396 0h3.208z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="mt-4 md:max-w-lg lg:max-w-xl">
          <span className="hidden md:inline">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </span>
        </p>
      </div>
    </div>
  );
};

export default MidBanner;
