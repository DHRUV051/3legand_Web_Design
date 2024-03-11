"use client";

import Image from "next/image";
import Ticket from "../../../public/Header/ticket.svg";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Poster = () => {
  const [poster, setPoster] = useState(true);
  return (
    <>
      {poster ? (
        <>
          <main className="bg-[rgb(243,245,247)] flex w-full  h-[45px] ">
            <section className="pt-2 ml-auto">
              <div className="flex space-x-2">
                <Image src={Ticket} alt="" width="" height="" className="w-4 h-4 mt-[5px] md:w-8 md:h-8 md:-mt-[2px]" />
                <h1 className="font-semibold text-[12px] leading-[20px] md:text-[14px] md:leading-[22px] text-[rgb(52,56,57)] mt-1">
                  30% off storewide — Limited time!
                </h1>
                <Link href="/shop" className="hidden md:block">
                  <button className="flex font-medium text-[14px] leading-[24px] text-[rgb(55,125,255)] mt-[2px] border-b border-[rgb(55,125,255)] ">
                    Shop Now
                    <FaArrowRightLong  className="ml-2 w-[15px] h-[15px] mt-1" />
                  </button>
                </Link>
              </div>
            </section>

            <section className="ml-auto pt-3 pr-6">
              <button onClick={() => setPoster(false)}>
                <IoMdClose className="w-4 h-4 md:w-6 md:h-6" />
              </button>
            </section>
          </main>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Poster;
