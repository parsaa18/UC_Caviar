import ArrowUpRight03Icon from "@/components/icons/ArrowUpRight03";
import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  totalItems: number;
  titleStart: string;
  title: string;
  back?: string;
}
const ListTitle: FC<IProps> = ({ title, titleStart, totalItems, back }) => {
  return (
    <div className="flex flex-col items-center gap-[2px]">
      <h4 className="text-black/50">{titleStart}</h4>
      <div className="flex items-start gap-2 ">
        <div className="flex h-full items-end w-0 relative right-24 md:right-40 bottom-1 text-ucBlack/50">
          {back && (
            <Link
              href={"/products"}
              className="flex flex-row-reverse items-center gap-1"
            >
              {back}
              <div className="rotate-[-135deg]">
                <ArrowUpRight03Icon
                  color=" rgb(13 10 11 / 0.5)"
                  width={16}
                  height={16}
                />
              </div>
            </Link>
          )}
        </div>
        <h1 className="text-5xl text-ucBlack ">{title}</h1>
        <span className="text-black/50 w-0  text-nowrap text-sm">
          ( {totalItems} Items )
        </span>
      </div>
    </div>
  );
};

export default ListTitle;
