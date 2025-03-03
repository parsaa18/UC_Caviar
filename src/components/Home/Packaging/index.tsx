"use client";

import {
  ViewCursor,
  ViewedCard,
} from "@/components/common/motion/ViewMoreCursor";
import { SectionTitle1 } from "@/components/common/SectionTitles/SectionTitles";
import { cursorObjType } from "@/core/types/CursorObj/cursorObj.type";
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
    description:
      "We can package your premium and popular caviar in luxurious glass and metal (DESJARDIN) containers.",
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
    description:
      "Glass containers are the most common type of packaging for caviar. These transparent containers allow customers to clearly see the quality and color of the caviar. Glass containers are available in sizes of 50 grams, 100 grams, and 250 grams. This packaging can be considered one of the best types of caviar packaging.",
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
    description:
      "Metal Containers: Metal containers (DESJARDIN) are a durable and lightweight alternative to glass containers. These containers can be fully vacuum-sealed, which helps preserve the freshness and flavor of the caviar for a longer period. Metal containers are available in various sizes: 10 grams, 15 grams, 20 grams, 25 grams, 30 grams, 50 grams, 100 grams, 125 grams, and 250 grams.",
  },
];

const PackingSection = () => {
  const [activeCard, setactiveCard] = useState<number>(1);
  const [cursorObj, handleCursorObj] = useState<cursorObjType>({
    isActive: false,
    index: null,
  });
  return (
    <section className="lg:flex hidden flex-col gap-6 ">
      <SectionTitle1 titleStart="How do we" titleBold="Package Our Products?" />
      <ViewCursor cursorObj={cursorObj} />
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
                    <ViewedCard index={idx} handleCursorObj={handleCursorObj}>
                      {pack.component}
                    </ViewedCard>
                  </div>
                );
              })}
          </div>
          <p className="text-xl leading-6  w-[616px] font-montrealBook font-light">
            {packList
              .filter((pack) => pack.id === activeCard)
              .map((p) => p.description)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackingSection;
