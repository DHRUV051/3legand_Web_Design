import Link from "next/link";
import { CiEdit } from "react-icons/ci";

const AddressCard = () => {
  return (
    <main className="lg:pl-[72px] space-y-[19px]">
      <section className="">
        <h1 className="text-[20px] leading-[32px] font-semibold">Address</h1>
      </section>
      <section className="md:flex md:space-x-[24px] md:space-y-0 space-y-[24px]">
        <div className="border-[2px] border-[rgb(108,114,117)] p-[16px] rounded-[8px] lg:w-[342px]">
          <div className="flex justify-between">
            <h1 className="font-semibold text-[16px] leading-[26px]">
              Billing Address
            </h1>
            <Link href="/account">
              <div className="text-[16px] font-semibold leading-[26px] text-[rgb(108,114,117)] flex space-x-1">
                <CiEdit size={20} className="mt-1" />
                <h1>Edit</h1>
              </div>
            </Link>
          </div>
          <div className="mt-[8px] space-y-1 text-[rgb(20,23,24)] text-[14px] leading-[22px] font-medium">
            <h1>Sofia Havertz</h1>
            <h1>(+1) 234 567 890</h1>
            <h1>345 Long Island, NewYork, United States</h1>
          </div>
        </div>
        <div className="border-[2px] border-[rgb(108,114,117)] p-[16px] rounded-[8px] lg:w-[342px]">
          <div className="flex justify-between">
            <h1 className="font-semibold text-[16px] leading-[26px]">
              Shipping Address
            </h1>
            <Link href="/account">
              <div className="text-[16px] font-semibold leading-[26px] text-[rgb(108,114,117)] flex space-x-1">
                <CiEdit size={20} className="mt-1" />
                <h1>Edit</h1>
              </div>
            </Link>
          </div>
          <div className="mt-[8px] space-y-1 text-[rgb(20,23,24)] text-[14px] leading-[22px] font-medium">
            <h1>Sofia Havertz</h1>
            <h1>(+1) 234 567 890</h1>
            <h1>345 Long Island, NewYork, United States</h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddressCard;
