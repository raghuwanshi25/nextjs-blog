"use client";


import Testimonial from "./Components/Testimonial";
import Service from "./Components/Service";
import { testimonialData, serviceData } from "./utils/dummy-data";
import { useState } from "react";
import Navbar from "./Components/navigation";
import NavbarDesktop from "./Components/navbar";

const PhoneUI = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="sm:hidden grid sm:grid-cols-3 sm:gap-10">
      <div>
        <div className="w-full flex-row flex">
          <div
            onClick={() => setSelectedTab(0)}
            className={
              selectedTab === 0
                ? "flex-1 text-white mb-4 py-[4px] bg-[#112f58] border-b-[2px] border-[#b73b00]  text-center"
                : "flex-1 text-white mb-4 py-[4px] bg-[#194683]  text-center"
            }
          >
            Discussion Forum
          </div>
          <div
            onClick={() => setSelectedTab(1)}
            className={
              selectedTab === 1
                ? "flex-1 text-white mb-4 py-[4px] bg-[#112f58] border-b-[2px] border-[#b73b00]  text-center"
                : "flex-1 text-white mb-4 py-[4px] bg-[#194683]  text-center"
            }
          >
            Manage Network
          </div>
        </div>
      </div>
      <div className="px-4">
        {selectedTab === 0 ? <DiscussionForum /> : <ManageNetworks />}
      </div>
    </div>
  );
};

const DiscussionForum = () => {
  return (
    <div className="mx-auto sm:col-span-2">
      {testimonialData.map((item) => (
        <div className="mb-6">
          <Testimonial data={item} />
        </div>
      ))}
    </div>
  );
};

const ManageNetworks = () => {
  return (
    <div className="mx-auto sm:col-span-1 ">
      {serviceData.map((item) => (
        <div className="mb-6">
          <Service data={item} />
        </div>
      ))}
    </div>
  );
};

const Content = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <PhoneUI />
      <div className="grid-cols-8 hidden sm:grid">
        <div className={show ? "col-span-2 bg-pink-500" : "col-auto hidden"}>
          <NavbarDesktop />
        </div>
        <div className={show ? "col-span-4" : "col-span-6"}>
          <div className="flex flex-row gap-x-4">
            <div>
              <div className="h-full my-auto mt-[200px]">
                <button
                  className=" bg-slate-300 h-16 my-auto rounded-sm hover:bg-slate-200"
                  onClick={() => {
                    // setShowNavigation(!showNavigation);
                    setShow(!show);
                  }}
                >
                  ▶
                </button>
              </div>
            </div>
            <div className="mx-4">
              <div>
                <p className="text-lg mb-4 inline-block rounded-md px-4 mt-4 text-[#ff6651] bg-[rgba(255,177,166,0.2)]">
                  Discussion Forum
                </p>
              </div>
              <DiscussionForum />
            </div>
          </div>
        </div>
        <div className="col-span-2 px-4">
          <div>
            <p className="text-lg mt-4 text-[#ff6651] mb-4 rounded-md px-4 inline-block bg-[rgba(255,177,166,0.2)]">
              Marketing Stories
            </p>
          </div>
          <ManageNetworks />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="flex bg-black">
        <Content />
      </div>
    </div>
  );
}

export default App;
