import AboutUsSect from "@/components/Home/AboutUs";
import CatalogSect from "@/components/Home/Catalog";
import Hero from "@/components/Home/Hero";
import OurShipping from "@/components/Home/OurShipping";
import PackingSection from "@/components/Home/Packaging";
import ProductsCategory from "@/components/Home/ProductsCategory";
import WhyUsSect from "@/components/common/WhyUs";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="px-[258px] my-32 flex flex-col gap-32">
        <AboutUsSect />
        <WhyUsSect />
        <ProductsCategory />
        {/* <CatalogSect /> */}
      </div>
      <div className="px-[101px] flex flex-col gap-44 my-12">
        <PackingSection />
        <OurShipping />
      </div>
    </div>
  );
}
