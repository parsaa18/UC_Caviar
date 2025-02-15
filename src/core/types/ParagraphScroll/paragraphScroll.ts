import { MotionValue } from "framer-motion";

export interface IParagraphProps {
  text: string;
  className: string;
}

export interface ISpanProps {
  text: string;
  range: number[];
  progress: MotionValue<number>;
}
