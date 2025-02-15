"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

// third party library
import { AnimatePresence, motion } from "framer-motion";

// Interface
import { INavLinkProp } from "@/core/types/header/header.interface";
import { Zoop } from "@/components/common/motion/Zoop";

// navigation links in header
const links = [
  { link: "/", name: "Home" },
  { link: "/products", name: "Products" },
  { link: "/blogs", name: "Blogs" },
  { link: "/shipping", name: "Shipping" },
  { link: "/about-us", name: "About Us" },
];
// framer motion configuration
const animationConfig = {
  initial: { width: 0, height: 0 },
  animate: { width: "4px", height: "4px" },
  exit: { width: 0, height: 0 },
  transition: { duration: 0.2, ease: [0.68, -0.55, 0.27, 1.55] },
};
const ActiveDot: FC<{ color: string }> = ({ color }) => {
  return (
    <motion.div
      {...animationConfig}
      className={` absolute right-1/2 translate-x-1/2 rounded-full  bg-${color}`}
    ></motion.div>
  );
};

export const NavLink: FC<INavLinkProp> = ({ link, name, color }) => {
  const pathname = usePathname();
  return (
    <Link href={link} className="relative text-nowrap">
      <motion.div initial="initial" whileHover="hovered">
        <Zoop text={name} />

        <AnimatePresence mode="wait">
          {link === pathname && <ActiveDot color={color} />}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};
const NavigationBar = () => {
  return (
    <div className="bg-ucWhite rounded-3xl xl:flex-1 px-6 py-3  hidden lg:flex items-center justify-center gap-10">
      {links.map((link, idx) => (
        <NavLink link={link.link} name={link.name} key={idx} color="ucBlack" />
      ))}
    </div>
  );
};

export default NavigationBar;
