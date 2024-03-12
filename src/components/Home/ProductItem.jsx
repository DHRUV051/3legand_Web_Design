import { FaArrowRight } from "react-icons/fa6";
import { Product } from "../../lib/constant";
import ProductList from "./ProductList";
import Link from "next/link";
import { clsx } from "clsx";
import { forwardRef } from "react";

const ProductItem = ({ inView }, ref) => {
  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px]">
      <section className="space-y-[48px]">
        <div className="flex">
          <h1 className="font-medium text-[34px] leading-[38px]  md:text-[40px] md:leading-[44px] w-[10%] ">
            New Arrivals
          </h1>
          <div className="ml-auto relative mt-[85px] flex w-fit py-1 space-x-[4px] border-b border-[rgb(20,23,24)]">
            <Link
              href="/product"
              className="hidden md:block text-[rgb(20,23,24)] font-medium text-[18px] leading-[26px]"
            >
              More Products
            </Link>
            <FaArrowRight className="mt-[6px] hidden md:block" />
          </div>
        </div>

        <div className={clsx("flex flex-col bg-white m-auto p-auto")}>
          <div
            className="flex overflow-x-scroll overflow-y-clip pb-10"
            id="scroll"
          >
            <div
              ref={ref}
              className={clsx(
                "flex flex-nowrap",
                `transition-opacity ${inView ? "FADEINCARD" : ""}`
              )}
            >
              {Product.map((item, index) => (
                <ProductList key={index} item={item} />
              ))}
            </div>
          </div>
          <div className="md:hidden mb-[32px] pt-10 flex w-fit py-1 space-x-[4px] border-b border-[rgb(20,23,24)]">
            <Link
              href="/product"
              className=" text-[rgb(20,23,24)] font-medium text-[18px] leading-[26px]"
            >
              More Products
            </Link>
            <FaArrowRight className="mt-[6px] " />
          </div>
        </div>
      </section>
    </main>
  );
};

export default forwardRef(ProductItem); // ProductItem;
