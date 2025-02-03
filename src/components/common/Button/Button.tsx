import { FunctionComponent } from "react";
import { Zoop } from "../motion/Zoop";

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

const UcButton1: FunctionComponent<IProp> = ({
  fontSize = "base",
  fontWeight = "bold",
  text,
  theme = "navy",
}) => {
  return (
    <div
      className={`px-4 py-3 ${colorTheme[theme]}  font-${fontWeight} rounded-3xl text-${fontSize}`}
    >
      <Zoop text={text} />
    </div>
  );
};

export default UcButton1;
