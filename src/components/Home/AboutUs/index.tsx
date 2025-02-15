import ParagraphOnScroll from "@/components/common/motion/ParagraphScroll";

const AboutUsSect = () => {
  return (
    <section className="flex lg:gap-20 xl:gap-28 gap-4 lg:flex-row flex-col">
      <h4 className="text-black/50 text-sm text-nowrap">ABOUT US</h4>
      <ParagraphOnScroll
        className="xl:text-2xl text-xl leading-6 font-bold lg:max-w-[40vw] text-justify"
        text="The experience of tasting caviar in childhood and living in the northern
        part of the country alongside the Caspian Sea—one of the few natural
        habitats of sturgeon fish in the world—motivated us to enter the seafood
        market."
      />
    </section>
  );
};

export default AboutUsSect;
