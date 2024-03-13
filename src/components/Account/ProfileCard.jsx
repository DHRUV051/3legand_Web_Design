import Image from "next/image";

import { IoCameraOutline } from "react-icons/io5";
import Account from "./Account";

const ProfileCard = () => {
  return (
    <div className="bg-[rgb(243,245,247)] px-[15px] py-[40px] lg:w-[262px] w-full h-fit  lg:col-span-2 mb-[40px]">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-[80px] h-[80px] mx-auto">
          <Image
            src={"/account/User.png"}
            alt=""
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="bg-[rgb(20,23,24)] text-white w-[30px] h-[30px] flex flex-col items-center justify-center rounded-full border-[2px] border-[rgb(255,255,255)] absolute right-0 -bottom-[2px]">
            <IoCameraOutline size={16} />
          </div>
        </div>
        <h1 className="font-semibold leading-[32px] text-[20px] md:leading-[28px] mt-[10px] ">
          Sofia Havertz
        </h1>
      </div>
      <div className="mt-[40px]">
        <Account />
      </div>
    </div>
  );
};

export default ProfileCard;
