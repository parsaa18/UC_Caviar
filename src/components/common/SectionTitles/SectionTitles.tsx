import React, { FC } from "react";

interface IProps {
  titleStart: string;
  titleBold: string;
}
export const SectionTitle1: FC<IProps> = ({ titleBold, titleStart }) => {
  return (
    <h4 className="text-black/50 text-xl text-nowrap">
      {titleStart} <br />
      <span className="text-2xl font-bold text-black"> {titleBold}</span>
    </h4>
  );
};
