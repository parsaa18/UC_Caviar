import DoubleBtn from "@/components/common/DoubleButton";
import Rate from "@/components/common/Rate";
import Slider from "@/components/common/Slider";
import Image from "next/image";

import React from "react";

function page() {
  return (
    <>
      <div className="flex items-center justify-center md:mx-auto ml-[-120px] gap-[80px] md:gap-[40px] mt-[123px] md:mt-[123px] ">
        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition md:hidden">
          <Image
            src="/images/arrow-right.png"
            alt="Arrow"
            width={26}
            height={26}
          />
          <span className="text-[16px]">Back</span>
        </button>

        <div className="w-[45px] h-[19px] text-[16px] leading-[19.2px] text-[#000000] opacity-50 text-center">
          Caviar
        </div>
      </div>

      <div className="flex flex-wrap items-center md:ml-[-150px]  justify-center px-6 md:px-12 py-4 gap-[20px] md:gap-x-[103px]">
        <button className="hidden md:flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition">
          <Image
            src="/images/arrow-right.png"
            alt="Arrow"
            width={26}
            height={26}
          />
          <span className="text-[16px]">Back</span>
        </button>

        <div className="text-[40px]  md:text-[48px]  text-[#0D0A0B] text-center md:text-center">
          Beluga Imperial Top
        </div>
      </div>

      <div className=" flex flex-col  md:flex md:flex-wrap justify-center items-start  md:items-center mx-auto md:ml-[150px] md:gap-[6px] space-x-0  h-[330px]">
        <div className="  hidden md:flex md:flex-col gap-[24px] w-[200px] ">
          <div className=" flex flex-col gap-[12px] w-[200px] ">
            <div className="w-[105px] h-[24px] text-[20px] leading-[24px] text-[#0D0A0B] font-montrealBold ">
              Order Now
            </div>
            <div className="">
              <DoubleBtn theme="blue" text="Contact Us" />
            </div>
          </div>
          <div className=" flex flex-col gap-[12px] w-[250px] ">
            <div className="w-full h-[19px] text-[16px] leading-[19.2px] text-[#0D0A0B]  ">
              How we send products?
            </div>
            <div className="">
              <DoubleBtn theme="blue" text="Shipping" />
            </div>
          </div>
        </div>
        <div className=" w-[450px]  md:mt-[8px] mt-[260px] ">
          <Slider />
        </div>

        <div className=" w-[350px]">
          <div className=" md:mt-[0] mt-[130px] md:ml-0 ml-[32px]  justify-start  flex  flex-wrap gap-[145px] md:gap-[48px]">
            <div className=" flex flex-col md:gap-[16px] gap-[8px] ">
              <div className="text-[16px] leading-[19.2px] w-[39px] h-[19px] text-[#000000] opacity-50">
                Color
              </div>
              <div className="text-[16px] leading-[19.2px] w-[39px] h-[19px] text-[#000000] opacity-50">
                Size
              </div>
              <div className="text-[16px] leading-[19.2px] w-[39px] h-[19px] text-[#000000] opacity-50">
                Rate
              </div>
            </div>
            <div className=" flex flex-col md:gap-[16px] gap-[8px] ">
              <div className="w-[100px] h-[19px] text-[16px] leading-[19.2px] text-[#000000]">
                Dark Gray
              </div>
              <div className="w-[100px] h-[19px] text-[16px] leading-[19.2px] text-[#000000]">
                3.3 ≤ mm Up
              </div>
              <div className="w-[100px] h-[19px] text-[16px] leading-[19.2px] text-[#000000]">
                <Rate />
              </div>
            </div>
          </div>
          <div className="text-[16px] mt-[26px] leading-[19.2px] w-full md:ml-0 ml-[32px] h-[57px] text-[#000000] ">
            A unique Korean flavor with a special sea taste, a silky smooth and
            velvety texture, and a distinctive salty taste
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[76px] md:gap-[86px] md:ml-0 ml-[32px] md:justify-center justify-start items-center mt-[23px]">
        <div className="flex flex-col gap-[8px]">
          <div className="text-[16px] leading-[19.2px] w-[39px] h-[19px] text-[#000000] opacity-50">
            Weight
          </div>
          <div className="text-[16px] leading-[19.2px] w-[111px] h-[19px] text-[#000000] opacity-50">
            Packaging Type
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <div className="w-[49px] h-[19px] text-[16px] leading-[19.2px] text-[#000000]">
            50 g
          </div>
          <div className="w-[74px] h-[19px] text-[16px] leading-[19.2px] text-[#000000]">
            Desjardins
          </div>
        </div>
        <div className="  md:hidden flex justify-center items-center mt-[72px]  gap-[24px] w-[400px] h-[200px] ">
          <div className=" flex flex-col gap-[12px] w-[250px] ">
            <div className="w-[105px] h-[24px] text-[20px] leading-[24px] text-[#0D0A0B] font-montrealBold ">
              Order Now
            </div>
            <div className="">
              <DoubleBtn theme="blue" text="Contact Us" />
            </div>
          </div>
          <div className=" flex flex-col gap-[12px] w-[250px] ">
            <div className="w-full h-[19px] text-[16px] leading-[19.2px] text-[#0D0A0B]  ">
              How we send products?
            </div>
            <div className="">
              <DoubleBtn theme="blue" text="Shipping" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
