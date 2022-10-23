import React from "react";
import Image from "next/image";
import hoobankImg from "../public/hoobank.png";

function Banner() {
  return (
    <div className="relative h-[300px]">
      <Image
        src={hoobankImg}
        alt="/"
        objectFit="cover"
        layout="fill"
        className="cursor-pointer"
      />
    </div>
  );
}

export default Banner;
