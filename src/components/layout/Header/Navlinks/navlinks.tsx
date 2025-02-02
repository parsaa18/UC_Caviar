"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

// third party library
import { AnimatePresence, motion } from "framer-motion";

// Interface
import { INavLinkProp } from "@/core/types/header/header.interface";

// navigation links in header
const links = [
  { link: "/", name: "Home" },
  { link: "/Products", name: "Products" },
  { link: "/Blogs", name: "Blogs" },
  { link: "/Shipping", name: "Shipping" },
  { link: "/About-Us", name: "About Us" },
];
// framer motion configuration
const animationConfig = {
  initial: { width: 0, height: 0 },
  animate: { width: "6px", height: "6px" },
  exit: { width: 0, height: 0 },
  transition: { duration: 0.2, ease: [0.68, -0.55, 0.27, 1.55] },
};
const ActiveDot = () => {
  return (
    <motion.div
      {...animationConfig}
      className=" absolute right-1/2 translate-x-1/2 rounded-full  bg-ucBlack"
    ></motion.div>
  );
};

const NavLink: FunctionComponent<INavLinkProp> = ({ link, name }) => {
  const pathname = usePathname();
  return (
    <Link href={link} className="relative">
      {name}
      <AnimatePresence mode="wait">
        {link === pathname && <ActiveDot />}
      </AnimatePresence>
    </Link>
  );
};
const NavigationBar = () => {
  return (
    <div className="bg-ucWhite rounded-3xl flex-1 px-6 py-3 flex-2 flex items-center gap-10">
      {links.map((link, idx) => (
        <NavLink link={link.link} name={link.name} key={idx} />
      ))}
    </div>
  );
};

export default NavigationBar;
