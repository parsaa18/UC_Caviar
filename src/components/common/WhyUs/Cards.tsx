import React, { FC } from "react";

interface IProps {
  icon: React.JSX.Element;
  children: React.ReactNode;
}

const WhyUsCards: FC<IProps> = ({ icon, children }) => {
  return (
    <div className="bg-[#F2F2F2] rounded-3xl flex flex-col items-start justify-between  p-4 w-full h-[250px]">
      <div className="p-3 rounded-full bg-ucWhite">{icon}</div>
      {children}
    </div>
  );
};

export default WhyUsCards;
