"use client";
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";

// Third Party Library
// import { motion, useTransform, useScroll } from "framer-motion";

interface IProps {
  children: ReactNode;
}
const HorizontalScrollingCarousel: FC<IProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [left, setLeft] = useState(0);

  const handleWheel = (e: any) => {
    console.log("amount", left + e.deltaY);

    e.preventDefault();
    if (left + e.deltaY >= 0 && left + e.deltaY <= 1600) {
      setLeft(left + e.deltaY);
    }
  };

  return (
    <section className=" w-full ">
      <div
        onWheel={handleWheel}
        className=" flex items-center overflow-hidden w-full"
      >
        <div
          style={{ right: left + "px" }}
          // ref={containerRef}
          className={"flex min-w-[200vw]  gap-8 relative  w-full "}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
export default HorizontalScrollingCarousel;
