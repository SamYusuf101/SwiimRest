/* eslint-disable */
import React from "react";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

function SearchCard({ img, location, title, description, star, price, total }) {
  return (
    <div
      className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80
    hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t "
    >
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
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex items-center justify-between ">
          <p className="flex items-center space-x-2">
            <AiOutlineStar className="text-red-500" />
            <p>{star}</p>
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
