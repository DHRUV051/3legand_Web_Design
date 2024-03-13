import Image from "next/image";
import About from "../../../public/Contact/About.png";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";


const ContactAbout = () => {
  return (
    <main className="py-[32px] md:py-[50px] px-[32px] md:px-[60px] lg:px-[160px] flex flex-col md:flex-row w-full lg:h-[413px]">
      <section className="w-full h-full">
        <Image
          src={About}
          alt=""
          width=""
          height=""
          className="w-full h-full"
        />
      </section>
      <section className="bg-[rgb(243,245,247)] w-full flex flex-col justify-center lg:pl-[72px] md:pr-[35px] md:pt-0 px-[16px] py-[50px]">
        <h1 className="font-medium text-[20px] leading-[28px] lg:text-[40px] lg:leading-[44px] pb-[16px]">
          About Us
        </h1>
        <div className="hidden md:block">
          <p className="text-[16px] leading-[]">
            3legant is a gift & decorations store based in HCMC,
          </p>
          <p>Vietnam. Est since 2019.</p>
          <p className="w-[90%]">
            Our customer service is always prepared to support you 24/7
          </p>
        </div>
        <div className="md:hidden ">
          <p className="text-[14px] leading-[22px]">
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019. Our customer service is always prepared to support you
            24/7
          </p>
        </div>

        <Link href="/shop" className="mt-[16px]">
          <button className="flex font-medium text-[16px] leading-[28px] text-[rgb(20,23,24)] mt-[2px] border-b border-[rgb(20,23,24)]">
            Shop Now
            <FaArrowRightLong className="ml-2 w-[15px] h-[15px] mt-[6px]" />
          </button>
        </Link>
      </section>
    </main>
  );
};

export default ContactAbout;
