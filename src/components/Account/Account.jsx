"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Account = () => {
  const pathname = usePathname();

  const createNavItem = (path, label) => (
    <li
      key={path}
      className={clsx(
        pathname === path
          ? "text-[rgb(20,23,24)] border-b-[2px] border-[rgb(20,23,24)]"
          : "text-[rgb(108,114,117)]",
        "font-semibold text-[16px] leading-[26px] w-full" 
      )}
    >
      <Link href={path} prefetch>{label}</Link>
    </li>
  );

  return (
    <div>
      <ul className="space-y-[24px] lg:items-start lg:justify-normal  md:flex-col md:flex md:items-center md:justify-center ">
        {[
          { path: "/home/account", label: "Account" },
          { path: "/home/account/address", label: "Address" },
          { path: "/home/account/orders", label: "Orders" },
          { path: "/home/account/wishlist", label: "Wishlist" },
          { path: "/home/account/logout", label: "Log Out" },
        ].map(({ path, label }) => createNavItem(path, label))}
      </ul>
    </div>
  );
};

export default Account;
