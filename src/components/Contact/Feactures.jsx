import Image from "next/image";
import Shipping from "../../../public/Home/fast delivery.png";
import Call from "../../../public/Home/call.png";
import Lock from "../../../public/Home/lock.png";
import Money from "../../../public/Home/money.png";
import clsx from "clsx";
import { forwardRef } from "react";

const Feactures = () => {
  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px] bg-[rgb(243,245,247)] ">
      <section
        className={clsx(
          "py-[32px] md:py-[48px] grid lg:grid-cols-4 grid-cols-2 md:gap-[24px] gap-x-[8px] gap-y-[24px]"
        )}
      >
        <div className="bg-[rgb(243,245,247)] px-[16px] py-[32px] md:px-[16px] md:py-[32px] space-y-[16px] ">
          <Image
            src={Shipping}
            alt=""
            width=""
            height=""
            className=""
            loading="lazy"
          />
          <div className="space-y-[8px]">
            <h1 className="font-semibold text-[12px] leading-[22px] md:font-medium md:text-[20px] md:leading-[28px] text-[rgb(20,23,24)]">
              Free Shipping
            </h1>
            <h1 className="text-[12px] leading-[22px] md:text-[18px] font-medium text-[rgb(108,114,117)] md:leading-[24px]">
              Order above $200
            </h1>
          </div>
        </div>
        <div className="bg-[rgb(243,245,247)] px-[16px] py-[32px] md:px-[16px] md:py-[32px] space-y-[16px]">
          <Image
            src={Money}
            alt=""
            width=""
            height=""
            className=""
            loading="lazy"
          />
          <div className="space-y-[8px]">
            <h1 className="font-semibold text-[12px] leading-[22px] md:font-medium md:text-[20px] md:leading-[28px] text-[rgb(20,23,24)]">
              Money-back
            </h1>
            <h1 className="text-[12px] leading-[22px] md:text-[18px]  font-medium text-[rgb(108,114,117)] md:leading-[24px]">
              30 days guarantee
            </h1>
          </div>
        </div>

        <div className="bg-[rgb(243,245,247)] px-[16px] py-[32px] md:px-[16px] md:py-[32px] space-y-[16px]">
          <Image
            src={Lock}
            alt=""
            width=""
            height=""
            className=""
            loading="lazy"
          />
          <div className="space-y-[8px]">
            <h1 className="font-semibold text-[12px] leading-[22px] md:font-medium md:text-[20px] md:leading-[28px] text-[rgb(20,23,24)]">
              Secure Payments
            </h1>
            <h1 className="text-[12px] leading-[22px] md:text-[18px] font-medium text-[rgb(108,114,117)] md:leading-[24px]">
              Secured by Stripe
            </h1>
          </div>
        </div>

        <div className="bg-[rgb(243,245,247)] px-[16px] py-[32px] md:px-[16px] md:py-[32px] space-y-[16px]">
          <Image
            src={Call}
            alt=""
            width=""
            height=""
            className=""
            loading="lazy"
          />
          <div className="space-y-[8px]">
            <h1 className="font-semibold text-[12px] leading-[22px] md:font-medium md:text-[20px] md:leading-[28px] text-[rgb(20,23,24)]">
              24/7 Support
            </h1>
            <h1 className="text-[12px] leading-[22px] md:text-[18px] font-medium text-[rgb(108,114,117)] md:leading-[24px]">
              Phone and Email support
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default forwardRef(Feactures);
