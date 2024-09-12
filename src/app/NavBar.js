"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const navItem = [
    { item: "Home", Link: "/" },
    { item: "About", Link: "/AboutUs" },
    { item: "Teachers", Link: "/Teachers" },
    { item: "Schedule", Link: "" },
    { item: "Price", Link: "" },
    { item: "Event", Link: "/Event" },
    { item: "Blog", Link: "" },
    { item: "Contact", Link: "/Contact" },
  ];

  return (
    <>
      <div
        className={` relative md:block hidden shadow-lg shadow-black-500/50 `}
      >
        <div className="flex items-center justify-between py-4 commonContainer ">
          <div className="md:w-[10%] w-[30%] py-2">
            <Image src={Logo} alt="imageDummy" />
          </div>
          <nav className=" ">
            <ul className="flex justify-evenly items-center gap-10">
              {navItem.map((item, index) => (
                <li key={index}>
                  <Link href={item.Link}>{item.item}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="socialLinks ">
            <ul className="flex justify-evenly items-center gap-6 text-[20px]">
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <FaFacebookSquare />
              </li>
              <li>
                <IoLogoYoutube />
              </li>
            </ul>
          </div>{" "}
          <div className="">
            <button className="bg-[#F5DE1E]   border-[1px] border-gray-800 rounded px-4 py-1 text-black md:text-[15px] text-[12px]">
              Start Dancing
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden flex justify-between items-start  py-2 px-4">
        <div className=" relative">
          <IoReorderThreeOutline
            className=" text-lg"
            onClick={() => setShowSideBar(!showSideBar)}
          />
          <div
            className={`bg-[#212121] border-b-[1px] absolute flex-col gap-3 px-8 ${
              showSideBar ? "flex" : "hidden"
            } `}
          >
            <div className=" py-4 flex flex-col gap-10">
              <nav className="bg-[#212121]  md:w-[60%]">
                <ul className=" flex flex-col gap-2">
                  {navItem.map((item, index) => (
                    <li key={index} className="text-[14px] ">
                      <Link href={item.Link}>{item.item}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="socialLinks md:w-[35%] ">
                <ul className=" text-[12px] ">
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>YouTube</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="bg-[#F5DE1E]   border-[1px] border-gray-800 rounded px-4 py-1 text-black text-[12px]">
            Start Dancing
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
