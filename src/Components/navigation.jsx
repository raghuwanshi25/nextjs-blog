"use client";


import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdChat } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import { FaBell } from "react-icons/fa";

import { FaB, FaUser } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex ease-in-out duration-500 justify-between items-center h-16 max-w-[1240px] mx-auto px-4">
      <img
        alt="company logo"
        className="w-[70px] select-none"
        src={
          "https://www.goindiastocks.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f62c7531.png&w=3840&q=75"
        }
      />
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose color="black" size={20} />
        ) : (
          <AiOutlineMenu color="black" size={20} />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 h-full z-20 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out h-full z-20 w-[60%] top-0 duration-500 fixed left-[-100%]"
        }
      >
        <div className="flex flex-row p-4">
          <div className="flex flex-row flex-none items-center">
            <div>
              <FaUser color="white" size={20} />
            </div>
            <p className="text-white ml-2">Hello User</p>
          </div>
          <div className="flex flex-1 flex-row justify-end items-center">
            <FaBell color="white" size={20} />
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#666]"></div>
        <li className="p-4 flex flex-row items-center ">
          <div>
            <MdChat color="white" size={20} />
          </div>
          <div className="text-white ml-2">Discussiton Forum</div>
        </li>
        <li className="p-4 flex flex-row items-center ">
          <div>
            <SiMoneygram color="white" size={20} />
          </div>
          <div className="text-white ml-2">Market Stories</div>
        </li>

        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
