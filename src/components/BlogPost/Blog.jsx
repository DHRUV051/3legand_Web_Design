import Image from "next/image";
import Article1 from "../../../public/Blog/Article1.png";
import Article2 from "../../../public/Blog/Article2.png";
import Article3 from "../../../public/Blog/Article3.png";
import Article from "../../../public/Blog/Article.png";

const Blog = ({ blogId }) => {
  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px]">
      <section>
        <div className="w-full">
          <Image
            src={Article1}
            alt=""
            width=""
            height=""
            className="object-cover md:w-full md:h-full  h-[407px] "
          />
        </div>
        <div className="pt-[16px] lg:pt-[40px]">
          <h1 className="text-[16px] leading-[26px]">
            Your bathroom serves a string of busy functions on a daily basis.
            See how you can make all of them work, and still have room for
            comfort and relaxation.
          </h1>
        </div>
      </section>
      <section className="hidden lg:block">
        <div>
          <h1 className="font-medium text-[28px] leading-[34px]">
            A cleaning hub with built-in ventilation
          </h1>
          <p className="text-[16px] leading-[26px]">
            Use a rod and a shower curtain to create a complement to your
            cleaning cupboard. Unsightly equipment is stored out of sight yet
            accessibly close – while the air flow helps dry any dampness.
          </p>
        </div>
        <div className="lg:flex w-full md:space-x-[24px] space-y-[16px] md:space-y-0 py-10">
          <Image
            src={Article2}
            alt=""
            width=""
            height=""
            className="object-cover  w-full h-[500px]"
          />
          <Image
            src={Article3}
            alt=""
            width=""
            height=""
            className="object-cover w-full  h-[500px]"
          />
        </div>
        <div>
          <h1 className="font-medium text-[28px] leading-[34px]">
            Storage with a calming effect
          </h1>
          <p className="text-[16px] leading-[26px]">
            Having a lot to store doesn’t mean it all has to go in a cupboard.
            Many bathroom items are better kept out in the open – either to be
            close at hand or are nice to look at. Add a plant or two to set a
            calm mood for the entire room (and they’ll thrive in the humid air).
          </p>
        </div>
      </section>
      <section className="lg:hidden mt-[20px]">
        <div>
          <h1 className="font-medium text-[24px] leading-[26px] md:text-[28px] md:leading-[34px] pb-2">
            A cleaning hub with built-in ventilation
          </h1>
          <p className="text-[16px] leading-[26px]">
            Use a rod and a shower curtain to create a complement to your
            cleaning cupboard. Unsightly equipment is stored out of sight yet
            accessibly close – while the air flow helps dry any dampness.
          </p>

          <Image
            src={Article2}
            alt=""
            width=""
            height=""
            className="object-cover w-full h-[400px] py-4"
          />
        </div>
        <div>
          <h1 className="font-medium text-[24px] leading-[26px] md:text-[28px] md:leading-[34px] pb-2">
            Storage with a calming effect
          </h1>
          <p className="text-[16px] leading-[26px]">
            Having a lot to store doesn’t mean it all has to go in a cupboard.
            Many bathroom items are better kept out in the open – either to be
            close at hand or are nice to look at. Add a plant or two to set a
            calm mood for the entire room (and they’ll thrive in the humid air).
          </p>
          <Image
            src={Article3}
            alt=""
            width=""
            height=""
            className="object-cover w-full py-4 h-[400px]"
          />
        </div>
      </section>
      <section className="">
        <div>
          <h1 className="font-medium text-[24px] leading-[26px] md:text-[28px] md:leading-[34px] pb-2">
            Kit your clutter for easy access
          </h1>
          <p className="text-[16px] leading-[26px]">
            Even if you have a cabinet ready to swallow the clutter, it’s worth
            resisting a little. Let containers hold kits for different
            activities – home spa, make-up, personal hygiene – to bring out or
            put back at a moment’s notice.
          </p>
        </div>
        <div className="lg:flex  lg:pt-[40px] lg:pb-[80px] lg:space-x-[24px]">
          <Image
            src={Article}
            alt=""
            width=""
            height=""
            className="w-full h-[500px]   py-[16px] lg:py-0"
          />
          <div className="space-y-[20px]">
            <div>
              <h1 className="font-medium text-[24px] leading-[26px] md:text-[28px] md:leading-[34px] pb-2">
                An ecosystem of towels
              </h1>
              <p className="text-[16px] leading-[26px]">
                Racks or hooks that allow air to circulate around each towel
                prolong their freshness. They dry quick and the need for
                frequent washing is minimized.
              </p>
            </div>
            <div>
              <h1 className="font-medium text-[24px] leading-[26px] md:text-[28px] md:leading-[34px] pb-2">
                Make your mop disappear
              </h1>
              <p className="text-[16px] leading-[26px]">
                Having your cleaning tools organized makes them easier to both
                use and return to. When they’re not needed, close the curtain
                and feel the peace of mind it brings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
