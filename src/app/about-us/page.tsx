import Image from "next/image";

const page = () => {
  return (
    <>
      <div className=" flex flex-wrap justify-center font-medium text-[16px]/[19.2px] mt-[144px] opacity-50 ">
        About Us
      </div>
      <div className="flex flex-wrap justify-center font-medium  mx-auto text-center mt-[16px] w-[851px] h-[136px] text-[28px]/[33.6px]">
        Our story dates back around eighty years, when our grandfather was
        engaged in the fishing profession in the Caspian Sea. He had a deep
        passion for this job and always strived to provide the best quality to
        his customers as he expanded his activities.
      </div>
      <div className="flex justify-center mt-[56px]">
        <img
          src={"/images/main.jpg"}
          alt="Logo"
          className=" object-cover w-[1238px] h-[652px] rounded-[36px]"
        />
      </div>
      <div className="flex flex-wrap gap-[103px]">
        <div className="font-medium text-[14px]/[16.8px] opacity-50 mt-[56px] ml-[258px] w-[70px] h-[17px]">
          Experience
        </div>
        <div className="font-medium text-[20px]/[24px] w-[751px] h-[144px] mt-[46px]">
          The experience of tasting caviar in childhood and living in the
          northern part of the country alongside the Caspian Sea—one of the few
          natural habitats of sturgeon fish in the world—motivated us to enter
          the seafood market. Given our family background and Iran's
          geographical position, which connects to the Caspian Sea in the north
          and has a high capacity for producing seafood products, we decided to
          offer Iranian caviar at the highest quality.
        </div>
      </div>
      <div className="flex justify-center ml-[244px] mt-[56px]">
        <img
          src={"/images/image2.jpg"}
          alt="Logo"
          className=" object-cover w-[255px] h-[329px] rounded-[16px]"
        />
      </div>
      <div className=" flex justify-center ml-[431px] mx-auto font-medium text-[20px]/[24px] w-[751px] h-[72px] mt-[56px]">
        At unique caspian caviar,we take pride in providing our valued customers
        with the finest caviar in terms of aroma, taste, and color, while
        remaining loyal to the heritage passed down through generations.
      </div>
      <div className="font-medium text-[20px]/[24px] w-[40px] h-[24px] opacity-50 ml-[258px] mt-[80px]">
        Why
      </div>
      <div className="font-montrealBold text-[24px]/[28.8px] w-[150px] h-[29px]  ml-[258px]">
        Choose Us?
      </div>
      <div className="flex flex-wrap justify-center gap-[20px] ml-[108px] mt-[24px]">
        <div className="w-[295px] h-[250px] bg-[#F2F2F2] rounded-[24px]">
          <div className="w-[56px] h-[56px] bg-[#FAFAFA] ml-[16px] mt-[16px] rounded-full"></div>
          <div className="w-[263px] h-[48px] text-[20px]/[24px] font-medium mx-auto mt-[116px]">
            a unique experience of taste and aroma caviar
          </div>
        </div>

        <div className="w-[295px] h-[250px] bg-[#F2F2F2] rounded-[24px]">
          <div className="w-[56px] h-[56px] bg-[#FAFAFA] ml-[16px] mt-[16px] rounded-full"></div>
          <div className="w-[263px] h-[96px] text-[20px]/[24px] font-medium mx-auto mt-[66px]">
            Accurate processes and high standards of maintenance that ensure
            fresh and quality products reach the customer
          </div>
        </div>

        <div className="w-[295px] h-[250px] bg-[#F2F2F2] rounded-[24px]">
          <div className="w-[56px] h-[56px] bg-[#FAFAFA] ml-[16px] mt-[16px] rounded-full"></div>
          <div className="w-[263px] h-[48px] text-[20px]/[24px] font-medium mx-auto mt-[116px]">
            Great relationship with Middle east and Europe countries
          </div>
        </div>

        <div className="w-[295px] h-[250px] bg-[#F2F2F2] rounded-[24px]">
          <div className="w-[56px] h-[56px] bg-[#FAFAFA] ml-[16px] mt-[16px] rounded-full"></div>
          <div className="w-[263px] h-[48px] text-[20px]/[24px] font-medium mx-auto mt-[116px]">
            Private label,Bulk supplying solution
          </div>
        </div>

        <div className="w-[295px] h-[250px] bg-[#F2F2F2] rounded-[24px]">
          <div className="w-[56px] h-[56px] bg-[#FAFAFA] ml-[16px] mt-[16px] rounded-full"></div>
          <div className="w-[263px] h-[48px] text-[20px]/[24px] font-medium mx-auto mt-[116px]">
            Customer service available 24/7 for you
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
