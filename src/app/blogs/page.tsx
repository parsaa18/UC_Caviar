"use client";
import BlogCard from "@/components/blogs/BlogCard";
import BlogsList from "@/components/blogs/BlogsList";
import ListTitle from "@/components/common/ListTitle";
import HorizontalScrollingCarousel from "@/components/common/motion/HorizontalScroll";
import apiFetcher from "@/core/services/api/fetcher.api";
import useScrollStore from "@/core/store/scroll.store";
import { blogType } from "@/core/types/blog.type";
import { handleWheel } from "@/core/utils/scroll.util";
import React from "react";
import useSWR from "swr";

const page = () => {
  const { data } = useSWR("blogs/", apiFetcher);
  const { blogLeft: left, setblogLeft: setLeft } = useScrollStore(
    (state) => state
  );
  return (
    <section
      onWheel={(e) => {
        handleWheel(e, left, setLeft, data?.length);
      }}
      onTouchMove={(e) => {
        console.log(e);
      }}
      className="pt-32 h-[calc(100vh-32px)] flex items-center flex-col gap-16 px-6 "
    >
      <ListTitle title={"Blogs"} titleStart="Our" totalItems={data?.length} />

      <HorizontalScrollingCarousel totalItems={data?.length}>
        <BlogsList data={data} />
      </HorizontalScrollingCarousel>
      <div className="flex-col flex md:hidden gap-8 pb-8">
        {data?.map((blog: blogType, idx: number) => {
          return (
            <BlogCard
              key={idx}
              date={blog.date}
              picture={blog.picture}
              shortDesc={blog.intro}
              title={blog.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default page;
