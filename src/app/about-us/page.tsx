import WhyUsSect from "@/components/common/WhyUs";

const Page = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center font-medium text-[16px]/[19.2px] mt-[144px] opacity-50 text-center">
        About Us
      </div>
      <div className="flex flex-wrap justify-center font-medium mx-auto text-center mt-[16px] max-w-[851px] text-[24px]/[28.8px] md:text-[28px]/[33.6px]  ">
        Our story dates back around eighty years, when our grandfather was
        engaged in the fishing profession in the Caspian Sea. He had a deep
        passion for this job and always strived to provide the best quality to
        his customers as he expanded his activities.
      </div>
      <div className="flex justify-center mt-[56px]">
        <img
          src="/images/main.jpg"
          alt="Logo"
          className="object-cover w-[652px] h-[430px]  md:w-full md:max-w-[1238px] md:h-auto rounded-[36px]"
        />
      </div>
      <div className=" flex flex-col md:flex-row gap-[6px]  md:gap-[103px] justify-center mx-auto w-[400px] md:w-[1000px] ">
        <div className="font-medium text-[14px]/[16.8px] opacity-50 mt-[56px] md:ml-0 ml-[24px]   ">
          Experience
        </div>
        <div className="text-[20px]/[24px] w-[352px] md:w-[751px]  mx-auto mt-[56px]">
          The experience of tasting caviar in childhood and living in the
          northern part of the country alongside the Caspian Sea—one of the few
          natural habitats of sturgeon fish in the world—motivated us to enter
          the seafood market. Given our family background and Iran's
          geographical position, which connects to the Caspian Sea in the north
          and has a high capacity for producing seafood products, we decided to
          offer Iranian caviar at the highest quality.
        </div>
      </div>
      <div className="w-[225px] flex justify-center mx-auto md:ml-[594px] mt-[56px] ">
        <img
          src="/images/image2.jpg"
          alt="Logo"
          className="object-cover w-full max-w-[255px] h-auto rounded-[16px]"
        />
      </div>
      <div className="flex justify-center ml-[24px] md:ml-[431px] text-[20px]/[24px] max-w-[751px] text-left mt-[56px]">
        At unique caspian caviar, we take pride in providing our valued
        customers with the finest caviar in terms of aroma, taste, and color,
        while remaining loyal to the heritage passed down through generations.
      </div>
      <div className="lg:px-[128px] px-6 items-center lg:items-start xl:px-[258px] my-32 flex flex-col  gap-32">
        <WhyUsSect />
      </div>
    </>
  );
};

export default Page;
