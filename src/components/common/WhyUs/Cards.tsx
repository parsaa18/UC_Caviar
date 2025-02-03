import { childrenType } from "@/core/types/children.type";
import { FunctionComponent } from "react";

interface IProps {
  icon: React.JSX.Element;
  children: childrenType;
}

const WhyUsCards: FunctionComponent<IProps> = ({ icon, children }) => {
  return (
    <div className="bg-[#F2F2F2] rounded-3xl flex flex-col items-start justify-between  p-4 w-[295px] h-[250px]">
      <div className="p-3 rounded-full bg-ucWhite">{icon}</div>
      {children}
    </div>
  );
};

export default WhyUsCards;
