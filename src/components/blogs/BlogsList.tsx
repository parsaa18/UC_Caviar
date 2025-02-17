"use client";

import { FC } from "react";
import { blogType } from "@/core/types/blog.type";
import BlogCard from "./BlogCard";

interface IProps {
  data: blogType[];
}
const chunkArray = (array: blogType[], size: number) => {
  const result = [];
  for (let i = 0; i < array?.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const BlogsList: FC<IProps> = ({ data }) => {
  const size = window.innerWidth > 1024 ? 3 : 2;
  const chunkedData = chunkArray(data, size);
  return (
    <>
      {chunkedData.map((chunk, idx) => {
        return (
          <div
            className="w-[calc(100vw-80px)] h-full  grid grid-cols-2 lg:grid-cols-3 gap-8 "
            key={idx}
          >
            {chunk?.map((blog, idx) => {
              return (
                <BlogCard
                  key={idx}
                  date={blog.date}
                  picture={blog.picture}
                  shortDesc={blog.intro}
                  title={blog.title}
                  id={blog.id}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default BlogsList;
