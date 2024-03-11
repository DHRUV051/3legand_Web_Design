import Image from "next/image";
import Card1 from "../../../public/Home/Card.svg";
import Card2 from "../../../public/Home/Card2.svg";


const Category = () => {
  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px]">
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-[24px] pb-[48px] space-y-[24px] lg:space-y-0 w-full">
        <div>
          <Image
            src={Card1}
            alt=""
            width=""
            height=""
            className="lg:h-full test:object-cover w-full h-full  md:h-[600px] md:w-full lg:object-cover"
          />
        </div>

        <div>
          <Image
            src={Card2}
            alt=""
            width=""
            height=""
            className="lg:h-full w-full h-full  md:h-[600px] md:w-full lg:object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default Category;
