"use client";

import Link from "next/link";

// Components
import { Zoop } from "@/components/common/motion/Zoop";

// Third Party
import { motion } from "framer-motion";
import useSWR from "swr";

// Services
import apiFetcher from "@/core/services/api/fetcher.api";
import BlogCard from "@/components/blogs/BlogCard";
import { blogType } from "@/core/types/blog.type";

const Skeleton = () => {
  return <div className="w-full min-h-[450px] bg-ucGray rounded-[40px]"></div>;
};

const LandingBlogs = () => {
  const { data: blogs, isLoading } = useSWR("blogs/", apiFetcher);
  return (
    <section className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-2xl font-bold flex flex-col">
          <span className="text-ucBlack/50 leading-6">Read</span>
          The Newest Blogs
        </h3>
        <Link href={"/blogs"}>
          <motion.div
            initial="initial"
            whileHover="hovered"
            className="px-6 py-3 border-2 border-ucBlack rounded-full"
          >
            <Zoop text="See More" />
          </motion.div>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {isLoading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          blogs?.slice(0, 4).map((blog: blogType, idx: number) => {
            return (
              <BlogCard
                key={idx}
                date={blog.date}
                picture={blog.picture}
                shortDesc={blog.intro}
                title={blog.title}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default LandingBlogs;
