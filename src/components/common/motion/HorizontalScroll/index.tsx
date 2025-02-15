"use client";
import { FC, ReactNode, useState, WheelEvent } from "react";

interface IProps {
  children: ReactNode;
  totalItems: number;
}
const HorizontalScrollingCarousel: FC<IProps> = ({ children, totalItems }) => {
  const size = window.innerWidth > 1024 ? 3 : 2;

  const [left, setLeft] = useState(0);
  const windowSize = window.innerWidth;
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (
      left + e.deltaY >= 0 &&
      left + e.deltaY <= (totalItems - size) * (windowSize / size + 32)
    ) {
      setLeft(left + e.deltaY);
    }
  };

  return (
    <section className="hidden md:block w-full h-full">
      <div
        onWheel={handleWheel}
        className=" flex items-start overflow-hidden w-full h-full"
      >
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
