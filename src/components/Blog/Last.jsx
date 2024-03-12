import { MdOutlineEmail } from "react-icons/md";
const Last = () => {
  return (
    <main className="lg:bg-[url('/Home/bg.png')] lg:bg-no-repeat lg:bg-cover w-full h-[360px] lg:pt-[101px] px-[32px] py-[95px] bg-[rgb(243,245,247)]">
      <section className="space-y-[8px]">
        <h1 className="text-[rgb(20,23,24)] font-medium text-[28px] leading-[34px] lg:text-[40px] lg:leading-[44px] text-center">
          Join Our Newsletter
        </h1>
        <p className="text-[rgb(20,23,24)] md:text-[18px] md:leading-[30px] text-[16px] leading-[22px] text-center">
          Sign up for deals, new products and promotions
        </p>
      </section>
      <section className="mt-[32px] flex flex-col items-center">
        <div className="flex border-b border-[rgb(108,114,117)] py-[12px] lg:w-[433px] justify-between">
          <div className="flex space-x-[8px]">
            <MdOutlineEmail className="text-[rgb(20,23,24)] w-[24px] h-[24px]" />
            <input
              type="text"
              placeholder="Email address"
              className="bg-transparent focus:outline-none"
            />
          </div>

          <div>
            <button className="text-[rgb(108,114,117)] text-[16px] leading-[28px]">
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Last;
