import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ucWhite: "#FAFAFA",
        ucBlack: "#0D0A0B",
        ucNavyBlue1: "#252D62",
        ucNavyBlue2: "#4C5CC8",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montreal: ['"NeueMontrealMedium"'],
        montrealBook: ['"NeueMontrealBook"'],
        montrealItalic: ['"NeueMontrealItalic"'],
        montrealThin: ['"NeueMontrealThin"'],
        montrealSemiBoldItalic: ['"NeueMontrealSemiBolditalic"'],
        montrealBold: ['"NeueMontrealBold"'],
      },
    },
  },
  plugins: [],
} satisfies Config;
