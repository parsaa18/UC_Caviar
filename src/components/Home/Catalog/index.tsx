import SignIcon from "@/components/common/motion/Sign";

const CatalogSect = () => {
  return (
    <section className="flex items-center justify-center relative">
      <img src="/images/test-catalog.svg" alt="catalog" />
      <div className="flex gap-[90px] w-full absolute bottom-0 backdrop-blur-sm py-9 px-24 pb-16">
        <h5 className="text-2xl font-bold font-montrealBold text-black/50">
          <span className="text-black">Now</span> <br />
          You Can See Our{" "}
          <span className="relative text-black">
            <SignIcon
              idx={0}
              className="absolute inset-0 -left-1 -top-2 opacity-80"
              width="98"
              height="52"
            />
            Catalog
          </span>
        </h5>
      </div>
    </section>
  );
};

export default CatalogSect;
