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
      </div>
    </>
  );
}

export default page;
