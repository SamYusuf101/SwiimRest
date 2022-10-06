/* eslint-disable */
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typed from "react-typed";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Body = () => {
  return (
    <div id="home" className="sm:top-20 w-full h-screen text-center ">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className=" uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Sam</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            A Front-End
            <Typed
              className="pl-2 text-[#5651e5]"
              strings={["Web", "Mobile"]}
              typeSpeed={150}
              backSpeed={90}
              loop
            />{" "}
            developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web and mobile developer specializing in building
            (and occasionally designing) exceptional digital experiences.
            Currently am focused on building responsive front-end web/mobile
            applications while learning back-end technologies
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/sam-yusuf-0753601a9">
              <div className="my-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/SamYusuf101">
              <div className="my-2  rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>

            <Link href="https://www.instagram.com/kulcode/">
              <div className="my-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaInstagram />
              </div>
            </Link>
            <div className="my-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
