const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        ucWhite: "#FAFAFA",
        ucBlack: "#0D0A0B",
        ucNavyBlue1: "#252D62",
        ucNavyBlue2: "#4C5CC8",
        ucRed: "#FF5D5F",
        ucGray: "#F2F2F2",
      },
      fontFamily: {
        montreal: ["NeueMontrealMedium"],
        montrealBook: ["NeueMontrealBook"],
        montrealItalic: ["NeueMontrealItalic"],
        montrealThin: ["NeueMontrealThin"],
        montrealSemiBoldItalic: ["NeueMontrealSemiBolditalic"],
        montrealBold: ["NeueMontrealBold"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
});
