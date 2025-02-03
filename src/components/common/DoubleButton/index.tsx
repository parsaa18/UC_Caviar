"use client";
import { FunctionComponent } from "react";

// Components
import ArrowUpRight03Icon from "@/components/icons/ArrowUpRight03";

// Third Party Library
import { motion } from "framer-motion";

// types
import {
  IDoubleBtnProps,
  ISpanProp,
} from "@/core/types/DoubleBtn/doubleBtn.types";

// motion variables
const DURATION = 0.25;
const STAGGER = 0.025;

const AnimationSpan: FunctionComponent<ISpanProp> = ({ children, visible }) => {
  return (
    <div
      className={
        visible
          ? "flex items-center justify-center "
          : " flex items-center justify-center absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
      }
    >
      <motion.span
        className="inline-block text-nowrap"
        variants={
          visible
            ? {
                initial: {
                  y: 0,
                  x: 0,
                },
                hovered: {
                  y: "-110%",
                  x: "90%",
                },
              }
            : {
                initial: {
                  y: "110%",
                  x: "-90%",
                },
                hovered: {
                  y: 0,
                  x: 0,
                },
              }
        }
        transition={{
          duration: DURATION,
          ease: [0.68, -0.55, 0.3, 1.25],
          delay: STAGGER,
        }}
      >
        {children}
      </motion.span>
    </div>
  );
};

const themes = {
  glass: {
    className:
      "border border-white/10 bg-white/20 backdrop-blur-sm text-ucWhite",
    color: "#fafafa",
  },
  white: {
    className: " bg-ucWhite text-ucNavyBlue1 ",
    color: "#252D62",
  },
};
const DoubleBtn: FunctionComponent<IDoubleBtnProps> = ({
  text,
  theme = "glass",
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="flex items-center "
    >
      <div
        className={`rounded-3xl  px-4 py-2 relative overflow-hidden  ${themes[theme].className} `}
      >
        <AnimationSpan visible={true}>{text}</AnimationSpan>
        <AnimationSpan visible={false}>{text}</AnimationSpan>
      </div>
      <div
        className={`rounded-full  p-2  relative overflow-hidden ${themes[theme].className}`}
      >
        <AnimationSpan visible={true}>
          <ArrowUpRight03Icon color={themes[theme].color} />
        </AnimationSpan>
        <AnimationSpan visible={false}>
          <ArrowUpRight03Icon color={themes[theme].color} />
        </AnimationSpan>
      </div>
    </motion.div>
  );
};

export default DoubleBtn;
