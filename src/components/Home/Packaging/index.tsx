"use client";

import { SectionTitle1 } from "@/components/common/SectionTitles/SectionTitles";
import React, { FC, ReactNode, useState } from "react";

type packType = { id: number; title: ReactNode; picture: string };

const packList = [
  {
    id: 1,
    title: <h5>Packing</h5>,
    picture: "/images/pack-img-1.jpg",
  },
  {
    id: 2,
    title: (
      <h5 className="text-ucBlack">
        Repacking <br /> Jar with metal cap
      </h5>
    ),
    picture: "/images/pack-img-2.png",
  },
  {
    id: 3,
    title: (
      <h5 className="text-ucBlack">
        Repacking <br /> DESJARDIN
      </h5>
    ),
    picture: "/images/pack-img-3.png",
  },
];

const Cards: FC<packType> = ({ id, picture, title }) => {
  return (
    <>
      <div className="h-[140px]">
        <img
          src={picture}
          alt={"img"}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-xl font-bold text-ucBlack">{title}</span>
    </>
  );
};

const FullCard: FC<packType> = ({ id, picture, title }) => {
  return (
    <>
      <img
        src={picture}
        alt="packimg1"
        className="object-cover w-full h-full rounded-[40px]"
      />
      <span className="absolute bottom-6 left-8 text-ucWhite text-[32px] font-montrealBold font-bold">
        {title}
      </span>
    </>
  );
};
const PackingSection = () => {
  const [activeCard, setactiveCard] = useState<number>(1);

  return (
    <section className="flex flex-col gap-6">
      <SectionTitle1 titleStart="How do we" titleBold="Package Our Products?" />
      <div className="flex gap-8 h-[435px]">
        {packList
          .filter((pack) => pack.id === activeCard)
          .map((pack, idx) => {
            return (
              <div className="w-full max-w-[540px] bg-ucGray rounded-[40px]  relative">
                <FullCard
                  id={pack.id}
                  key={idx}
                  picture={pack.picture}
                  title={pack.title}
                />
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
                    className="bg-ucGray py-6 px-8 gap-3 w-full cursor-pointer flex flex-col rounded-[40px] max-h-[252px] "
                  >
                    <Cards
                      id={pack.id}
                      key={idx}
                      picture={pack.picture}
                      title={pack.title}
                    />
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
