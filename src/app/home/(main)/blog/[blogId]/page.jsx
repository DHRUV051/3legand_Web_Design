"use client";

import Articles from "@/components/BlogPost/Articles";
import Blog from "@/components/BlogPost/Blog";
import Intro from "@/components/BlogPost/intro";
import Last from "@/components/Home/Last";

const page = () => {
  return (
    <main className="pt-4">
      <Intro />
      <Blog />
      <Articles />
      <Last />
    </main>
  );
};

export default page;
