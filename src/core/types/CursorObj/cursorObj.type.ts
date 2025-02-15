import { Dispatch, ReactNode } from "react";

export type cursorObjType = {
  isActive: boolean;
  index: number | null;
};

export interface IViewCursorProps {
  cursorObj: cursorObjType;
}
export interface IViewCardProps {
  index: number;
  handleCursorObj: Dispatch<cursorObjType>;
  children: ReactNode;
}
