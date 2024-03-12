"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoApps } from "react-icons/io5";
import { CiGrid2V } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { BlogList } from "@/lib/constant";
import Image from "next/image";

const Product = () => {
  const [classname, setClassName] = useState("grid-cols-4");
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  console.log(classname);
  useEffect(() => {
    const handle = () => {
      router.reload();
    };
  }, [classname]);

  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px]">
      <section className="pt-[24px] pb-[40px]">
        <Tabs defaultValue="allblog" className="w-full">
          <TabsList className="justify-between">
            <div className="space-x-10">
              <TabsTrigger value="allblog" className>
                All Blog
              </TabsTrigger>
              <TabsTrigger value="Featured">Featured</TabsTrigger>
            </div>
            <div className="flex space-x-8">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Catrgory">Catrgory</SelectItem>
                  <SelectItem value="ID">ID</SelectItem>
                </SelectContent>
              </Select>

              <div className="bg-[rgb(255,255,255)] hidden md:flex items-center justify-center outline-[1px] outline outline-[rgb(232,236,239)] divide-x-[1px]  ">
                <button
                  onClick={() => {
                    setClassName("grid-cols-4");
                    setButton1(true);
                    setButton2(false);
                    setButton3(false);
                    setButton4(false);
                  }}
                  className={clsx(
                    button1 && "bg-[rgb(232,236,239)] fadeInButton",
                    "px-[12.5px] py-[9.5px] text-[rgb(20,23,24)]"
                  )}
                >
                  <IoApps className="w-[21px] h-[21px]  " />
                </button>
                <button
                  onClick={() => {
                    setClassName("grid-cols-3");
                    setButton1(false);
                    setButton2(true);
                    setButton3(false);
                    setButton4(false);
                  }}
                  className={clsx(
                    button2 && "bg-[rgb(232,236,239)] fadeInButton",
                    "px-[12.5px] py-[9.5px] text-[rgb(20,23,24)]"
                  )}
                >
                  <IoGrid className="w-[21px] h-[21px] text-[rgb(20,23,24)] " />
                </button>
                <button
                  onClick={() => {
                    setClassName("grid-cols-2");
                    setButton1(false);
                    setButton2(false);
                    setButton3(true);
                    setButton4(false);
                  }}
                  className={clsx(
                    button3 && "bg-[rgb(232,236,239)] fadeInButton",
                    "px-[12.5px] py-[9.5px] text-[rgb(20,23,24)]"
                  )}
                >
                  <CiGrid2V className="w-[21px] h-[21px] text-[rgb(20,23,24)] " />
                </button>
                <button
                  onClick={() => {
                    setClassName("grid-cols-2");
                    setButton1(false);
                    setButton2(false);
                    setButton3(false);
                    setButton4(true);
                  }}
                  className={clsx(
                    button4 && "bg-[rgb(232,236,239)] fadeInButton",
                    "px-[12.5px] py-[9.5px] text-[rgb(20,23,24)]"
                  )}
                >
                  <CiGrid2H className="w-[21px] h-[21px] text-[rgb(20,23,24)] " />
                </button>
              </div>
            </div>
          </TabsList>
          <TabsContent value="allblog" classname={clsx("fadeIn")}>
            <div key={classname} className={clsx(`${classname}`, "grid gap-4")}>
              {BlogList.map((item, index) => {
                return (
                  <div key={index} className="fadeIncard">
                    <Image
                      src={item.image}
                      alt=""
                      width=""
                      height=""
                      className="w-full"
                    />
                    <h1 className="mt-[16px] md:mt-[24px] mb-[8px] md:text-[20px]  md:leading-[28px] leading-[26px] text-[16px] md:font-medium font-semibold">
                      {item.title}
                    </h1>
                    <h1 className="text-[rgb(108,114,117)] font-medium text-[12px] leading-[20px]">
                      {item.date}
                    </h1>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="Featured">Change your password here.</TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default Product;
