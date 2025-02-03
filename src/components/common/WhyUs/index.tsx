import WhyUsCards from "./Cards";
import { cardList } from "./CardsList";

const WhyUsSect = () => {
  return (
    <div className="flex flex-col gap-6 mt-10 ">
      <h4 className="text-black/50 text-xl text-nowrap">
        Why <br />
        <span className="text-2xl font-bold text-black"> Choose Us?</span>
      </h4>
      <div className="flex flex-wrap gap-5 items-center justify-center text-xl">
        {cardList.map((card, idx) => {
          return (
            <WhyUsCards icon={card.icon} key={idx}>
              {card.text}
            </WhyUsCards>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUsSect;
