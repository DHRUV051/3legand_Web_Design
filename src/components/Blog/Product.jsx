"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoApps } from "react-icons/io5";
import { CiGrid2V } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import { useState } from "react";
import { clsx } from "clsx";
import { BlogList } from "@/lib/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Product = () => {
  const [animateclassName, setAnimateclassName] = useState("grid-cols-4");
  const initialVisibleBlogItems = BlogList.slice(0, 9);
  const [visibleBlogItems, setVisibleBlogItems] = useState(
    initialVisibleBlogItems
  );
  const [showMoreCount, setShowMoreCount] = useState(1);
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);

  const router = useRouter();

  const handleShowMore = () => {
    const newVisibleItems = [...visibleBlogItems, ...initialVisibleBlogItems];
    setVisibleBlogItems(newVisibleItems);
    setShowMoreCount(showMoreCount + 1);
  };

  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px]">
      <section className="pt-[24px] pb-[40px]">
        <Tabs defaultValue="allblog" className="w-full">
          <TabsList className="justify-between h-[50px] flex items-center sticky top-0 bg-white z-10">
            <div className="space-x-10 ">
              <TabsTrigger value="allblog" className>
                All Blog
              </TabsTrigger>
              <TabsTrigger value="Featured">Featured</TabsTrigger>
            </div>
            <div className="flex space-x-8">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Catrgory">Catrgory</SelectItem>
                  <SelectItem value="ID">ID</SelectItem>
                </SelectContent>
              </Select>

              <div className="bg-[rgb(255,255,255)] hidden md:flex items-center justify-center outline-[1px] outline outline-[rgb(232,236,239)] divide-x-[1px]  ">
                <button
                  onClick={() => {
                    setAnimateclassName("grid-cols-4");
                    setButton1(true);
                    setButton2(false);
                    setButton3(false);
                    setButton4(false);
                  }}
                  className={clsx(
                    button1 && "bg-[rgb(232,236,239)] fadeInButton",
                    "px-[12.5px] py-[9.5px] text-[rgb(20,23,24)]"
                  )}
                >
                  <IoApps className="w-[21px] h-[21px]  " />
                </button>
                <button
                  onClick={() => {
                    setAnimateclassName("grid-cols-3");
                    setButton1(false);
                    setButton2(true);
                    setButton3(false);
                    setButton4(false);
                  }}
                  className={clsx(
                    button2 && "bg-[rgb(232,236,239)] fadeInButton",
                    "px-[12.5px] py-[9.5px] text-[rgb(20,23,24)]"
                  )}
                >
                  <IoGrid className="w-[21px] h-[21px] text-[rgb(20,23,24)] " />
                </button>
                <button
                  onClick={() => {
                    setAnimateclassName("grid-cols-2");
                    setButton1(false);
                    setButton2(false);
                    setButton3(true);
                    setButton4(false);
                  }}
                  className={clsx(
                    button3 && "bg-[rgb(232,236,239)] fadeInButton",
                    "px-[12.5px] py-[9.5px] text-[rgb(20,23,24)]"
                  )}
                >
                  <CiGrid2V className="w-[21px] h-[21px] text-[rgb(20,23,24)] " />
                </button>
                <button
                  onClick={() => {
                    setAnimateclassName("grid-cols-2");
                    setButton1(false);
                    setButton2(false);
                    setButton3(false);
                    setButton4(true);
                  }}
                  className={clsx(
                    button4 && "bg-[rgb(232,236,239)] fadeInButton",
                    "px-[12.5px] py-[9.5px] text-[rgb(20,23,24)]"
                  )}
                >
                  <CiGrid2H className="w-[21px] h-[21px] text-[rgb(20,23,24)] " />
                </button>
              </div>
            </div>
          </TabsList>
          <TabsContent value="allblog" className={clsx("fadeIn")}>
            <div
              key={animateclassName}
              className={clsx(
                `lg:${animateclassName} md:grid-cols-3 grid-cols-2`,
                "grid gap-4"
              )}
            >
              {visibleBlogItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={clsx("fadeIncard")}
                    onClick={() => router.push(`blog/${index+1 }`)}
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      width=""
                      height=""
                      className="w-full rounded-lg"
                    />
                    <h1 className="mt-[16px] md:mt-[24px] mb-[8px] md:text-[20px]  md:leading-[28px] leading-[26px] text-[14px] md:font-medium font-semibold">
                      {item.title}
                    </h1>
                    <h1 className="text-[rgb(108,114,117)] font-medium text-[12px] leading-[20px]">
                      {item.date}
                    </h1>
                  </div>
                );
              })}
            </div>

            <div className="mb-[80px] lg:my-[80px] flex items-center justify-center">
              <button
                onClick={handleShowMore}
                disabled={showMoreCount > 5}
                className="text-[16px] leading-[26px] font-medium border-[2px] border-[rgb(20,23,24)] text-[rgb(20,23,24)] rounded-[80px] px-[40px] py-[6px] order-2"
              >
                Show more
              </button>
            </div>
          </TabsContent>

          <TabsContent value="Featured">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            tempora obcaecati itaque placeat animi sed aperiam deleniti ab quas?
            Alias, deleniti possimus quisquam praesentium similique architecto
            eos velit assumenda! Quasi incidunt illo, dolorum repudiandae
            quibusdam nobis, aut perferendis vel tenetur laudantium praesentium
            ea! Dolor eos illum fugit tenetur incidunt placeat hic ex distinctio
            in nobis ipsa nulla quis, quidem consectetur aliquid eveniet
            quisquam beatae magnam repudiandae aut nihil, sed reiciendis
            provident repellat. Voluptate omnis sapiente est animi commodi
            fugiat nobis explicabo, optio consectetur? Earum eligendi repellat
            quas iusto labore voluptas aperiam quasi reiciendis minima vero
            molestias enim ab aliquid, accusantium, perferendis, facilis sed
            autem sequi? Tempore, tempora veritatis aperiam incidunt veniam
            dolor exercitationem id itaque ullam eius sed magni earum neque
            recusandae accusamus quam totam? Eaque sed suscipit aliquam
            provident illum eveniet. Itaque ut optio reprehenderit numquam sint
            maiores, ullam aliquam, accusamus vero sit, impedit minus ipsam
            deserunt? Optio iste nihil facilis ipsa quis necessitatibus ullam
            alias minima voluptate recusandae vero, nam repudiandae minus magni
            sit omnis hic corporis dolorum nesciunt quod, aspernatur quibusdam
            nulla dolorem. Quis quibusdam, animi aperiam officiis magni fugiat
            voluptatibus velit sunt, tenetur illo dignissimos ipsam eligendi
            nesciunt temporibus eius vitae architecto iusto. Reiciendis
            similique nihil voluptatem laboriosam, dolorum nobis sapiente
            laudantium minus officia, distinctio natus inventore facilis ea ut!
            Voluptate totam blanditiis nihil, sed similique amet ex facilis
            rerum magni sint quo, modi assumenda porro minima tempora ut
            mollitia sapiente exercitationem necessitatibus nisi sit. Optio
            culpa doloremque similique mollitia sint quas beatae fuga
            repudiandae quae distinctio deserunt aperiam aut, dignissimos,
            facere inventore asperiores excepturi cum nam. Adipisci cumque enim
            exercitationem consequatur, perspiciatis assumenda earum pariatur
            ratione aperiam vitae animi praesentium eligendi dolorum delectus
            sint, voluptas beatae rerum minima nulla fuga! Rerum laudantium
            quasi dolor, aliquam nostrum, quisquam veniam vero dignissimos autem
            labore recusandae eligendi laborum commodi. Quae perspiciatis quas
            alias. Rem, dignissimos. Labore nemo explicabo soluta aspernatur, a
            voluptate autem mollitia molestiae perspiciatis cumque accusantium
            quidem aliquam! Officia perspiciatis nostrum necessitatibus odio
            ipsa. Veritatis et iure voluptates numquam natus quasi iste, totam
            rerum fugit consectetur perferendis, tempore sapiente quis voluptas
            minus, obcaecati at eius? Ad neque magni impedit! Quas aspernatur
            similique obcaecati nesciunt deserunt a quidem, veritatis voluptas?
            Nobis voluptatibus ratione pariatur, obcaecati qui totam eaque ad
            magni deleniti voluptatum quas dolor, molestias illum eum possimus
            omnis laboriosam. Provident rem accusantium id! Sit fugiat natus
            dolor voluptate fuga eligendi eum? Ducimus dicta dolorum, sapiente
            molestiae reiciendis unde numquam hic maxime praesentium, voluptatem
            tenetur illo voluptatum deleniti voluptate doloremque autem dolores
            laborum iure debitis aliquam nesciunt. Consequatur repudiandae enim
            nihil quidem quia, commodi numquam. Exercitationem assumenda magnam,
            fugit beatae illum soluta impedit veritatis corrupti porro inventore
            mollitia accusamus sapiente laboriosam in debitis consectetur ipsum,
            nostrum voluptas tempore repellendus iure quam laudantium? Ad
            molestiae aspernatur eveniet rerum minus aperiam, optio corporis
            quae voluptas vitae vero consequuntur et quisquam consequatur
            provident mollitia dolorem aut cum voluptates eius sapiente
            veritatis. Laudantium, non explicabo quo nihil qui fuga dolorem
            recusandae enim, deleniti animi aut sed quasi fugit. Tenetur, harum
            dolorum.
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default Product;
