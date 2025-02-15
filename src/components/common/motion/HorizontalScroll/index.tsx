"use client";
import useScrollStore from "@/core/store/scroll.store";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  totalItems: number;
}
const HorizontalScrollingCarousel: FC<IProps> = ({ children, totalItems }) => {
  const size = window.innerWidth > 1024 ? 3 : 2;
  const windowSize = window.innerWidth;
  const path = usePathname();
  const { productLeft, blogLeft } = useScrollStore((state) => state);
  const left = path.toLowerCase().includes("products") ? productLeft : blogLeft;
  return (
    <section className="hidden md:block w-full h-full">
      <div className=" flex items-start overflow-hidden w-full h-full">
        <div
          style={{
            right: left + "px",
            minWidth: (totalItems * windowSize) / size + "vw",
          }}
          className={`flex gap-8 md:relative  w-full h-full transition-all duration-75`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
export default HorizontalScrollingCarousel;
