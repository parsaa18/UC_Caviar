import { FunctionComponent } from "react";

interface IProp {
  text: string;
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
  text,
  theme = "navy",
}) => {
  return (
    <div
      className={`px-4 py-3 ${colorTheme[theme]}  rounded-3xl text-${fontSize}`}
    >
      {text}
    </div>
  );
};

export default UcButton1;
