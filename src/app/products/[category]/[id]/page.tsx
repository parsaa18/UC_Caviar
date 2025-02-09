import DoubleBtn from "@/components/common/DoubleButton";
import Rate from "@/components/common/Rate";
import Slider from "@/components/common/Slider";

import React from "react";

function page() {
  return (
    <>
      <div className="w-[45px] h-[19px] text-[16px] leading-[19.2px] text-[#000000] opacity-50 mx-auto mt-[123px]">
        Caviar
      </div>
      <div className="flex justify-center gap-[91px] w-[50S0px] h-[58px] text-[40px] leading-[57.6px] text-black ml-[-150px] mx-auto mt-[2px] sm:text-[48px] sm:gap-[103px]">
        <div className="flex justify-center gap-[2.37px] w-[57px] h-[22.6px] text-[16px] leading-[16.8px] text-[#000000] opacity-50 mt-[500px] sm:mt-[16px]">
          <img
            src={"/images/arrow-right.png"}
            alt="Logo"
            className="object-cover w-[36px] h-[30px] mt-[-5px] max-w-full"
          />
          Back
        </div>
        Beluga Imperial Top
      </div>

      <div className="h-[450px]">
        <div className="mt-[48px]">
          <Slider />
        </div>
        <div className="w-[105px] h-[24px] text-[20px] leading-[24px] text-[#0D0A0B] font-montrealBold mt-[-206px] ml-[332px] mr-[140px]">
          Order Now
        </div>
        <div className="ml-[322px] mt-[12px]">
          <DoubleBtn theme="blue" text="Contact Us" />
        </div>
        <div className="w-[177px] h-[19px] text-[16px] leading-[19.2px] text-[#0D0A0B] mt-[24px] ml-[322px]">
          How we send products?
        </div>
        <div className="ml-[322px] mt-[12px]">
          <DoubleBtn theme="blue" text="Shipping" />
        </div>
        <div className="flex justify-center gap-[48px] w-[180px] h-[29px] mt-[-171px] ml-[927px]">
          <div className="text-[16px] leading-[19.2px] w-[39px] h-[19px] text-[#000000] opacity-50">
            Color
          </div>
          <div className="w-[100px] h-[19px] text-[16px] leading-[19.2px] text-[#000000]">
            Dark Gray
          </div>
        </div>

        <div className="flex justify-center gap-[48px] w-[180px] h-[29px] mt-[10px] ml-[927px]">
          <div className="text-[16px] leading-[19.2px] w-[39px] h-[19px] text-[#000000] opacity-50">
            Size
          </div>
          <div className="w-[100px] h-[19px] text-[16px] leading-[19.2px] text-[#000000]">
            3.3 ≤ mm Up
          </div>
        </div>

        <div className="flex justify-center gap-[48px] w-[180px] h-[29px] mt-[10px] ml-[927px]">
          <div className="text-[16px] leading-[19.2px] w-[39px] h-[19px] text-[#000000] opacity-50">
            Rate
          </div>
          <div className="w-[100px] h-[19px] text-[16px] leading-[19.2px] text-[#000000]">
            <Rate />
          </div>
        </div>
        <div className="text-[16px] leading-[19.2px] w-[285px] h-[57px] text-[#000000] mt-[10px] ml-[927px]">
          A unique Korean flavor with a special sea taste, a silky smooth and
          velvety texture, and a distinctive salty taste
        </div>

        <div className="flex justify-center gap-[96px] w-[180px] h-[29px] mt-[59px] ml-[580px]">
          <div className="text-[16px] leading-[19.2px] w-[39px] h-[19px] text-[#000000] opacity-50">
            Weight
          </div>
          <div className="w-[49px] h-[19px] text-[16px] leading-[19.2px] text-[#000000]">
            50 g
          </div>
        </div>
        <div className="flex justify-center gap-[24px] w-[280px] h-[29px] mt-[8px] ml-[545px]">
          <div className="text-[16px] leading-[19.2px] w-[111px] h-[19px] text-[#000000] opacity-50">
            Packaging Type
          </div>
          <div className="w-[74px] h-[19px] text-[16px] leading-[19.2px] text-[#000000]">
            Desjardins
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
