import { SectionTitle1 } from "../SectionTitles/SectionTitles";
import WhyUsCards from "./Cards";
import { cardList } from "./CardsList";

const WhyUsSect = () => {
  return (
    <section className="flex flex-col gap-6 mt-10 ">
      <SectionTitle1 titleStart="Why" titleBold="Choose Us?" />
      <div className="flex flex-col gap-5">
        <div className="flex  gap-5 items-center justify-center text-xl">
          {cardList.slice(0, 3).map((card, idx) => {
            return (
              <WhyUsCards icon={card.icon} key={idx}>
                {card.text}
              </WhyUsCards>
            );
          })}
        </div>
        <div className="flex mx-[16%] gap-5 items-center justify-center text-xl">
          {cardList.slice(3).map((card, idx) => {
            return (
              <WhyUsCards icon={card.icon} key={idx}>
                {card.text}
              </WhyUsCards>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSect;
