import { FC } from "react";
import ArrowUpRight03Icon from "../icons/ArrowUpRight03";
import Calendar03Icon from "../icons/date";
import dateFormatter from "@/core/utils/date.util";

interface IProps {
  picture: string;
  shortDesc: string;
  date: string;
  title: string;
}

const BlogCard: FC<IProps> = ({ date, picture, shortDesc, title }) => {
  return (
    <div className="flex-col justify-between flex w-full bg-ucGray h-full max-h-full rounded-[40px]">
      <div className="flex flex-col  gap-4 p-8 ">
        <div className="flex justify-between items-center w-full">
          <h4>{title}</h4>
          <div className="flex items-center gap-1 text-ucBlack">
            Read
            <ArrowUpRight03Icon color="#0d0a0b" />
          </div>
        </div>
        <p className="text-ucBlack/50 line-clamp-2">{shortDesc}</p>
        <div className="flex items-center gap-1 text-ucBlack/50">
          {dateFormatter(date)}
          <Calendar03Icon color="#0d0a0b50" width={24} height={24} />
        </div>
      </div>
      <div className=" flex items-center  bg-black/15 justify-center rounded-[32px] rounded-b-[40px] overflow-hidden">
        <img
          src={picture}
          alt={title}
          className=" flex w-full h-[30vh] object-cover"
        />
      </div>
    </div>
  );
};

export default BlogCard;
