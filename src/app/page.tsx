import AboutUsSect from "@/components/Home/AboutUs";
import LandingBlogs from "@/components/Home/Blogs";
import CatalogSect from "@/components/Home/Catalog";
import Hero from "@/components/Home/Hero";
import OurShipping from "@/components/Home/OurShipping";
import PackingSection from "@/components/Home/Packaging";
import ProductsCategory from "@/components/Home/ProductsCategory";
import WhyUsSect from "@/components/common/WhyUs";
import Footer from "@/components/layout/Footer/footer";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Hero />
        <div className="lg:px-[128px] px-6 items-center lg:items-start xl:px-[258px] my-32 flex flex-col  gap-32">
          <AboutUsSect />
          <WhyUsSect />
          <ProductsCategory />
        </div>
        <div className="xl:px-[258px] md:px-6">
          <CatalogSect />
        </div>
        <div className="xl:px-[101px] lg:px-[80px] w-full flex flex-col gap-44 my-12">
          <PackingSection />
          <OurShipping />
        </div>
        <div className="lg:px-[128px] px-6 items-center lg:items-start xl:px-[258px] my-32 flex flex-col  gap-32">
          <LandingBlogs />
        </div>
      </div>
      <Footer />
    </>
  );
}
