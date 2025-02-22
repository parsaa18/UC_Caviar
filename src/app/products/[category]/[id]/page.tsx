import { BackButton1, BackButton2 } from "@/components/BackButton";

import DoubleBtn from "@/components/common/DoubleButton";
import Rate from "@/components/common/Rate";
import Slider from "@/components/common/Slider";
import Image from "next/image";

import React from "react";

function page() {
  return (
    <>
      <div className="flex items-center justify-center md:mx-auto ml-[-120px] gap-[80px] md:gap-[40px] mt-[123px] md:mt-[123px] ">
        <BackButton2 />

        <div className="w-[45px] h-[19px] text-[16px] leading-[19.2px] text-[#000000] opacity-50 text-center">
          Caviar
        </div>
      </div>

      <div className="flex flex-wrap items-center md:ml-[-150px] mt-[-25px]  justify-center px-6 md:px-12 py-4 gap-[20px] md:gap-x-[103px]">
        <BackButton1 />

        <div className="text-[40px]  md:text-[48px]  text-[#0D0A0B] text-center md:text-center">
          Beluga Imperial Top
        </div>
      </div>

      <div className="  flex flex-col  md:flex md:flex-wrap justify-center mt-[-20px] items-start  md:items-center mx-auto md:ml-[290px]  w-[600px] gap-[45px]   h-[330px]">
        <div className=" md:justify-center   hidden md:flex md:flex-col   gap-[24px] w-[160px] ">
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
        <div className="  w-[350px] md:mt-0 md:ml-0 ml-[80px] mt-[220px]  ">
          <Slider />
        </div>

        <div className="  w-[350px]">
          <div className="  md:mt-[0]  mt-[62px] md:ml-0 ml-[32px]  justify-start  flex  flex-wrap gap-[145px] md:gap-[48px]">
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
                <Rate maxRating={5} />
              </div>
            </div>
          </div>
          <div className="text-[16px] mt-[26px] leading-[19.2px] w-full md:ml-0 ml-[32px] h-[57px] text-[#000000] ">
            A unique Korean flavor with a special sea taste, a silky smooth and
            velvety texture, and a distinctive salty taste
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[76px] md:gap-[86px] md:ml-0 ml-[32px] md:justify-center justify-start items-center mt-[10px]">
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

        <div className=" md:hidden flex justify-center items-center mt-[112px]  gap-[24px] w-[400px] h-[100px] ">
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
