/* eslint-disable */
import Image from "next/image";
import React from "react";

function Data({ img, title }) {
  return (
    <div
      className="cursor-pointer hover:scale-105  transition transformation duration-300
    ease-out"
    >
      <div className="relative h-80 w-80  ">
        <Image
          src={img}
          alt="/"
          objectFit="cover"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <h2 className="text-2xl mt-3">{title}</h2>
    </div>
  );
}

export default Data;
