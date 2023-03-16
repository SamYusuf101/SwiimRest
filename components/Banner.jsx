/* eslint-disable */
import React from "react";
import Image from "next/image";
import hoobankImg from "../public/hoobank.png";

function Banner() {
  return (
    <div
      className="relative h-[300px] sm:h-[400px] ld:h-[500px] xl:h-[600px]
    2xl:h-[600px]"
    >
      <Image
        src={hoobankImg}
        alt="/"
        objectFit="cover"
        layout="fill"
        className=""
      />
      <div className="absolute  w-full top-1/2 text-center">
        <p className="text-white text-sm sm:text-lg">
          Not sure where to swim or eat?
        </p>{" "}
        <div className="pt-8">
          <button
            className="text-white bg-gray-400 shadow-md px-4 rounded-full p-2
          font-bold hover:shadow-xl active:scale-90 transition duration-150"
          >
            I'm flexible
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
