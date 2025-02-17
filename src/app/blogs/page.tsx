"use client";
import BlogCard from "@/components/blogs/BlogCard";
import BlogsList from "@/components/blogs/BlogsList";
import ListTitle from "@/components/common/ListTitle";
import HorizontalScrollingCarousel from "@/components/common/motion/HorizontalScroll";
import apiFetcher from "@/core/services/api/fetcher.api";
import useScrollStore from "@/core/store/scroll.store";
import { blogType } from "@/core/types/blog.type";
import { useThrottle } from "@/core/utils/scroll.util";
import React from "react";
import useSWR from "swr";

const page = () => {
  const { data } = useSWR("blogs/", apiFetcher);
  const { blogLeft: left, setblogLeft: setLeft } = useScrollStore(
    (state) => state
  );

  const handleWheelThrottled = useThrottle((e: React.WheelEvent) => {
    e.preventDefault();
    const size = window.innerWidth > 1024 ? 3 : 2;
    const windowSize = window.innerWidth;
    const newLeft = left + e.deltaY;
    if (
      newLeft >= 0 &&
      newLeft <= (data?.length - size) * (windowSize / size + 32)
    ) {
      setLeft(newLeft);
    }
  }, 16);

  return (
    <section
      onWheel={(e) => {
        handleWheelThrottled(e);
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
