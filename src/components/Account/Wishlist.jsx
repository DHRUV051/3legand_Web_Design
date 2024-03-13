"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

import Image1 from "../../../public/Account/tray.png";
import Image2 from "../../../public/Account/sofa.png";
import Image3 from "../../../public/Account/basket.png";
import Image4 from "../../../public/Account/pillow.png";
import { Button } from "../ui/button";
import { useState } from "react";
import clsx from "clsx";
import { useToast } from "../ui/use-toast";

const Wishlist = () => {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(true);
  const [button3, setButton3] = useState(true);
  const [button4, setButton4] = useState(true);
  const { toast } = useToast();

  const Close = (n) => {
    if (n === 1) {
      setButton1(false);
    } else if (n === 2) {
      setButton2(false);
    } else if (n === 3) {
      setButton3(false);
    } else if (n === 4) {
      setButton4(false);
    }
  };

  const Add = () => {};

  return (
    <main>
      <section className="mb-[40px]">
        <h1 className="text-[18px] leading-[28px] table:text-[20px] table:leading-[32px] font-semibold table:ml-4">
          Your Wishlist
        </h1>
      </section>
      <section className="hidden table:block">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="justify-between">
              <TableHead className="w-1/3">Product</TableHead>
              <TableHead className="w-1/3">Price</TableHead>
              <TableHead className="w-1/3">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className={clsx(button1 ? "" : "hidden")}>
              <TableCell className="flex items-center flex-row">
                <button
                  onClick={() => {
                    Close(1);
                    toast({
                      title: "Tray Table Removed",
                      description: "Tray Table Removed From Your Wishlist",
                    });
                  }}
                >
                  <IoClose
                    size={24}
                    className="mr-[10px] -ml-[40px] text-[rgb(108,114,117)]"
                  />
                </button>
                <Image
                  src={Image1}
                  alt=""
                  width={"60"}
                  height={"72"}
                  className="mr-[16px]"
                />
                <div>
                  <h1 className="font-semibold text-[14px] leading-[22px]">
                    Tray Table
                  </h1>
                  <h1 className=" text-[rgb(108,114,117)] text-[12px] leading-[20px]">
                    Color: Black{" "}
                  </h1>
                </div>
              </TableCell>
              <TableCell>
                <h1 className="font-medium text-[14px] leading-[22px]">
                  $ 19.19
                </h1>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    Close(1);
                    toast({
                      title: "Tray Table Added TO Cart",
                      description: "You can check it in your cart",
                    });
                  }}
                >
                  Add To Cart
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className={clsx(button2 ? "" : "hidden")}>
              <TableCell className="flex items-center flex-row">
                <button
                  onClick={() => {
                    Close(2);
                    toast({
                      title: "Sofa Removed",
                      description: "Sofa Removed From Your Wishlist",
                    });
                  }}
                >
                  <IoClose
                    size={24}
                    className="mr-[10px] -ml-[40px] text-[rgb(108,114,117)]"
                  />
                </button>
                <Image
                  src={Image2}
                  alt=""
                  width={"60"}
                  height={"72"}
                  className="mr-[16px]"
                />
                <div>
                  <h1 className="font-semibold text-[14px] leading-[22px]">
                    Sofa
                  </h1>
                  <h1 className=" text-[rgb(108,114,117)] text-[12px] leading-[20px]">
                    Color: Beige
                  </h1>
                </div>
              </TableCell>
              <TableCell>
                <h1 className="font-medium text-[14px] leading-[22px]">
                  $ 345
                </h1>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    Close(2);
                    toast({
                      title: "Sofa Added to Cart",
                      description: "You can check it in your cart",
                    });
                  }}
                >
                  Add to Cart
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className={clsx(button3 ? "" : "hidden")}>
              <TableCell className="flex items-center flex-row">
                <button
                  onClick={() => {
                    Close(3);
                    toast({
                      title: "Bamboo basket Removed",
                      description: "Bamboo basket Removed From Your Wishlist",
                    });
                  }}
                >
                  <IoClose
                    size={24}
                    className="mr-[10px] -ml-[40px] text-[rgb(108,114,117)]"
                  />
                </button>
                <Image
                  src={Image3}
                  alt=""
                  width={"60"}
                  height={"72"}
                  className="mr-[16px]"
                />
                <div>
                  <h1 className="font-semibold text-[14px] leading-[22px]">
                    Bamboo basket
                  </h1>
                  <h1 className=" text-[rgb(108,114,117)] text-[12px] leading-[20px]">
                    Color: Beige{" "}
                  </h1>
                </div>
              </TableCell>
              <TableCell>
                <h1 className="font-medium text-[14px] leading-[22px]">
                  $ 8.80
                </h1>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    Close(3);
                    toast({
                      title: "Bamboo basket Added to Cart",
                      description: "You can check it in your cart",
                    });
                  }}
                >
                  Add to Cart
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className={clsx(button4 ? "" : "hidden")}>
              <TableCell className="flex items-center flex-row">
                <button
                  onClick={() => {
                    Close(4);
                    toast({
                      title: "Pillow Removed",
                      description: "Pillow Removed From Your Wishlist",
                    });
                  }}
                >
                  <IoClose
                    size={24}
                    className="mr-[10px] -ml-[40px] text-[rgb(108,114,117)]"
                  />
                </button>
                <Image
                  src={Image4}
                  alt=""
                  width={"60"}
                  height={"72"}
                  className="mr-[16px]"
                />
                <div>
                  <h1 className="font-semibold text-[14px] leading-[22px]">
                    Pillow
                  </h1>
                  <h1 className=" text-[rgb(108,114,117)] text-[12px] leading-[20px]">
                    Color: Beige{" "}
                  </h1>
                </div>
              </TableCell>
              <TableCell>
                <h1 className="font-medium text-[14px] leading-[22px]">
                  $ 8.00
                </h1>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    Close(4);
                    toast({
                      title: "Pillow Added to Cart",
                      description: "You can check it in your cart",
                    });
                  }}
                >
                  Add to Cart
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableCaption>
            <div
              className={clsx(
                button1 || button2 || button3 || button4
                  ? "hidden"
                  : "w-full flex justify-center"
              )}
            >
              <h1 className="text-[18px] leading-[28px] text-[rgb(108,114,117)]">
                There is Nothing in Your Wishlist
              </h1>
            </div>
          </TableCaption>
        </Table>
      </section>
      <section className="table:hidden mx-auto">
        <h1 className="text-[18px] leading-[22px] pl-[40px] pb-[8px] text-[rgb(108,114,117)]">
          Product
        </h1>
        <div
          className={clsx(
            "flex flex-col border-b-2 border-t-2 border-[rgb(108,114,117)]",
            button1 || button2 || button3 || button4 ? "" : "hidden"
          )}
        >
          <div className={clsx(button1 ? "" : "hidden", "py-[16px]")}>
            <div className="flex items-center flex-row pb-[16px]">
              <button onClick={() => {
                Close(1);
                toast({ title: "Tray Table Removed" });
              }}>
                <IoClose
                  size={24}
                  className="mr-[10px]  text-[rgb(108,114,117)]"
                />
              </button>
              <Image
                src={Image1}
                alt=""
                width={"60"}
                height={"72"}
                className="mr-[16px]"
              />
              <div>
                <h1 className="font-semibold text-[14px] leading-[22px]">
                  Tray Table
                </h1>
                <h1 className=" text-[rgb(108,114,117)] text-[12px] leading-[20px]">
                  Color: Black{" "}
                </h1>
                <h1 className="font-medium text-[14px] leading-[22px]">
                  $ 19.99
                </h1>
              </div>
            </div>

            <Button
              onClick={() => {
                Close(1);
                toast({ title: "Tray Table Added to Cart" });
              }}
              className="w-full"
            >
              Add to Cart
            </Button>
          </div>

          <div className={clsx(button2 ? "" : "hidden", "py-[16px]")}>
            <div className="flex items-center flex-row pb-[16px]">
              <button onClick={() => {
                Close(2);
                toast({ title: "Sofa Removed" });
              }}>
                <IoClose
                  size={24}
                  className="mr-[10px]  text-[rgb(108,114,117)]"
                />
              </button>
              <Image
                src={Image2}
                alt=""
                width={"60"}
                height={"72"}
                className="mr-[16px]"
              />
              <div>
                <h1 className="font-semibold text-[14px] leading-[22px]">
                  Sofa
                </h1>
                <h1 className=" text-[rgb(108,114,117)] text-[12px] leading-[20px]">
                  Color: Beige{" "}
                </h1>
                <h1 className="font-medium text-[14px] leading-[22px]">
                  $ 345
                </h1>
              </div>
            </div>

            <Button
              onClick={() => {
                Close(2);
                toast({ title: "Sofa Added to Cart" });
              }}
              className="w-full"
            >
              Add to Cart
            </Button>
          </div>

          <div className={clsx(button3 ? "" : "hidden", "py-[16px]")}>
            <div className="flex items-center flex-row pb-[16px]">
              <button onClick={() => {
                Close(3);
                toast({ title: "Bamboo basket Removed" });
              }}>
                <IoClose
                  size={24}
                  className="mr-[10px]  text-[rgb(108,114,117)]"
                />
              </button>
              <Image
                src={Image3}
                alt=""
                width={"60"}
                height={"72"}
                className="mr-[16px]"
              />
              <div>
                <h1 className="font-semibold text-[14px] leading-[22px]">
                  Bamboo basket
                </h1>
                <h1 className=" text-[rgb(108,114,117)] text-[12px] leading-[20px]">
                  Color: Beige{" "}
                </h1>
                <h1 className="font-medium text-[14px] leading-[22px]">
                  $ 8.80
                </h1>
              </div>
            </div>

            <Button
              onClick={() => {
                Close(3);
                toast({ title: "Bamboo basket Added to Cart" });
              }}
              className="w-full"
            >
              Add to Cart
            </Button>
          </div>

          <div className={clsx(button4 ? "" : "hidden", "py-[16px]")}>
            <div className="flex items-center flex-row pb-[16px]">
              <button onClick={() =>{ 
                Close(4)
                toast({ title: "Pillow Removed" })
                }}>
                <IoClose
                  size={24}
                  className="mr-[10px]  text-[rgb(108,114,117)]"
                />
              </button>
              <Image
                src={Image4}
                alt=""
                width={"60"}
                height={"72"}
                className="mr-[16px]"
              />
              <div>
                <h1 className="font-semibold text-[14px] leading-[22px]">
                  Pillow
                </h1>
                <h1 className=" text-[rgb(108,114,117)] text-[12px] leading-[20px]">
                  Color: Beige{" "}
                </h1>
                <h1 className="font-medium text-[14px] leading-[22px]">
                  $ 8.80
                </h1>
              </div>
            </div>

            <Button
              onClick={() => {
                Close(4);
                toast({ title: "Pillow Added to Cart" });
              }}
              className="w-full"
            >
              Add to Cart
            </Button>
          </div>
        </div>
        <div
          className={clsx(
            button1 || button2 || button3 || button4
              ? "hidden"
              : "w-full flex justify-center"
          )}
        >
          <h1 className="text-[18px] leading-[28px] text-[rgb(108,114,117)]">
            There is Nothing in Your Wishlist
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Wishlist;
