import AboutUsSect from "@/components/Home/AboutUs";
import Hero from "@/components/Home/Hero";
import WhyUsSect from "@/components/common/WhyUs";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="px-[256px] my-32 flex flex-col gap-32">
        <AboutUsSect />
        <WhyUsSect />
      </div>
    </div>
  );
}
