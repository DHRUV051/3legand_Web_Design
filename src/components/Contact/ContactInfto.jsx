"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";

const ContactIntro = () => {
  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px] pt-[16px] pb-[40px] md:pb-[48px]">
      <section className="">
        <section className="flex space-x-4">
          <Link
            href={`/home`}
            className="text-[rgb(96,95,95)] text-[14px] leading-[24px] font-medium capitalize"
          >
            Home<span className="mt-2 ml-1">{">"}</span>
          </Link>
          <Link
            href={`/contact-us`}
            className="text-[rgb(20,23,24)] text-[14px] leading-[24px] font-medium capitalize"
          >
            Contact Us
          </Link>
        </section>
      </section>

      <section className="pt-[48px] md:pt-[40px]">
        <div>
          <h1 className="font-medium text-[24px] leading-[34px] lg:text-[54px] md:leading-[58px] lg:w-[70%] md:w-[100%]   text-[rgb(20,23,24)] w-[100%] md:text-[32px]">
          We believe in sustainable decor. We’re passionate about life at home.
          </h1>
        </div>
        <div className="pt-[24px] md:pt-[12px]">
            <p className="text-[rgb(20,23,24)] text-[16px] leading-[26px] md:w-[100%] lg:w-[72%] w-[100%]">Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present</p>
        </div>
      </section>
    </main>
  );
};

export default ContactIntro;
