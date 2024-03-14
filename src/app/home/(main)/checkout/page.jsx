"use client";
import CheckoutComponents from "@/components/Checkout/CheckoutComponents";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px]">
      <section>
        <div>
          <Link href="/home">
            <div className="pt-[16px] md:hidden">
              <span>{"<"} Back</span>
            </div>
          </Link>
          <h1 className="text-center text-[40px] leading-[44px] font-medium lg:text-[54px] lg:leading-[58px] py-[40px] lg:py-[80px]">
            Cart
          </h1>
        </div>
      </section>

      <section className="flex md:items-center md:justify-center space-x-[62px] overflow-auto">
        <div className="pb-[26px] border-b-[2px] border-[rgb(56,203,137)] flex space-x-[17px] w-[256px]">
          <div className="bg-[rgb(56,203,137)] rounded-full md:py-[10px] md:px-[20px] flex flex-col items-center justify-center px-[22px] py-[10px]">
            <h1 className="text-[rgb(255,255,255)] font-semibold text-[16px] leading-[26px]">
              1
            </h1>
          </div>
          <h1 className="text-[16px] leading-[26px] text-[rgb(56,203,137)] font-semibold justify-center flex flex-col items-center w-[150px]">
            {" "}
            Shopping cart
          </h1>
        </div>
        <div className="pb-[26px] flex space-x-[17px] w-[256px] border-b-[2px] border-[rgb(20,23,24)]  ">
          <div className="bg-[rgb(20,23,24)] rounded-full md:py-[10px] md:px-[20px] flex flex-col items-center justify-center px-[22px] py-[10px]">
            <h1 className="text-[rgb(255,255,255)] font-semibold text-[16px] leading-[26px]">
              2
            </h1>
          </div>
          <h1 className="text-[16px] text-[rgb(20,23,24)] leading-[26px] font-semibold justify-center flex flex-col items-center w-[150px]">
            Checkout details
          </h1>
        </div>

        <div className="pb-[26px] flex space-x-[17px] w-[256px]">
          <div className="bg-[rgb(177,181,195)] rounded-full md:py-[10px] md:px-[20px] flex flex-col items-center justify-center px-[22px] py-[11px]">
            <h1 className="text-[rgb(255,255,255)] font-semibold text-[16px] leading-[26px]">
              3
            </h1>
          </div>
          <h1 className="text-[16px] leading-[26px] text-[rgb(177,181,195)] font-semibold justify-center flex flex-col items-center w-[150px]">
            Order complete
          </h1>
        </div>
      </section>

      <section className="py-[80px]">
        <CheckoutComponents />
      </section>
    </main>
  );
};

export default page;
