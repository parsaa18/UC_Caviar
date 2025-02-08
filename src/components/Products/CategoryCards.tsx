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
      className="bg-ucGray rounded-[40px] p-8 pb-6 flex flex-col items-center gap-16  max-w-[48vw]"
    >
      <div className="flex justify-between w-full items-start">
        <div className="flex-1 w-full"></div>
        <div className="flex-1 flex flex-col items-center gap-1">
          <h6 className="text-black/50   text-nowrap">Category</h6>
          <h3 className=" text-[32px] leading-9 text-ucBlack font-black font-montrealBold text-nowrap">
            {title}
          </h3>
          <p className="text-black/50  text-nowrap text-sm">
            ( {totalItems} Items )
          </p>
        </div>
        <div className="flex-1 flex items-center justify-end">
          see <ArrowUpRight03Icon color="#0d0a0b" />
        </div>
      </div>
      <div className="px-20 flex items-center justify-center">
        <img src={picture} alt={title} className="w-[80%]" />
      </div>
    </Link>
  );
};

export default CategoryCards;
