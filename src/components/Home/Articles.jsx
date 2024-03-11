import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Bedroom from "../../../public/Home/bedroom.png";
import Livingarea from "../../../public/Home/livingarea.png";
import Chair from "../../../public/Home/chair.png";
import Image from "next/image";

const Articles = () => {
  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px] py-[40px] md:py-[60px] lg:py-[80px]">
      <section className="flex items-baseline">
        <h1 className="font-medium text-[34px] leading-[38px]  md:text-[40px] md:leading-[44px]">
          Articles
        </h1>
        <span className="ml-auto relative flex w-fit space-x-[4px] border-b border-[rgb(20,23,24)]">
          <Link
            href="/home/blog"
            className="text-[14px] leading-[24px] mb-0  text-[rgb(20,23,24)] font-medium md:text-[18px] md:leading-[26px]"
          >
            More Articles
          </Link>
          <FaArrowRight className="mt-[6px]" />
        </span>
      </section>

    
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[25px]">
          <div className="">
            <Image src={Livingarea} alt="" width="" height="" className="w-full" />
            <h1 className="mt-[16px] md:mt-[24px] mb-[8px] md:text-[20px]  md:leading-[28px] leading-[26px] text-[16px] md:font-medium font-semibold">
              7 ways to decor your home
            </h1>
            <span className="relative flex w-fit space-x-[4px] border-b border-[rgb(20,23,24)]">
              <Link
                href="/product"
                className="text-[rgb(20,23,24)] font-medium md:leading-[28px] leading-[26px] text-[16px]"
              >
                Read More
              </Link>
              <FaArrowRight className="mt-[6px] text-[rgb(108,114,117)]" />
            </span>
          </div>

          <div>
            <Image src={Chair} alt="" width="" height="" className="w-full" />
            <h1 className="mt-[16px] md:mt-[24px] mb-[8px] md:text-[20px]  md:leading-[28px] leading-[26px] text-[16px] md:font-medium font-semibold">
              Kitchen organization
            </h1>
            <span className="relative flex w-fit space-x-[4px] border-b border-[rgb(20,23,24)]">
              <Link
                href="/product"
                className="text-[rgb(20,23,24)] font-medium md:leading-[28px] leading-[26px] text-[16px]"
              >
                Read More
              </Link>
              <FaArrowRight className="mt-[6px] text-[rgb(108,114,117)]" />
            </span>
          </div>

          <div>
            <Image src={Bedroom} alt="" width="" height="" className="w-full" />
            <h1 className="mt-[16px] md:mt-[24px] mb-[8px] md:text-[20px]  md:leading-[28px] leading-[26px] text-[16px] md:font-medium font-semibold">
              Decor your bedroom
            </h1>
            <span className="relative flex w-fit space-x-[4px] border-b border-[rgb(20,23,24)]">
              <Link
                href="/product"
                className="text-[rgb(20,23,24)] font-medium md:leading-[28px] leading-[26px] text-[16px]"
              >
                Read More
              </Link>
              <FaArrowRight className="mt-[6px] text-[rgb(108,114,117)]" />
            </span>
          </div>
        </div>
    </main>
  );
};

export default Articles;
