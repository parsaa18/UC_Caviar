"use client";
// Component
import Menu03Icon from "@/components/icons/Menu";
import Cancel01Icon from "@/components/icons/X";

// Third Party
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { NavLink } from "../Navlinks/navlinks";

const variant = {
  open: {
    width:
      window.innerWidth > 740
        ? "720px"
        : window.innerWidth > 520
        ? "500px"
        : "320px",
    height: "98px",
    background: " rgb(13 10 11 / 0.35)",
  },
  closed: {
    width: "162px",
    background: " rgb(13 10 11 / 0.02)",
    height: "54px",
  },
};

// navigation links in header
const links = [
  { link: "/", name: "Home" },
  { link: "/products", name: "Products" },
  { link: "/blogs", name: "Blogs" },
  { link: "/OurShipping", name: "Shipping" },
  { link: "/about-us", name: "About Us" },
];

const HeaderMenu: FC<{ setContactUs: Dispatch<SetStateAction<boolean>> }> = ({
  setContactUs,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [menuIsOpen, setMenuOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 200 ? setActive(true) : setActive(false);
  });
  return (
    <motion.div
      initial={{ y: -400 }}
      animate={{ y: active ? 0 : -200 }}
      transition={{ duration: 0.35, ease: [0.35, 1, 0.4, 0.99] }}
      className="left-0 right-0 flex items-center justify-center fixed top-1 "
    >
      <motion.div
        initial={"closed"}
        animate={menuIsOpen ? "open" : "closed"}
        variants={variant}
        transition={{ duration: 0.35, ease: [0.35, 1, 0.4, 0.99] }}
        className={`${
          menuIsOpen && "backdrop-blur-2xl bg-ucBlack/35"
        } absolute top-0 z-20  flex items-end justify-end p-3 flex-col origin-center rounded-[32px] `}
      >
        <div
          className={`p-1 flex absolute top-0 right-1/2 translate-x-1/2 items-center z-30  text-ucWhite rounded-full ${
            !menuIsOpen && "backdrop-blur-2xl bg-ucBlack/35"
          }`}
        >
          <div
            className="p-3 cursor-pointer"
            onClick={() => {
              setMenuOpen(!menuIsOpen);
            }}
          >
            {menuIsOpen ? (
              <Cancel01Icon color={"#fafafa"} width={24} height={24} />
            ) : (
              <Menu03Icon color="#fafafa" width={24} height={24} />
            )}
          </div>
          {menuIsOpen ? (
            <div
              onClick={() => {
                setMenuOpen(false);
              }}
              className="rounded-full text-nowrap cursor-pointer flex items-center justify-center px-4 py-3"
            >
              Cancel Menu
            </div>
          ) : (
            <div
              onClick={() => {
                setContactUs(true);
              }}
              className="rounded-full cursor-pointer flex items-center justify-center px-4 py-3 !backdrop-blur-2xl bg-ucBlack/10 text-nowrap"
            >
              Contact Us
            </div>
          )}
        </div>
        {menuIsOpen && (
          <motion.div className="flex w-full items-center justify-evenly sm:text-base text-xs text-ucWhite flex-wrap">
            {links.map((link, idx) => (
              <NavLink
                link={link.link}
                name={link.name}
                key={idx}
                color={"ucWhite"}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default HeaderMenu;
