// Product.js

// components/Product.js
import React, { useState } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import clsx from "clsx";
import { FaStar } from "react-icons/fa";

const ProductList = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleAddToCart = () => {
    // Add your logic for adding to cart
    console.log(`Added ${item.title} to the cart`);
  };

  const Star = (n) => {
    return (
      <div className="flex space-x-[2px] ">
        {[...Array(n)].map((_, i) => (
          <FaStar key={i} className="text-[rgb(52,56,57)]  w-[16px] h-[16px]" />
        ))}
      </div>
    );
  };

  return (
    <div className="inline-block px-3">
      <div
        onMouseEnter={() => setPopup(true)}
        onMouseLeave={() => setPopup(false)}
        className="w-[231px] h-[307.89px]  md:w-[262px] md:h-[349px]  max-w-xs overflow-hidden shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out relative "
      >
        <div
          onMouseEnter={() => setPopup(true)}
          className="relative bg-[rgb(243,245,247)]"
        >
          <Image
            src={item.image}
            alt={item.alt}
            width=""
            height=""
            className="mx-auto w-full h-full"
          />
          <div className="absolute bg-[rgb(255,255,255)] top-[16px] left-[16px] py-[2px] px-[10px] font-bold text-[16px] leading-[16px] rounded-[4px]">
            {item.isNew}
          </div>
          <div className="absolute bg-[rgb(56,203,137)] top-[42px] left-[16px] py-[2px] px-[10px] font-bold text-[16px] leading-[16px] rounded-[4px] ">
            {item.discount}
          </div>

          <div className="absolute top-[16px] right-[16px] bg-[rgb(255,255,255)] px-[10px] py-[8px] rounded-full flex items-center shadow-md">
            <button>
              <FaHeart
                onClick={() => setLiked(!liked)}
                className={clsx(
                  liked ? "text-red-900 animate-bounce" : "",
                  "text-[rgb(20,23,24)]",
                  "cursor-pointer"
                )}
              />
            </button>
          </div>
        </div>

        {popup && (
          <div className="h-[30%] bg-[rgb(255,255,255)] absolute bottom-0 right-0 left-0  px-4 ">
            <button
              className="mt-[40px] text-center w-full rounded-[8px] bg-[rgb(20,23,24)] text-[rgb(254,254,254)] py-[10px]"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
      <div className="mt-[12px] space-y-[4px]">
        {Star(item.rating)}
        <h1 className="font-semibold text-[16px] leading-[26px]">
          {item.title}
        </h1>
        <div className="flex space-x-3">
          <h1 className="font-semibold text-[14px] leading--[22px]">
            {item.discountprice}
          </h1>
          <h1 className="text-[14px] leading-[22px] line-through text-[rgb(108,114,117)]">
            {item.price}
          </h1>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
