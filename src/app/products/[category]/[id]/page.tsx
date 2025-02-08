import DoubleBtn from "@/components/common/DoubleButton";
import { Rating } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <div className="w-[45px] h-[19px] text-[16px] leading-[19.2px] text-[#000000] opacity-50 mx-auto mt-[123px]">
        Caviar
      </div>
      <div className=" flex  justify-center gap-[103px] w-[50S0px] h-[58px] text-[48px] leading-[57.6px] text-black ml-[-150px] mx-auto mt-[2px]">
        <div className=" flex  justify-center gap-[2.37px] w-[57px] h-[22.6px] text-[16px] leading-[16.8px] text-[#000000] opacity-50 mt-[16px]">
          <img
            src={"/images/arrow-right.png"}
            alt="Logo"
            className="object-cover w-[36px] h-[30px] mt-[-5px] max-w-full "
          />
          Back
        </div>
        Beluga Imperial Top
      </div>

      <div className="border-2 border-black h-[380px]">
        <img
          src={"/images/pack-img-2.png"}
          alt="Logo"
          className="object-cover w-[293px] h-[257px] mx-auto mt-[48px] max-w-full "
        />
        <div className="w-[105px] h-[24px] text-[20px] leading-[24px] text-[#0D0A0B] font-montrealBold mt-[-206px] ml-[332px] mr-[140px]">
          Order Now
        </div>
        <div className="ml-[322px] mt-[12px]">
          {" "}
          <DoubleBtn theme="blue" text="Contact Us" />
        </div>
        <div className="w-[177px] h-[19px] text-[16px] leading-[19.2px] text-[#0D0A0B]  mt-[24px] ml-[322px] ">
          How we send products?
        </div>
        <div className="ml-[322px] mt-[12px]">
          {" "}
          <DoubleBtn theme="blue" text="Shipping" />
        </div>
        <div className="  flex justify-center gap-[48px] w-[180px] h-[29px] mt-[-171px] ml-[927px]">
          <div className=" text-[16px] leading-[19.2px] w-[39px] h-[19px] text-[#000000] opacity-50">
            Color
          </div>
          <div className=" w-[100px] h-[19px] text-[16px] leading-[19.2px] text-[#000000] ">
            Dark Gray
          </div>
        </div>

        <div className="  flex justify-center gap-[48px] w-[180px] h-[29px] mt-[16px] ml-[927px]">
          <div className=" text-[16px] leading-[19.2px] w-[39px] h-[19px] text-[#000000] opacity-50">
            Size
          </div>
          <div className=" w-[100px] h-[19px] text-[16px] leading-[19.2px] text-[#000000] ">
            3.3 ≤ mm Up
          </div>
        </div>

        <div className="  flex justify-center gap-[48px] w-[180px] h-[29px] mt-[16px] ml-[927px]">
          <div className=" text-[16px] leading-[19.2px] w-[39px] h-[19px] text-[#000000] opacity-50">
            Rate
          </div>
          <div className=" w-[100px] h-[19px] text-[16px] leading-[19.2px] text-[#000000] "></div>
        </div>
      </div>
    </>
  );
}

export default page;
