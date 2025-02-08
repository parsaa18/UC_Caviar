import React, { FC } from "react";

interface IProps {
  totalItems: number;
  titleStart: string;
  title: string;
}
const ListTitle: FC<IProps> = ({ title, titleStart, totalItems }) => {
  return (
    <div className="flex flex-col items-center gap-[2px]">
      <h4 className="text-black/50">{titleStart}</h4>
      <div className="flex items-start gap-2 ">
        <h1 className="text-5xl text-ucBlack ">{title}</h1>
        <span className="text-black/50 w-0  text-nowrap text-sm">
          ( {totalItems} Items )
        </span>
      </div>
    </div>
  );
};

export default ListTitle;
