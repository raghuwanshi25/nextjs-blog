"use client";


import React, { useState } from "react";
import { MdChat } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import { FaBell, FaUser } from "react-icons/fa";

const Navbar = ({ setNavigation, navigation }) => {
  const handleNav = () => {
    setNavigation(!navigation);
  };

  return (
    <div className=" text-center h-full w-full bg-gray-900 text-white">
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
      <div className="h-[1px] bg-slate-400 w-full"></div>
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
    </div>
  );
};

export default Navbar;
