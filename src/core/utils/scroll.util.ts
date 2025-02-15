import { WheelEvent } from "react";

export const handleWheel = (
  e: WheelEvent,
  left: number,
  setLeft: (left: number) => void,
  totalItems: number
) => {
  const size = window.innerWidth > 1024 ? 3 : 2;
  const windowSize = window.innerWidth;
  e.preventDefault();
  if (
    left + e.deltaY >= 0 &&
    left + e.deltaY <= (totalItems - size) * (windowSize / size + 32)
  ) {
    setLeft(left + e.deltaY);
  }
};
