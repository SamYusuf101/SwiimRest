import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="pt-10 pb-10">
      <div className="relative h-80 w-100  ">
        <Image
          src={img}
          alt="/"
          objectFit="cover"
          layout="fill"
          className="rounded-2xl"
        />
        <div className="absolute  w-full top-32 left-12">
          <p className="text-black text-sm sm:text-lg font-semibold">{title}</p>
          <p className="text-black text-sm sm:text-lg font-semibold">
            {description}
          </p>
          <div className="pt-5">
            <button
              className="text-white bg-gray-900 shadow-md px-4 rounded-full p-2
          font-bold hover:shadow-xl active:scale-90 transition duration-150"
            >
              <p>{buttonText}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
