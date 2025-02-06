"use client";
// Third Party Library
import {
  easeInOut,
  motion,
  useAnimation,
  useInView,
  useScroll,
} from "framer-motion";
import { FC, useEffect, useRef } from "react";

interface IProps {
  className: string;
  width: string;
  height: string;
  idx: number;
}
const SignIcon: FC<IProps> = (props) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInview]);

  return (
    <svg
      {...props}
      viewBox="0 0 72 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        ref={ref}
        variants={{
          hidden: { pathLength: 0 },
          visible: { pathLength: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.65,
          delay: 0.35 * props.idx,
          ease: easeInOut,
        }}
        d="M24.7159 35.4021C24.7159 35.4021 70.7344 29.0944 71.3154 13.7794C71.7474 2.39192 49.4323 0.187517 29.7803 1.79582C14.8838 3.01495 1.28077 5.66715 0.610639 16.6704C-0.59321 36.4369 61.9619 31.0627 61.9619 31.0627"
        stroke="#252D62"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default SignIcon;
