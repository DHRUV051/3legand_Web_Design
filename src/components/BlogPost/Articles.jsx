import Image from "next/image";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa6";
import Image1 from "../../../public/Blog/img1.png";
import Image2 from "../../../public/Blog/img2.png";
import Image3 from "../../../public/Blog/img3.png";

const Articles = () => {
  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px] py-[40px] md:py-[60px] lg:py-[80px]">
      <section className="flex items-baseline">
        <h1 className="font-medium text-[20px] leading-[28px]  md:text-[40px] md:leading-[44px]">
          You might also like
        </h1>
        <div className="ml-auto hidden md:block">
        <span className="ml-auto relative flex w-fit space-x-[4px] border-b border-[rgb(20,23,24)">
          <Link
            href="/home/blog"
            className="text-[14px] leading-[24px] mb-0  text-[rgb(20,23,24)] font-medium md:text-[18px] md:leading-[26px]"
          >
            More Articles
          </Link>
          <FaArrowRight className="mt-[6px]" />
        </span>
        </div>
       
      </section>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[25px]">
        <div>
          <Image src={Image1} alt="" width="" height="" className="w-full" />
          <h1 className="mt-[16px] md:mt-[24px] mb-[8px] md:text-[20px]  md:leading-[28px] leading-[26px] text-[16px] md:font-medium font-semibold">
            Modern texas home is beautiful and completely kid-friendly
          </h1>
          <h1 className="text-[rgb(108,114,117)] font-medium text-[12px] leading-[20px]">
            October 16, 2023
          </h1>
        </div>

        <div>
          <Image src={Image2} alt="" width="" height="" className="w-full" />
          <h1 className="mt-[16px] md:mt-[24px] mb-[8px] md:text-[20px]  md:leading-[28px] leading-[26px] text-[16px] md:font-medium font-semibold">
            Modern texas home is beautiful and completely kid-friendly
          </h1>
          <h1 className="text-[rgb(108,114,117)] font-medium text-[12px] leading-[20px]">
            October 16, 2023
          </h1>
        </div>

        <div>
          <Image src={Image3} alt="" width="" height="" className="w-full" />
          <h1 className="mt-[16px] md:mt-[24px] mb-[8px] md:text-[20px]  md:leading-[28px] leading-[26px] text-[16px] md:font-medium font-semibold">
            Modern texas home is beautiful and completely kid-friendly
          </h1>
          <h1 className="text-[rgb(108,114,117)] font-medium text-[12px] leading-[20px]">
            October 16, 2023
          </h1>
        </div>
      </div>

      <div className="md:hidden pt-[40px]">
        <span className=" relative flex w-fit space-x-[4px] border-b border-[rgb(20,23,24)">
          <Link
            href="/product"
            className="text-[14px] leading-[24px] mb-0  text-[rgb(20,23,24)] font-medium md:text-[18px] md:leading-[26px]"
          >
            More Articles
          </Link>
          <FaArrowRight className="mt-[6px]" />
        </span>
        </div>
       
    </main>
  );
};

export default Articles;
