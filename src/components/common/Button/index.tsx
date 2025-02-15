"use client";

import { FC } from "react";
import { Zoop } from "../motion/Zoop";
import { motion } from "framer-motion";

interface IProp {
  text: string;
  fontWeight?: string;
  fontSize?: string;
  theme?: "navy" | "revertNavy" | "white";
}

const colorTheme = {
  navy: "bg-ucNavyBlue1 text-ucWhite",
  revertNavy: "text-ucNavyBlue1 bg-ucWhite",
  white: "bg-white text-ucBlack border-2 border-ucBlack",
};

const UcButton1: FC<IProp> = ({
  fontSize = "base",
  fontWeight = "bold",
  text,
  theme = "navy",
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`cursor-pointer px-4 py-3 ${colorTheme[theme]}  font-${fontWeight} rounded-3xl text-${fontSize}`}
    >
      <Zoop text={text} />
    </motion.div>
  );
};

export default UcButton1;
