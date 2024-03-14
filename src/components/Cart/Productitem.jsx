"use client";

import Image from "next/image";
import { IoClose } from "react-icons/io5";

import Image1 from "../../../public/Account/tray.png";
import Image2 from "../../../public/Account/redtary.png";
import Image3 from "../../../public/Account/lamp.png";

import { Button } from "../ui/button";
import { useState } from "react";
import clsx from "clsx";
import { useToast } from "../ui/use-toast";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { Input } from "../ui/input";
import { RiCouponLine } from "react-icons/ri";

const Productitem = () => {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(true);
  const [button3, setButton3] = useState(true);
  const [shipping, setShipping] = useState(0);

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);

  const DecreaseButton = (n) => {
    if (n == 1) {
      setCount1((count1) => count1 - 1);
    } else if (n == 2) {
      setCount2((count2) => count2 - 1);
    } else if (n == 3) {
      setCount3((count3) => count3 - 1);
    }
  };

  const IncreaseButton = (n) => {
    if (n == 1) {
      setCount1((count1) => count1 + 1);
    } else if (n == 2) {
      setCount2((count2) => count2 + 1);
    } else if (n == 3) {
      setCount3((count3) => count3 + 1);
    }
  };

  const { toast } = useToast();

  const Close = (n) => {
    if (n === 1) {
      setButton1(false);
    } else if (n === 2) {
      setButton2(false);
    } else if (n === 3) {
      setButton3(false);
    }
  };

  return (
    <main className="grid lg:grid-cols-12 gap-[64px]">
      <section className="lg:col-span-8 lg:block hidden">
        <Table className="w-full border-b">
          <TableHeader>
            <TableRow className="justify-between">
              <TableHead className="w-1/2">Product</TableHead>
              <TableHead className="w-1/3">Quantity</TableHead>
              <TableHead className="w-1/3">Price</TableHead>
              <TableHead className="w-1/3">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className={clsx(button1 ? "" : "hidden")}>
              <TableCell className="flex items-center flex-row">
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
                  <button
                    className="flex items-center justify-center"
                    onClick={() => {
                      Close(1);
                      toast({
                        title: "Tray Table Removed",
                        description: "Tray Table Removed From Your Cart",
                      });
                    }}
                  >
                    <IoClose size={24} className="  text-[rgb(108,114,117)]" />
                    <span className="text-[14px] leading-[22px] text-[rgb(108,114,117)] font-semibold ">
                      Remove
                    </span>
                  </button>
                </div>
              </TableCell>
              <TableCell>
                <div className="w-fit px-[10px] py-[5px] flex space-x-2 border-[2px] rounded-lg border-[rgb(20,23,24)]">
                  <button
                    disabled={count1 <= 1}
                    onClick={() => DecreaseButton(1)}
                  >
                    -
                  </button>
                  <h1 className="text-[14px] leading-[22px]">{count1}</h1>
                  <button onClick={() => IncreaseButton(1)}>+</button>
                </div>
              </TableCell>
              <TableCell>
                <h1 className="font-medium text-[14px] leading-[22px]">
                  $ 19.19
                </h1>
              </TableCell>
              <TableCell>
                <h1 className="font-semibold text-[18px] leading-[30px]">
                  {(Math.round(count1 * 19.19 * 100) / 100).toFixed(2)}
                </h1>
              </TableCell>
            </TableRow>
            <TableRow className={clsx(button2 ? "" : "hidden")}>
              <TableCell className="flex items-center flex-row">
                <Image
                  src={Image2}
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
                    Color: Red
                  </h1>
                  <button
                    className="flex items-center justify-center"
                    onClick={() => {
                      Close(2);
                      toast({
                        title: "Tray Table Removed",
                        description: "Tray Table Removed From Your Cart",
                      });
                    }}
                  >
                    <IoClose size={24} className="  text-[rgb(108,114,117)]" />
                    <span className="text-[14px] leading-[22px] text-[rgb(108,114,117)] font-semibold ">
                      Remove
                    </span>
                  </button>
                </div>
              </TableCell>
              <TableCell>
                <div className="w-fit px-[10px] py-[5px] flex space-x-2 border-[2px] rounded-lg border-[rgb(20,23,24)]">
                  <button
                    disabled={count2 <= 1}
                    onClick={() => DecreaseButton(2)}
                  >
                    -
                  </button>
                  <h1 className="text-[14px] leading-[22px]">{count2}</h1>
                  <button onClick={() => IncreaseButton(2)}>+</button>
                </div>
              </TableCell>
              <TableCell>
                <h1 className="font-medium text-[14px] leading-[22px]">
                  $ 19.00
                </h1>
              </TableCell>
              <TableCell>
                <h1 className="font-semibold text-[18px] leading-[30px]">
                  {(Math.round(count1 * 19 * 100) / 100).toFixed(2)}
                </h1>
              </TableCell>
            </TableRow>
            <TableRow className={clsx(button3 ? "" : "hidden")}>
              <TableCell className="flex items-center flex-row">
                <Image
                  src={Image3}
                  alt=""
                  width={"60"}
                  height={"72"}
                  className="mr-[16px]"
                />
                <div>
                  <h1 className="font-semibold text-[14px] leading-[22px]">
                    Table lamp
                  </h1>
                  <h1 className=" text-[rgb(108,114,117)] text-[12px] leading-[20px]">
                    Color: Gold
                  </h1>
                  <button
                    className="flex items-center justify-center"
                    onClick={() => {
                      Close(3);
                      toast({
                        title: "Tray Table Removed",
                        description: "Tray Table Removed From Your Cart",
                      });
                    }}
                  >
                    <IoClose size={24} className="  text-[rgb(108,114,117)]" />
                    <span className="text-[14px] leading-[22px] text-[rgb(108,114,117)] font-semibold ">
                      Remove
                    </span>
                  </button>
                </div>
              </TableCell>
              <TableCell>
                <div className="w-fit px-[10px] py-[5px] flex space-x-2 border-[2px] rounded-lg border-[rgb(20,23,24)]">
                  <button
                    disabled={count3 <= 1}
                    onClick={() => DecreaseButton(3)}
                  >
                    -
                  </button>
                  <h1 className="text-[14px] leading-[22px]">{count3}</h1>
                  <button onClick={() => IncreaseButton(3)}>+</button>
                </div>
              </TableCell>
              <TableCell>
                <h1 className="font-medium text-[14px] leading-[22px]">
                  $ 39.00
                </h1>
              </TableCell>
              <TableCell>
                <h1 className="font-semibold text-[18px] leading-[30px]">
                  {(Math.round(count3 * 39 * 100) / 100).toFixed(2)}
                </h1>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableCaption>
            <div
              className={clsx(
                button1 || button2 || button3
                  ? "hidden"
                  : "w-full flex justify-center"
              )}
            >
              <h1 className="text-[18px] leading-[28px] text-[rgb(108,114,117)]">
                There is Nothing in Your Cart
              </h1>
            </div>
          </TableCaption>
        </Table>
        <div className="my-[24px] lg:my-[80px]">
          <h1 className="font-medium text-[20px] leading-[28px] ">
            Have a coupon?
          </h1>
          <h1 className="text-[16px] font-normal leading-[26px] text-[rgb(108,114,117)]">
            Add your code for an instant cart discount
          </h1>
          <div className="mt-[16px] flex px-[16px] border-[1px] border-[rgb(108,114,117)] w-[424px] justify-between  ">
            <div className="flex py-[8px]">
              <RiCouponLine size={24} className="text-[rgb(108,114,117)]" />
              <input
                type="text"
                className="ml-2 w-[200px] outline-none focus:outline-none placeholder:font-medium placeholder:leading-[26px] placeholder:text-[16px] placeholder:text-[rgb(108,114,117)]"
                placeholder="Coupon Code"
              />
            </div>

            <button className="ml-2">Apply</button>
          </div>
        </div>
      </section>

      <section className="lg:hidden">
        <h1 className="text-[18px] leading-[22px] pl-[40px] pb-[8px] text-[rgb(108,114,117)]">
          Product
        </h1>
        <div
          className={clsx(
            "flex flex-col border-b-2 border-t-2 border-[rgb(108,114,117)]",
            button1 || button2 || button3 ? "" : "hidden"
          )}
        >
          <div
            className={clsx(
              button1 ? "" : "hidden",
              "py-[16px]",
              "flex justify-between"
            )}
          >
            <div className="flex items-center flex-row pb-[16px]">
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
                  Color: Black
                </h1>
                <div className="w-fit px-[20px] py-[5px] flex space-x-2 border-[2px] rounded-lg border-[rgb(20,23,24)] justify-between mt-2">
                  <button
                    disabled={count1 <= 1}
                    onClick={() => DecreaseButton(1)}
                  >
                    -
                  </button>
                  <h1 className="text-[14px] leading-[22px]">{count1}</h1>
                  <button onClick={() => IncreaseButton(1)}>+</button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-end">
                <h1 className="font-semibold text-[14px] leading-[22px] mt-2">
                  $ {(Math.round(count1 * 19.99 * 100) / 100).toFixed(2)}
                </h1>
              </div>
              <div>
                <button
                  className="ml-[50px]"
                  onClick={() => {
                    Close(1);
                    toast({ title: "Table Tray Removed" });
                  }}
                >
                  <IoClose
                    size={24}
                    className="mr-[10px]  text-[rgb(108,114,117)]"
                  />
                </button>
              </div>
            </div>
          </div>

          <div
            className={clsx(
              button2 ? "" : "hidden",
              "py-[16px]",
              "flex justify-between"
            )}
          >
            <div className="flex items-center flex-row pb-[16px]">
              <Image
                src={Image2}
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
                  Color: Red
                </h1>
                <div className="w-fit px-[20px] py-[5px] flex space-x-2 border-[2px] rounded-lg border-[rgb(20,23,24)] justify-between mt-2">
                  <button
                    disabled={count2 <= 1}
                    onClick={() => DecreaseButton(2)}
                  >
                    -
                  </button>
                  <h1 className="text-[14px] leading-[22px]">{count2}</h1>
                  <button onClick={() => IncreaseButton(2)}>+</button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-end">
                <h1 className="font-semibold text-[14px] leading-[22px] mt-2">
                  $ {(Math.round(count2 * 19.0 * 100) / 100).toFixed(2)}
                </h1>
              </div>
              <div>
                <button
                  className="ml-[50px]"
                  onClick={() => {
                    Close(2);
                    toast({ title: "Table Tray Removed" });
                  }}
                >
                  <IoClose
                    size={24}
                    className="mr-[10px]  text-[rgb(108,114,117)]"
                  />
                </button>
              </div>
            </div>
          </div>

          <div
            className={clsx(
              button3 ? "" : "hidden",
              "py-[16px]",
              "flex justify-between"
            )}
          >
            <div className="flex items-center flex-row pb-[16px]">
              <Image
                src={Image3}
                alt=""
                width={"60"}
                height={"72"}
                className="mr-[16px]"
              />
              <div>
                <h1 className="font-semibold text-[14px] leading-[22px]">
                  Table lamp
                </h1>
                <h1 className=" text-[rgb(108,114,117)] text-[12px] leading-[20px]">
                  Color: Gold
                </h1>
                <div className="w-fit px-[20px] py-[5px] flex space-x-2 border-[2px] rounded-lg border-[rgb(20,23,24)] justify-between mt-2">
                  <button
                    disabled={count3 <= 1}
                    onClick={() => DecreaseButton(3)}
                  >
                    -
                  </button>
                  <h1 className="text-[14px] leading-[22px]">{count2}</h1>
                  <button onClick={() => IncreaseButton(3)}>+</button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-end">
                <h1 className="font-semibold text-[14px] leading-[22px] mt-2">
                  $ {(Math.round(count2 * 39 * 100) / 100).toFixed(2)}
                </h1>
              </div>
              <div>
                <button
                  className="ml-[50px]"
                  onClick={() => {
                    Close(3);
                    toast({ title: "Table lamp Removed" });
                  }}
                >
                  <IoClose
                    size={24}
                    className="mr-[10px]  text-[rgb(108,114,117)]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            button1 || button2 || button3
              ? "hidden"
              : "w-full flex justify-center"
          )}
        >
          <h1 className="text-[18px] leading-[28px] text-[rgb(108,114,117)]">
            There is Nothing in your cart
          </h1>
        </div>

        <div className="my-[24px] lg:my-[80px]">
          <h1 className="font-medium text-[20px] leading-[28px] ">
            Have a coupon?
          </h1>
          <h1 className="text-[16px] font-normal leading-[26px] text-[rgb(108,114,117)]">
            Add your code for an instant cart discount
          </h1>
          <div className="mt-[16px] flex px-[16px] border-[1px] border-[rgb(108,114,117)] w-[250px] justify-between  ">
            <div className="flex py-[8px]">
              <RiCouponLine size={24} className="text-[rgb(108,114,117)]" />
              <input
                type="text"
                className="ml-2 w-[100px] outline-none focus:outline-none placeholder:font-medium placeholder:leading-[26px] placeholder:text-[16px] placeholder:text-[rgb(108,114,117)]"
                placeholder="Coupon Code"
              />
            </div>

            <button className="ml-2">Apply</button>
          </div>
        </div>
      </section>

      <section className="border-[2px] border-[rgb(108,114,117)] p-[24px] lg:col-span-4 h-fit rounded-[6px]">
        <h1 className="font-medium text-[22px] leading-[32px] pb-[16px]">
          Cart summary
        </h1>

        <RadioGroup defaultValue="freeshipping">
          <div className="w-full flex items-center space-x-2 bg-[rgb(243,245,247)] px-[16px] py-[13px] border-[2px] border-[rgb(20,23,24)] rounded-[4px]">
            <RadioGroupItem
              value="freeshipping"
              id="freeshipping"
              onClick={() => setShipping(0)}
            />
            <div className="w-full justify-between text-[16px] font-normal leading-[26px] flex">
              <div>
                <h1 htmlFor="freeshipping">Free shipping</h1>
              </div>
              <div className="ml-auto">
                <h1>$0.00</h1>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center space-x-2 bg-[rgb(243,245,247)] px-[16px] py-[13px] border-[2px] border-[rgb(20,23,24)] rounded-[4px]">
            <RadioGroupItem
              value="expressshipping"
              id="expressshipping"
              onClick={() => setShipping(15.0)}
            />
            <div className="w-full justify-between text-[16px] font-normal leading-[26px] flex">
              <div>
                <h1 htmlFor="freeshipping">Express shipping</h1>
              </div>
              <div className="ml-auto">
                <h1>+$15.00</h1>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center space-x-2 bg-[rgb(243,245,247)] px-[16px] py-[13px] border-[2px] border-[rgb(20,23,24)] rounded-[4px]">
            <RadioGroupItem
              value="pickup"
              id="pickup"
              onClick={() => setShipping(21.0)}
            />
            <div className="w-full justify-between text-[16px] font-normal leading-[26px] flex">
              <div>
                <h1 htmlFor="freeshipping">Pick Up</h1>
              </div>
              <div className="ml-auto">
                <h1>+$21.00</h1>
              </div>
            </div>
          </div>
        </RadioGroup>

        <div className="divide-y">
          <div className="w-full justify-between flex py-[16px]">
            <h1 className="text-[16px] leading-[26px] font-normal">Subtotal</h1>
            <h1 className="font-semibold text-[16px] leading-[26px]">
              {button1 || button2 || button3
                ? (
                    Math.round(
                      (count1 * 19.19 + count2 * 19 + count3 * 39) * 100
                    ) / 100
                  ).toFixed(2)
                : "0.00"}
            </h1>
          </div>
          <div className="w-full justify-between flex pt-[16px]">
            <h1 className="font-semibold text-[16px] leading-[26px]">Total</h1>
            <h1 className="font-semibold text-[16px] leading-[26px]">
              {button1 || button2 || button3
                ? (
                    Math.round(
                      (count1 * 19.19 + count2 * 19 + count3 * 39 + shipping) *
                        100
                    ) / 100
                  ).toFixed(2)
                : "0.00"}
            </h1>
          </div>
        </div>

        <Link href="/home/checkout">
          <Button className="w-full mt-[32px]">Checkout</Button>
        </Link>
      </section>
    </main>
  );
};

export default Productitem;
