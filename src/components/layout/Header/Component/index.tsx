"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dispatch, FC, SetStateAction, useState } from "react";

// Third Party
import { motion } from "framer-motion";

// Component
import UcButton1 from "@/components/common/Button";
import ContactUsModal from "@/components/ContactUsModal";
import Menu03Icon from "@/components/icons/Menu";
import Link from "next/link";
import Cancel01Icon from "@/components/icons/X";
import HeaderMenu from "../HeaderMenu";

const links = [
  { link: "/", name: "Home" },
  { link: "/products", name: "Products" },
  { link: "/blogs", name: "Blogs" },
  { link: "/OurShipping", name: "Shipping" },
  { link: "/about-us", name: "About Us" },
];

const variant = {
  open: {
    width: "274px",
    height: "332px",
    right: "-16px",
    top: "-8px",
    opacity: 100,
    padding: "24px",
  },
  closed: {
    right: 0,
    top: 0,
    width: 0,
    height: 0,
    padding: 0,
    opacity: 0,
  },
};

const HeaderLogo = () => {
  const pathname = usePathname();

  const title = pathname === "/" ? "UNIQUE CASPIAN CAVIAR" : "UNIQUE CASPIAN";

  return (
    <div className="flex xl:flex-1 items-center gap-3 font-bold font-montrealBold">
      <div>
        <Image
          src={"/images/logo-header.svg"}
          alt="Logo"
          width={56}
          height={56}
          className="object-cover"
        />
      </div>
      <h2
        className={`text-nowrap ${
          pathname === "/" || pathname.toLowerCase() === "/ourshipping"
            ? "text-ucWhite"
            : "text-ucBlack"
        } xs:block hidden `}
      >
        {title}
      </h2>
    </div>
  );
};

const NavMenu: FC<{
  isActive: boolean;
  bg: string;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isActive, setModalIsOpen, bg }) => {
  return (
    <motion.div
      variants={variant}
      initial="closed"
      exit={{}}
      animate={isActive ? "open" : "closed"}
      className={"absolute  backdrop-blur-[49px] rounded-[32px]  " + bg}
    >
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ delay: 0.1 }}
          className="h-full w-full flex flex-col  text-xl  text-ucWhite justify-between"
        >
          {links.map((link, idx) => {
            return (
              <Link href={link.link} key={idx}>
                {link.name}
              </Link>
            );
          })}
          <div
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            Contact Us
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const ContactUsLink = () => {
  const pathname = usePathname();
  const [modalIsOpen, setModalOpen] = useState<boolean>(false);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const color =
    pathname.toLowerCase() === "/ourshipping" || pathname.toLowerCase() === "/"
      ? "#fafafa"
      : "#000000";
  return (
    <>
      <div className="xl:flex-1 flex items-center justify-end">
        <div
          onClick={() => {
            setModalOpen(true);
          }}
          className="lg:block hidden"
        >
          <UcButton1
            text="Contact Us"
            fontSize="sm"
            theme={
              pathname.toLowerCase() === "/ourshipping" ? "revertNavy" : "navy"
            }
          />
        </div>
        <div
          className="lg:hidden relative z-20"
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          {menuIsOpen ? (
            <Cancel01Icon color={"#fafafa"} />
          ) : (
            <Menu03Icon color={color} />
          )}
        </div>
        <NavMenu
          isActive={menuIsOpen}
          bg={
            pathname.toLowerCase() === "/ourshipping" ||
            pathname.toLowerCase() === "/"
              ? "bg-ucWhite/45"
              : "bg-ucBlack/45"
          }
          setModalIsOpen={setModalOpen}
        />
        <ContactUsModal
          modalIsOpen={modalIsOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
      </div>
      <HeaderMenu setContactUs={setModalOpen} />
    </>
  );
};
export { HeaderLogo, ContactUsLink };
