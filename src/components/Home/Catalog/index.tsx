import DoubleBtn from "@/components/common/DoubleButton";
import SignIcon from "@/components/common/motion/Sign";

const CatalogSect = () => {
  return (
    <section className="flex items-center justify-center relative w-full">
      <div className="min-h-[50vh] sm:min-h-[60vh]">
        <img
          src="/images/test-catalog.svg"
          alt="catalog"
          className="h-full object-cover"
        />
      </div>
      <div className="flex sm:flex-row flex-col gap-3 sm:gap-8 md:gap-[90px] w-full justify-center sm:items-end absolute bottom-0 backdrop-blur-md bg-gradient-to-b from-ucWhite/0 to-ucWhite rounded-3xl px-6  pt-2 sm:pt-5 md:pt-8 lg:pr-[205px] pb-8 md:pb-16 lg:pl-24">
        <h5 className="text-xl lg:text-2xl text-nowrap font-bold font-montrealBold text-black/50">
          <span className="text-black ">Now</span> <br />
          You Can See Our{" "}
          <span className="relative text-black">
            <SignIcon
              idx={0}
              className="absolute inset-0 -left-2 lg:-left-1 -top-2 opacity-80"
              width="98"
              height="52"
            />
            Catalog
          </span>
        </h5>
        <DoubleBtn text="Download" theme="blue" />
      </div>
    </section>
  );
};

export default CatalogSect;
