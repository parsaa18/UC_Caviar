import ParagraphOnScroll from "@/components/common/motion/ParagraphScroll";

const AboutUsSect = () => {
  return (
    <section className="flex gap-28">
      <h4 className="text-black/50 text-sm text-nowrap">ABOUT US</h4>
      <ParagraphOnScroll
        className="text-2xl leading-6 font-bold w-[606px] text-justify"
        text="The experience of tasting caviar in childhood and living in the northern
        part of the country alongside the Caspian Sea—one of the few natural
        habitats of sturgeon fish in the world—motivated us to enter the seafood
        market."
      />
    </section>
  );
};

export default AboutUsSect;
