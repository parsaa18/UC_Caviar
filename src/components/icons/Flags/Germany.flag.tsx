const GermanyFlag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 11H31V21H1V11Z" fill="#CC2B1D" />
    <path
      d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z"
      fill="black"
    />
    <path
      d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
      fill="#F8D147"
    />
    <path
      opacity="0.15"
      d="M27 4H5C2.791 4 1 5.791 1 8V24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V8C31 5.791 29.209 4 27 4ZM30 24C30 25.654 28.654 27 27 27H5C3.346 27 2 25.654 2 24V8C2 6.346 3.346 5 5 5H27C28.654 5 30 6.346 30 8V24Z"
      fill="black"
    />
    <path
      opacity="0.2"
      d="M27 5H5C3.343 5 2 6.343 2 8V9C2 7.343 3.343 6 5 6H27C28.657 6 30 7.343 30 9V8C30 6.343 28.657 5 27 5Z"
      fill="white"
    />
  </svg>
);

export default GermanyFlag;
