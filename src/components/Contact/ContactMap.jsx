import React from "react";
import RequestMap from "./req";
import ContactForm from "./ContactForm";
import dynamic from "next/dynamic";

const Dynamic = dynamic(() => import("./ContactForm"), {
  ssr: false,
});

const ContactMap = () => {
  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px] flex flex-col lg:flex-row  gap-[40px] pb-[40px] md:pb-[80px]">
      <section className="w-full h-[404px] order-1 lg:order-last ">
        <RequestMap suppressHydrationWarning />
      </section>
      <section className="w-full  order-2  ">
        <Dynamic />
      </section>
    </main>
  );
};

export default ContactMap;
