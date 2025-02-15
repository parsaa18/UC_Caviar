import BlogCard from "@/components/blogs/BlogCard";
import BlogsList from "@/components/blogs/BlogsList";
import ListTitle from "@/components/common/ListTitle";
import HorizontalScrollingCarousel from "@/components/common/motion/HorizontalScroll";
import apiFetcher from "@/core/services/api/fetcher.api";
import { blogType } from "@/core/types/blog.type";
import React from "react";

const page = async () => {
  const data = await apiFetcher("blogs/");
  return (
    <section className="pt-32 h-[calc(100vh-32px)] flex items-center flex-col gap-16 px-6 ">
      <ListTitle title={"Blogs"} titleStart="Our" totalItems={2} />

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
