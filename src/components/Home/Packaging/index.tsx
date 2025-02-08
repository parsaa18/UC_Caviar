"use client";

import { SectionTitle1 } from "@/components/common/SectionTitles/SectionTitles";
import React, { ReactNode, useState } from "react";

type packType = { id: number; component: ReactNode };

const packList = [
  {
    id: 1,
    component: (
      <div className="w-full h-full relative">
        <img
          src={"/images/pack-img-1.jpg"}
          alt="packimg1"
          className="object-cover w-full h-full rounded-[40px]"
        />
        <span className="absolute bottom-6 left-8 text-ucWhite  font-montrealBold font-bold">
          <h5>Packing</h5>
        </span>
      </div>
    ),
  },
  {
    id: 2,
    component: (
      <div className="h-full w-full flex flex-col justify-between px-8 py-6 gap-3 ">
        <div className="flex w-full  h-2/3">
          <img
            src={"/images/pack-img-2.png"}
            alt={"img"}
            className="w-full h-full object-contain"
          />
        </div>
        <span className=" font-bold font-montrealBold ">
          <h5 className="text-ucBlack">
            Repacking <br /> Jar with metal cap
          </h5>
        </span>
      </div>
    ),
  },
  {
    id: 3,
    component: (
      <div className="h-full w-full flex flex-col justify-between px-8 py-6 gap-3 ">
        <div className="flex w-full  h-2/3">
          <img
            src={"/images/pack-img-3.png"}
            alt={"img"}
            className="w-full h-full object-contain"
          />
        </div>
        <span className=" font-bold font-montrealBold">
          <h5 className="text-ucBlack">
            Repacking <br /> DESJARDIN
          </h5>
        </span>
      </div>
    ),
  },
];

const PackingSection = () => {
  const [activeCard, setactiveCard] = useState<number>(1);

  return (
    <section className="lg:flex hidden flex-col gap-6 ">
      <SectionTitle1 titleStart="How do we" titleBold="Package Our Products?" />
      <div className="flex gap-8 h-[435px]">
        {packList
          .filter((pack) => pack.id === activeCard)
          .map((pack, idx) => {
            return (
              <div
                key={idx}
                className="w-full text-[32px] max-w-[540px] bg-ucGray rounded-[40px]  "
              >
                {pack.component}
              </div>
            );
          })}

        <div className="w-full  flex flex-col gap-10">
          <div className="flex items-center gap-8">
            {packList
              .filter((pack) => pack.id !== activeCard)
              .map((pack, idx) => {
                return (
                  <div
                    onClick={() => {
                      setactiveCard(pack.id);
                    }}
                    className="bg-ucGray text-xl  w-full cursor-pointer rounded-[40px] h-[252px] "
                    key={idx}
                  >
                    {pack.component}
                  </div>
                );
              })}
          </div>
          <p className="text-xl leading-6  w-[616px] font-montrealBook font-light">
            Our packaging method adheres to international standards, utilizing
            the highest quality plastic containers. This type of packaging is
            exclusively for customers who wish to purchase in bulk from us.
            Available weights include 500g, 1kg, and 2kg.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackingSection;
