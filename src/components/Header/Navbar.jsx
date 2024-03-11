"use client";

import { Navdata } from "../../lib/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "../../../public/Header/search.svg";
import User from "../../../public/Header/user.svg";
import Bag from "../../../public/Header/bag.svg";
import { IoHeartOutline } from "react-icons/io5";
import Vector from "../../../public/Header/Vector.svg";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { clsx } from "clsx";
import { IoMdClose } from "react-icons/io";

import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  let pathname = usePathname();

  pathname = pathname.split("/")


  return (
    <main className="px-[32px] py-[18px] md:px-[60px] lg:px-[160px] w-full flex items-center justify-between ">
      <div className="flex space-x-3 md:space-x-0 ">
        <button className="md:hidden" onClick={() => setMenu(!menu)}>
          <GiHamburgerMenu className="w-5 h-5" />
        </button>

        <Link
          href="/"
          className="font-medium md:mt-2 mt-1 leading-[24px] text-[16px] md:text-[24px] cursor-pointer"
        >
          3legant.
        </Link>
      </div>

      {/* Mobile Navbar */}
      <div className={clsx(menu ? "md:hidden " : "md:hidden")}>
        <div
          className={clsx(
            menu
              ? "translate-x-0 transition-all bg-white flex-col  fixed right-0 top-0 h-screen medium:w-1/2 w-full z-50 flex"
              : "translate-x-full bg-white flex z-50 flex-col top-0 right-0  w-full h-full  fixed ",
            "p-[24px] ease-in-out  duration-[500ms] "
          )}
        >
          <div className="flex justify-betweena+">
            <Link href="/" className="font-medium text-[16px] leading-[24px]">
              3legant.
            </Link>
            <button className="mt-0 text-3xl cursor-pointer ml-auto">
              <IoMdClose
                onClick={() => setMenu(!menu)}
                className={clsx(
                  menu ? "" : "relative top-0 right-16 left-0",
                  "w-5 h-5 cursor-pointer"
                )}
              />
            </button>
          </div>

          <div className="relative mt-[16px] space-y-[16px]">
            <div className="px-[16px] py-[11px] border-[2px] border-[rgb(108,114,117)] rounded-[6px] flex space-x-2">
              <Image src={Search} alt="" width="" height="" className="" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none focus:outline-none w-full"
              />
            </div>

            <ul className="space-y-[16px]">
              {Navdata.map((item, index) => (
                <li
                  key={index}
                  className="font-medium text-[16px] pb-[10px] text-[rgb(20,23,24)] leading-[24px] border-b-2 border-[rgb(232,236,239)]"
                >
                  <Link href={item.href} className="flex">
                    {item.name}
                    <Image
                      src={Vector}
                      alt=""
                      width=""
                      height=""
                      className={clsx(
                        item.name === "Shop" || item.name === "Product"
                          ? ""
                          : "hidden",
                        "ml-auto cursor-pointer"
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[95px] space-y-[19.33px]">
            <div>
              <div className="flex justify-between pb-[10px] border-b-2 border-[rgb(232,236,239)]">
                <h1 className="text-[rgb(108,114,117)] font-medium text-[18px] leading-[32px]">
                  Cart
                </h1>
                <div className="flex">
                  <Image
                    src={Bag}
                    alt=""
                    width=""
                    height=""
                    className="cursor-pointer"
                  />
                  <div className="bg-[rgb(20,23,24)] text-white rounded-full px-[12px] py-[4px] scale-[0.60] -ml-1">
                    2
                  </div>
                </div>
              </div>

              <div className="mt-[8px] flex justify-between pb-[10px] border-b-2 border-[rgb(232,236,239)]">
                <h1 className="text-[rgb(108,114,117)] font-medium text-[18px] leading-[32px]">
                  Wishlist
                </h1>
                <div className="flex">
                  <IoHeartOutline className="w-7 h-7 cursor-pointer" />
                  <div className="bg-[rgb(20,23,24)] text-white rounded-full px-[12px] py-[4px] scale-[0.60] -ml-1">
                    2
                  </div>
                </div>
              </div>
            </div>

            <Link href="/sign-in">
              <button
                type="submit"
                className="text-center bg-[rgb(20,23,24)] text-[18px] font-medium  text-white w-full rounded-[8px] py-[8px]"
              >
                Sign In
              </button>
            </Link>

            <div className="flex mt-[6px] space-x-[24px]">
              <FaInstagram className="w-5 h-5 cursor-pointer" />
              <LuFacebook className="w-5 h-5 cursor-pointer" />
              <CiYoutube className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Mobile */}
      <div className="hidden md:block">
        <ul className="flex gap-[40px] mt-2">
          {Navdata.map((item, index) => (
            <li
              key={index}
              className="font-medium text-[16px] text-[rgb(108,114,117)] leading-[24px]"
            >
     
              <Link
                href={item.href}
                className={`/${pathname[1]}` === `${item.href}` ? "text-[rgb(20,23,24)]" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex mt-[2px] w-fit justify-between space-x-[16px]">
        <div className="mt-1">
          <Image
            src={Search}
            alt=""
            width=""
            height=""
            className="hidden md:block cursor-pointer"
          />
        </div>
        <div className="mt-1">
          <Image
            src={User}
            alt=""
            width=""
            height=""
            className="hidden md:block cursor-pointer"
          />
        </div>
        <div className="flex">
          <Image
            src={Bag}
            alt=""
            width=""
            height=""
            className="cursor-pointer"
          />
          <div className=" bg-[rgb(20,23,24)] text-white flex items-center rounded-full px-[12px] py-[4px] scale-[0.60] ">
            2
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
