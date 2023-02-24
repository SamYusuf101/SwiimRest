/* eslint-disable */
import React from "react";
import Image from "next/image";

function Card({ img, location, distance }) {
  return (
    <div
      className="flex space-y-4 items-center mt-6 rounded-xl cursor-pointer
    hover:bg-gray-100 hover:scale-105 transition transformation duration-200
    ease-out"
    >
      <div
        className="relative h-16 w-16 
      "
      >
        <Image
          src={img}
          alt="/"
          objectFit="cover"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col pl-3">
        <p>{location}</p>
        <p className="text-gray-500">{distance}</p>
      </div>
    </div>
  );
}

export default Card;
