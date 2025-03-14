import ParagraphOnScroll from "@/components/common/motion/ParagraphScroll";
import Link from "next/link";

const AboutUsSect = () => {
  return (
    <section className="flex lg:gap-20 xl:gap-28 justify-center items-center gap-4 lg:flex-row flex-col w-full">
      {/* <Link href={"about-us"}>
        <h4 className="text-black/50 text-sm text-nowrap">ABOUT US</h4>
      </Link> */}
      <ParagraphOnScroll
        className="xl:text-2xl text-xl leading-6 font-bold lg:max-w-[40vw] text-justify"
        text="We are a leading company specializing in the export of premium caviar and canned goods, offering a wide range of packaging options. Our products are shipped worldwide with guaranteed quality and tailored delivery methods. Contact us for orders and inquiries."
      />
    </section>
  );
};

export default AboutUsSect;
