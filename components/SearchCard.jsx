import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

function SearchCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex ">
      <div
        className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0
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
      <div className="flex flex-col flex-grow pl-5">
        <diV className="flex items-center justify-between ">
          <p>{location}</p>
          <AiOutlineHeart />
        </diV>
        <p className="text-xl">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SearchCard;
