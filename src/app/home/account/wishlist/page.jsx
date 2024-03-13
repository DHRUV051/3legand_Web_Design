"use client";
import React from "react";
import Link from "next/link";

import ProfileCard from "@/components/Account/ProfileCard";
import Wishlist from "@/components/Account/Wishlist";


const WishlistPage = () => {
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
            My Account
          </h1>
        </div>
      </section>
      <section className="pb-[80px] grid lg:grid-cols-12 grid-cols-1">
        <ProfileCard />

        <div className="lg:pl-[172px]  lg:col-span-9 w-full">
          <Wishlist />
        </div>
      </section>
    </main>
  );
};

// Export the component
export default WishlistPage;
