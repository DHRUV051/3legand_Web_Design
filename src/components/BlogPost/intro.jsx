'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";



const Intro = () => {

  let pathname = usePathname();
  pathname = pathname.split("/")

  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px]">
      <section className="hidden md:block">
        <section className="flex space-x-4">
          <Link href={`/${pathname[1]}`} className="text-[rgb(96,95,95)] text-[14px] leading-[24px] font-medium capitalize">
            {pathname[1]}<span className="mt-2 ml-1">{">"}</span>
          </Link>
          <Link href={`/${pathname[1]}/${pathname[2]}`} className="text-[rgb(96,95,95)] text-[14px] leading-[24px] font-medium capitalize">
            {pathname[2]}<span className="mt-2 ml-1">{">"}</span>
          </Link>
          <h1 className="text-[rgb(18,18,18)]  text-[14px] leading-[24px] font-medium">
            How to make a busy bathroom a place to relax
          </h1>
        </section>
      </section>
      <section className="md:hidden">
        <h1 className="text-[rgb(96,95,95)] text-[14px] leading-[24px] font-medium">
          {"<"}
          <span className="mt-2 ml-1">Back</span>
        </h1>
      </section>

      <section className="pt-[48px] md:pt-[56px]">
        <h1 className="font-bold text-[14px] leading-[26px] uppercase">Article</h1>
        <div className="py-[24px]">
          <h1 className="font-medium text-[24px] leading-[34px] md:text-[54px] md:leading-[58px] md:w-[80%] tracking-[-1px">
            How to make a busy bathroom a place to relax
          </h1>
        </div>
        <div className="md:space-x-[48px] flex md:pb-[40px] pb-[32px] md:justify-normal justify-between w-full">
          <div className="text-[rgb(108,114,117)] flex space-x-[4px]">
            <FaRegUserCircle className="mt-[2px] md:w-[24px] md:h-[24px] w-[16px] h-[16px]" />
            <h1 className="font-medium text-[12px] leading-[22px] md:text-[16px] md:leading-[26px] mt-[2px] ">
              Henrik Annemark
            </h1>
          </div>
          <div className="text-[rgb(108,114,117)] flex space-x-[4px]">
            <IoCalendarClearOutline className="mt-[2px] md:w-[24px] md:h-[24px] w-[16px] h-[16px]" />

            <h1 className="text-[12px] leading-[22px] md:text-[16px] md:leading-[26px] font-medium mt-[2px]">
              October 16, 2023
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Intro;
