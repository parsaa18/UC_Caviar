import ArrowUpRight03Icon from "@/components/icons/ArrowUpRight03";
import { FC } from "react";

interface IProps {
  picture: string;
  title: string;
  totalItems: number;
}

const CatCards: FC<IProps> = ({ picture, title, totalItems }) => {
  return (
    <div className="w-full bg-ucGray py-6 px-8 rounded-[40px] flex flex-col justify-between min-h-[310px]">
      <div className="flex items-center justify-between">
        <h5 className="text-2xl font-bold ">{title}</h5>
        <div className="flex items-center gap-1">
          {totalItems} Items{" "}
          <span>
            <ArrowUpRight03Icon color="#0D0A0B" />
          </span>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <img src={picture} alt={title + "picture"} className="object-cover" />
      </div>
    </div>
  );
};

export default CatCards;
