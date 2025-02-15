"use client";
import { SectionTitle1 } from "../SectionTitles/SectionTitles";
import WhyUsCards from "./Cards";
import { cardList } from "./CardsList";

const WhyUsSect = () => {
  return (
    <section className="flex flex-col gap-6 mt-10 ">
      <SectionTitle1 titleStart="Why" titleBold="Choose Us?" />
      <div className="md:hidden flex lg:flex flex-col gap-5">
        <div className="flex md:flex-row flex-col gap-5 items-center justify-center text-xl">
          {cardList.slice(0, 3).map((card, idx) => {
            return (
              <WhyUsCards icon={card.icon} key={idx}>
                {card.text}
              </WhyUsCards>
            );
          })}
        </div>
        <div className="flex md:mx-[16%] md:flex-row flex-col gap-5 items-center justify-center text-xl">
          {cardList.slice(3).map((card, idx) => {
            return (
              <WhyUsCards icon={card.icon} key={idx}>
                {card.text}
              </WhyUsCards>
            );
          })}
        </div>
      </div>
      <div className="md:grid lg:hidden grid-cols-2 gap-5 hidden">
        {cardList.map((card, idx) => {
          return (
            <WhyUsCards icon={card.icon} key={idx}>
              {card.text}
            </WhyUsCards>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUsSect;
