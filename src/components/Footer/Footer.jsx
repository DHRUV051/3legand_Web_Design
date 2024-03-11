"use client";

import { Navdata } from "../../lib/constant";
import Link from "next/link";

import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandFacebook } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";
import { usePathname } from "next/navigation";


const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-[rgb(35,38,39)] text-[rgb(254,254,254)] px-[32px] md:px-[60px] py-[48px] md:pt-[80px] md:pb-[32px] space-y-[40px] md:space-y-[49px] lg:px-[160px]">
      <section className="space-y-[40px] md:flex md:space-y-0 justify-between">
        <section>
          <div className="space-y-[16px] flex flex-col md:flex-row items-center justify-center md:space-y-0 md:space-x-[32px]">
            <h1 className="font-medium text-[24px] leading-[24px] text-[rgb(255,255,255)] cursor-pointer">
              3legant.
            </h1>
            <div className="w-[24px] h-[1px] bg-[rgb(108,114,117)] md:rotate-90"></div>
            <Link
              href="/shop"
              className="font-medium text-[14px] leading-[22px] cursor-pointer"
            >
              Gift & Decoration Store
            </Link>
          </div>
        </section>

        <section>
          <ul className="mt-2 space-y-[32px] md:flex md:space-y-0 md:mt-0 md:space-x-[32px]">
            {Navdata.map((item, index) => (
              <li
                key={index}
                className="font-medium text-[16px] text-center leading-[24px]"
              >
                <Link
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "text-[rgb(255,255,255)] font-bold underline underline-offset-4"
                      : ""
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <section className="py-[24px] md:py-[16px] border-t-[1px] border-[hsl(200,4%,44%)] flex flex-col md:flex-row items-center justify-center   space-y-[32px] md:space-y-0 md:justify-between">
        <div className="flex space-x-[24px] md:order-last">
          <AiOutlineInstagram className="w-7 h-7 cursor-pointer" />
          <TbBrandFacebook className="w-7 h-7 cursor-pointer" />
          <AiOutlineYoutube className="w-7 h-7 cursor-pointer" />
        </div>

        <div className="md:flex md:flex-row md:order-1 md:gap-[28px] flex-col items-center space-y-[28px] md:space-y-0">
          <div className="flex justify-center space-x-[28px] md:order-2 items-center">
            <h1 className="font-semibold text-[12px] leading-[20px] cursor-pointer">
              Privacy Policy
            </h1>
            <h1 className="font-semibold text-[12px] leading-[20px] cursor-pointer">
              Terms of Use
            </h1>
          </div>

          <h1 className="text-center font-medium text-[11.4px] md:text-[12px] leading-[20px] md:order-1 cursor-pointer">
            Copyright © 2023 3legant. All rights reserved.
          </h1>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
