const Text = () => {
  return (
    <main className="px-[32px] md:px-[60px] lg:px-[160px]">
      <section className="flex flex-col md:flex-row  pb-[40px] space-y-[16px] md:space-y-0 lg:gap-[50px]">


        <h1 className="font-medium text-[33px] leading-[44px]  lg:text-[72px] lg:leading-[76px] text-[rgb(20,23,24)] md:text-[33px]">
          Simply Unique<span className="text-[rgb(108,114,117)]">/</span> Simply
          Better<span className="text-[rgb(108,114,117)]">.</span>
        </h1>


        <p className="lg:ml-auto text-[rgb(108,114,117)] text-[16px] leading-[26px] mt-[0px] md:pt-[10px] lg:pt-[50px]">
          <span className="text-[rgb(52,56,57)] font-semibold ">3legant</span>{" "}
          is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
        </p>
      </section>
    </main>
  );
};

export default Text;
