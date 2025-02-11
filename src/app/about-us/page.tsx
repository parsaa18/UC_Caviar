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
      <div className="flex flex-col gap-[2px] justify-start md:justify-center ml-[24px] md:ml-[258px]">
        <div className="font-medium text-[20px]/[24px]  opacity-50 text-left mt-[80px]">
          Why
        </div>
        <div className="font-montrealBold text-[24px]/[28.8px]  text-left">
          Choose Us?
        </div>
      </div>
      <div className="  md:w-[1000px]  flex flex-col md:flex-row md:flex-wrap justify-center md:ml-[208px] gap-[20px] mt-[24px] px-4">
        {[
          "A unique experience of taste and aroma caviar",
          "Accurate processes and high standards of maintenance that ensure fresh and quality products reach the customer",
          "Great relationship with Middle East and Europe countries",
          "Private label, Bulk supplying solution",
          "Customer service available 24/7 for you",
        ].map((text, index) => (
          <div
            key={index}
            className="w-full sm:w-[295px] h-auto bg-[#F2F2F2] rounded-[24px] p-4 "
          >
            <div className="w-14 h-14 bg-[#FAFAFA]  rounded-full"></div>
            <div className="mt-6 text-lg font-medium">{text}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
