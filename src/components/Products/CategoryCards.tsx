import { FC } from "react";
import ArrowUpRight03Icon from "../icons/ArrowUpRight03";
import Link from "next/link";

interface IProps {
  totalItems: number;
  title: string;
  picture: string;
  link: string;
}
const CategoryCards: FC<IProps> = ({ picture, title, totalItems, link }) => {
  return (
    <Link
      href={"/products/" + link}
      className="bg-ucGray rounded-[40px] max-h-full p-8 pb-6 flex flex-col items-center gap-16 "
    >
      <div className="flex justify-between w-full items-start">
        <div className="flex-1 w-full"></div>
        <div className="flex-1 flex flex-col items-center gap-1">
          <h6 className="text-black/50  lg:text-base text-sm text-nowrap">
            Category
          </h6>
          <h3 className="text-2xl lg:text-[32px] leading-9 text-ucBlack font-black font-montrealBold text-nowrap">
            {title}
          </h3>
          <p className="text-black/50  text-nowrap text-xs lg:text-sm">
            ( {totalItems} Items )
          </p>
        </div>
        <div className="flex-1 flex items-center lg:text-base text-sm justify-end">
          see <ArrowUpRight03Icon color="#0d0a0b" />
        </div>
      </div>
      <div className=" flex items-center justify-center w-[60%]">
        <img src={picture} alt={title} className="object-cover w-full h-full" />
      </div>
    </Link>
  );
};

export default CategoryCards;
