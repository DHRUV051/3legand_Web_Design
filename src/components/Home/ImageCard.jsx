import Image from "next/image";
import Imagecard from "../../../public/Home/ImageFlex.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ImageCard = () => {
  return (
    <main className="flex flex-col md:flex-row w-full space-x-0">
      <div className="w-full">
        <Image src={Imagecard} alt="" width="" height="" className="w-full h-full"  />
      </div>
      <div className="flex items-center w-full lg:pl-[72px] px-[32px] bg-[rgb(243,245,247)]  md:py-[20px]">
        <div className="space-y-[16px] py-[58.5px]">
          <Link
            href="/shop"
            className="font-bold text-[16px] leading-[16px] text-[rgb(55,125,255)]"
          >
            SALE UP TO 35% OFF
          </Link>
          <h1 className="text-[25px] leading-[38px] lg:text-[40px] text-[rgb(20,23,24)] lg:leading-[44px] font-medium">
            HUNDREDS of <br />
            New lower prices!
          </h1>
          <p className="text-[16px] leading-[26px] lg:text-[20px] font-normal lg:leading-[32px] text-[rgb(20,23,24)] lg:w-[65%]">
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
          <div className="relative flex w-fit py-1 space-x-[4px] border-b border-[rgb(20,23,24)] mt-[8px]">
            <Link
              href="/shop"
              className="text-[rgb(20,23,24)] font-medium text-[18px] leading-[26px]"
            >
              Shop Now
            </Link>
            <FaArrowRight className="mt-[6px]" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImageCard;
