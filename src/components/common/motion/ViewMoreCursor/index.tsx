import { useRef, useEffect, FC } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  IViewCardProps,
  IViewCursorProps,
} from "@/core/types/CursorObj/cursorObj.type";
import Magnetic from "../Magnet";

const cursorClassName =
  "w-[90px] h-[90px] rounded-[50%] bg-ucNavyBlue2 text-ucWhite absolute z-40 flex items-center justify-center text-sm ";

export const ViewCursor: FC<IViewCursorProps> = ({ cursorObj }) => {
  const { isActive, index } = cursorObj;
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  useEffect(() => {
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={cursor}
        className={cursorClassName}
        style={{ pointerEvents: "none" }}
        variants={scaleAnimation}
        initial="initial"
        animate={isActive ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className={cursorClassName}
        style={{ pointerEvents: "none", backgroundColor: "transparent" }}
        variants={scaleAnimation}
        initial="initial"
        animate={isActive ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
};

export const ViewedCard: FC<IViewCardProps> = ({
  index,
  handleCursorObj,
  children,
}) => {
  return (
    <div
      onMouseEnter={() => {
        handleCursorObj({ isActive: true, index });
      }}
      onMouseLeave={() => {
        handleCursorObj({ isActive: false, index });
      }}
      className="cursor-pointer w-full h-full"
    >
      {children}
    </div>
  );
};
