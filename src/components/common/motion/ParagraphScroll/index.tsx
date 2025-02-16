"use client";
import { FC, useRef } from "react";

// Third Party Library
import { useScroll, motion, useTransform } from "framer-motion";

// types
import {
  IParagraphProps,
  ISpanProps,
} from "@/core/types/ParagraphScroll/paragraphScroll";

const ParagraphOnScroll: FC<IParagraphProps> = ({ text, className }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.75", "start 0.55"],
  });
  const words = text.split(" ");
  return (
    <motion.p
      ref={element}
      className={className + " flex flex-wrap"}
      style={{ opacity: scrollYProgress }}
    >
      {words.map((word, idx) => {
        const start = idx / words.length;
        const end = start + 1 / words.length;

        return (
          <WordSpan
            key={idx}
            text={word}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </motion.p>
  );
};

const WordSpan: FC<ISpanProps> = ({ text, range, progress }) => {
  const chars = text.split("");
  const amount = range[1] - range[0];
  const step = amount / text.length;
  return (
    <span className="mr-1 mt-1  relative">
      {chars.map((char, idx) => {
        const start = range[0] + step * idx;
        const end = range[1] + step * (idx + 1);
        return (
          <CharacterSpan
            text={char}
            key={idx}
            range={[start, end]}
            progress={progress}
          />
        );
      })}
    </span>
  );
};

const CharacterSpan: FC<ISpanProps> = ({ text, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute opacity-30">{text}</span>
      <motion.span style={{ opacity }} className="transition-all duration-150">
        {text}
      </motion.span>
    </span>
  );
};

export default ParagraphOnScroll;
