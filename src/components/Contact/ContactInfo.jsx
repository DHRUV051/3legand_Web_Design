import { TbBuildingStore } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <main className="py-[32px] md:py-[50px] px-[32px] md:px-[60px] lg:px-[160px]">
      <section>
        <h1 className="text-center text-[rgb(20,23,24)] text-[24px] leading-[28px] md:text-[28px] md:leading-[36px] lg:text-[40px] lg:leading-[44px] font-medium">
          Contact Us
        </h1>
      </section>
      <section className="pt-[40px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px]">
        <div className="bg-[rgb(243,245,247)] flex flex-col items-center  px-[32px] py-[16px] ">
          <TbBuildingStore size={32} className=" w-[32px] h-[32px]" />
          <h1 className="pt-[16px] font-bold text-[16px] leading-[16px] uppercase text-[rgb(108,114,117)]">
            Address
          </h1>
          <p className="text-center pt-[8px] text-[rgb(20,23,24)] font-semibold lg:text-[16px] leading-[26px] w-[80%] md:w-full lg:w-[80%]">
            234 Hai Trieu, Ho Chi Minh City, Viet Nam
          </p>
        </div>
        <div className="bg-[rgb(243,245,247)] flex flex-col items-center  px-[32px] py-[16px] ">
          <FiPhone size={32} className=" w-[32px] h-[32px]" />
          <h1 className="pt-[16px] font-bold text-[16px] leading-[16px] uppercase text-[rgb(108,114,117)]">
            Contact Us
          </h1>
          <p className="text-center pt-[8px] text-[rgb(20,23,24)] font-semibold text-[16px] leading-[26px]">
            +84 234 567 890
          </p>
        </div>

        <div className="bg-[rgb(243,245,247)] flex flex-col items-center px-[32px] py-[16px]">
          <MdOutlineMail size={32} />
          <h1 className="pt-[16px] font-bold text-[16px] leading-[16px] uppercase text-[rgb(108,114,117)]">
            Email
          </h1>
          <p className="text-center pt-[8px] text-[rgb(20,23,24)] font-semibold text-[16px] leading-[26px]">
            hello@3legant.com
          </p>
        </div>

        <div className="bg-[rgb(243,245,247)] md:flex flex-col items-center justify-center px-[32px] py-[16px] lg:hidden hidden">
               <h1 className="text-[rgb(20,23,24)] font-bold text-[40px]">3legant</h1>     
        </div>

      </section>
    </main>
  );
};

export default ContactInfo;
