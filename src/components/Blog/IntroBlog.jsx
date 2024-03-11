"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const IntroBlog = () => {
  let pathname = usePathname();
  pathname = pathname.split("/");
  return (
    <main className=" md:mx-[60px] lg:mx-[160px] bg-[url('/Blog/IntroImage.png')] md:bg-cover 
    md:h-[392px] h-[300px] bg-no-repeat bg-center flex flex-item justify-center items-center bg-white">
      <section className="space-y-[24px]">
        <div className="flex items-center justify-center space-x-4">
          <Link
            href={`/${pathname[1]}`}
            className="text-[rgb(96,95,95)] text-[14px] leading-[24px] font-medium capitalize"
          >
            {pathname[1]}
            <span className="mt-2 ml-1">{">"}</span>
          </Link>

          <Link
            href={`/${pathname[2]}`}
            className="text-[rgb(18,23,24)] text-[14px] leading-[24px] font-medium capitalize"
          >
            {pathname[2]}
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="font-medium text-[40px] leading-[44px] md:text-[54px] md:leading-[58px]">Our Blog</h1>
        </div>
        <div className="flex items-center justify-center text-center">
          <h1 className="text-[14px] leading-[26px] md:text-[18px] md:leading-[30px]">
            Home ideas and design inspiration
          </h1>
        </div>
      </section>
    </main>
  );
};

export default IntroBlog;
