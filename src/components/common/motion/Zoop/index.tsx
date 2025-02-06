"use client";
import { FC } from "react";

// Third Party library
import { motion } from "framer-motion";

// motion variables
const DURATION = 0.25;
const STAGGER = 0.025;

// interface
interface IProps {
  text: string;
  visible?: boolean;
}

const AnimationSpan: FC<IProps> = ({ text, visible }) => {
  return (
    <div className={visible ? "" : "absolute inset-0"}>
      {text.split("").map((letter: string, idx: number) =>
        letter === " " ? (
          <span key={idx}> </span>
        ) : (
          <motion.span
            variants={
              visible
                ? {
                    initial: {
                      y: 0,
                    },
                    hovered: {
                      y: "-100%",
                    },
                  }
                : {
                    initial: {
                      y: "100%",
                    },
                    hovered: {
                      y: 0,
                    },
                  }
            }
            transition={{
              duration: DURATION,
              ease: [0.68, -0.55, 0.3, 1.25],
              delay: STAGGER * idx,
            }}
            className="inline-block"
            key={idx}
          >
            {letter}
          </motion.span>
        )
      )}
    </div>
  );
};

export const Zoop: FC<IProps> = ({ text }) => {
  return (
    <div className="relative h-full overflow-hidden">
      <AnimationSpan text={text} visible={true} />
      <AnimationSpan text={text} visible={false} />
    </div>
  );
};
