import React from "react";
import Image from "next/image";
import Link from "next/link";
import kulcodeImg from "../public/assets/kulcode.png";
import {
  AiOutlineArrowUp,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineGlobal,
} from "react-icons/ai";

function Header() {
  return (
    <header className="items-center sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative h-10 flex items-center  my-auto">
        <Link href="/">
          <Image
            src={kulcodeImg}
            alt="/"
            width="140px"
            height="140px"
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div
        className="flex cursor-pointer  items-center md:border-2
      rounded-full md:shadow-sm "
      >
        <input
          type="text"
          placeholder="start your search"
          className="pl-5 p-1 bg-transparent outline-none flex-grow rounded-full
          text-sm text-gray-500 placeholder-gray-400"
        />
        <AiOutlineSearch
          className="hidden md:inline-flex bg-blue-500 text-white rounded-full
         h-5 w-5 p-1 hover:cursor-pointer md:mx-2"
        />
      </div>
      <div className="flex items-center justify-end space-x-6">
        <div className="flex space-x-2 items-center">
          <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
          <AiOutlineGlobal
            className=" md:inline-flex bg-gray-500 text-white rounded-full
         h-5 w-5 p-1 hover:cursor-pointer md:mx-2 cursor-pointer"
          />
        </div>
        <div className="border-2 rounded-full p-1 flex items-center space-x-2">
          <AiOutlineMenu
            className=" md:inline-flex  text-black rounded-full
         h-5 w-5 p-1 hover:cursor-pointer md:mx-2 cursor-pointer"
          />
          <AiOutlineUser
            className=" md:inline-flex bg-gray-500 text-white rounded-full
         h-5 w-5 p-1 hover:cursor-pointer md:mx-2 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
