"use client";

import Image from "next/image";
import Chair from "../../../public/sign-in/chair.png";
import { useForm } from "react-hook-form";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";
import Link from "next/link";

const page = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const onSubmit = (data) => console.log(data);

  return (
    <main className="lg:flex lg:h-full">
      <section className="hidden lg:block py-[20px]  bg-[rgb(243,245,247)]   lg:w-1/2 lg:h-screen">
        <h1 className="text-center font-medium text-[24px] ">3legant.</h1>

        <Image
          src={Chair}
          alt=""
          width=""
          height=""
          className="mx-auto -mt-[50px] lg:mt-0 lg:w-[500px]"
        />
      </section>
      <section className="lg:mt-[200px] w-full lg:px-[100px] px-[20px] my-[50px]  md:flex md:flex-col md:items-center lg:flex lg:flex-col lg:items-start  lg:w-1/2">
        <h1 className="text-[40px] font-medium leading-[44px]">Sign In</h1>
        <p className="mt-[10px] text-[16px] leading-[26px] text-[rgb(108,114,117)]">
          Don’t have an accout yet?
          <Link href="/sign-up" className="ml-2 font-semibold text-[rgb(56,203,137)]">Sign Up</Link>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-[32px]">
          <label className="w-full">
            <input
              type="text"
              placeholder="Your username or email address"
              className="focus:outline-none selection:outline-none pt-[6px] pb-[8px] w-full md:w-[350px] lg:w-[400px]"
              suggested="username"
              {...register("username")}
            />
            <div
              className="bg-[rgb(232,236,239)] border border-[rgb(232,236,239)]
              h-[1.5px] w-full md:w-[350px] lg:w-[400px]"
            ></div>
          </label>

          <label className="w-full ">
            <div className="flex relative">
              <input
                type={type}
                placeholder="Password"
                className="focus:outline-none selection:outline-none pt-[6px] pb-[8px]  w-full md:w-[350px] lg:w-[400px] mt-[32px]"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                {...register("password")}
              />
              <span
                className="flex justify-around items-center"
                onClick={handleToggle}
              >
                <Icon className="absolute top-9 mr-10" style={{color: 'rgb(108,114,117)'}} icon={icon} size={20} />
              </span>



            </div>
            <div
              className="bg-[rgb(232,236,239)] border border-[rgb(232,236,239)]
              h-[1.5px] w-full md:w-[350px] lg:w-[400px]"
            ></div>

          </label>

          <label>
            <div className="mt-[32px] flex justify-between">
              <h1 className="text-[rgb(108,114,117)] text-[14px] lg:text-[16px] md:[16px]   font-normal leading-[26px]">
                <input type="checkbox" name="Remember me" className="mr-[8px] pt-2 w-3 h-3" required />
                Remember me
              </h1>
              <h1 className="text-[rgb(20,23,24)] text-[14px] lg:text-[16px] md:[16px]  font-bold leading-[26px]">  

                Forgot Password?

              </h1>
            </div>
          </label>

          <label> 
                  <button type="submit" className="mt-[32px] text-center bg-[rgb(20,23,24)]  text-white w-full rounded-[8px] py-[8px]">
                         Submit     
                  </button>
          </label>

        </form>
      </section>
    </main>
  );
};

export default page;

