import { childrenType } from "../children.type";

export interface IDoubleBtnProps {
  text: string;
  theme?: "white" | "glass";
}
export interface ISpanProp {
  children: childrenType;
  visible: boolean;
}
