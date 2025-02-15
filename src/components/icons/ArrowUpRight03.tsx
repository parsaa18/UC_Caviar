import React from "react";

const ArrowUpRight03Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill={"none"}
    {...props}
  >
    <path
      d="M16.5 7.5L6 18"
      stroke={props.color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16"
      stroke={props.color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowUpRight03Icon;
