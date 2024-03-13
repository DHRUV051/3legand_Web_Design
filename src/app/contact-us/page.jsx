'use client';
import ContactAbout from "@/components/Contact/ContactAbout";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactIntro from "@/components/Contact/ContactInfto";
import ContactMap from "@/components/Contact/ContactMap";
import Feactures from "@/components/Contact/Feactures";
import React from "react";

const page = () => {
  return (
    <>
      <ContactIntro />
      <ContactAbout />
      <ContactInfo suppressHydrationWarning/>
      <ContactMap suppressHydrationWarning />
      <Feactures suppressHydrationWarning/>
    </>
  );
};

export default page;
