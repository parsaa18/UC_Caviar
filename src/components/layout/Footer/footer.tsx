"use client";
import Link from "next/link";
import { FC, useState } from "react";

// Components
import Magnetic from "@/components/common/motion/Magnet";
import Facebook01Icon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/Instagram";
import Linkedin01Icon from "@/components/icons/Linkedin";
import WhatsappIcon from "@/components/icons/Whatsapp";
import DoubleBtn from "@/components/common/DoubleButton";

// Third party
import { motion } from "framer-motion";

// Types
import {
  INavProps,
  ISMIconsProps,
  linkType,
} from "@/core/types/footer/footer.types";
import ContactUsModal from "@/components/ContactUsModal";

// links and icons list
const pagesLink: linkType[] = [
  { link: "/", name: "Home" },
  { link: "/products", name: "Products" },
  { link: "/blogs", name: "Blogs" },
  { link: "/OurShipping", name: "Shipping" },
  { link: "/About-Us", name: "About Us" },
];
const legalLinks: linkType[] = [
  { link: "/", name: "Legal & Payment" },
  { link: "/", name: "Legal & Payment" },
  { link: "/", name: "Legal & Payment" },
];

const color = window.innerWidth > 768 ? "#fafafa" : "#0D0A0B";

const socialMediaList = [
  {
    name: "linkedin",
    link: ".",
    icon: <Linkedin01Icon color={color} />,
  },
  {
    name: "whatsapp",
    link: ".",
    icon: <WhatsappIcon color={color} />,
  },
  {
    name: "instagram",
    link: ".",
    icon: <InstagramIcon color={color} />,
  },
  {
    name: "facebook",
    link: ".",
    icon: <Facebook01Icon color={color} />,
  },
];

// footer's first column
const FirstCol = () => {
  return (
    <div className="flex items-start flex-col gap-6 ">
      <div className="flex items-center gap-3 md:gap-6">
        <div className="md:w-auto w-16">
          <img src={"images/logo-footer.svg"} alt="Logo-footer" />
        </div>
        <h2 className="text-lg sm:text-xl font-bold md:text-ucWhite text-ucNavyBlue1 text-nowrap font-montrealBold">
          UNIQUE CASPIAN CAVIAR
        </h2>
      </div>
      <p className="max-w-[450px] leading-5 font-[500]  text-justify md:block hidden ">
        Unique Caspian is a brand that supplies high-quality Iranian caviar in
        bulk to restaurants, hotels, grocery stores, and wholesale buyers. The
        company, through its representatives in Europe, ensures a reliable and
        more satisfactory ordering, delivery, and customer service process.
      </p>
    </div>
  );
};

const FooterNav: FC<INavProps> = ({ title, pages }) => {
  return (
    <div className="flex flex-col md:items-start items-center gap-5 md:w-auto w-full">
      <h4 className="text-xl font-bold font-montrealBold md:block hidden">
        {title}
      </h4>
      <ul className="md:flex flex-col gap-3 w-full  justify-between grid grid-cols-3">
        {pages.map((page, idx) => {
          return (
            <Link href={page.link} key={idx}>
              {page.name}
            </Link>
          );
        })}
        <Link href={"/contact-us"} className="md:hidden">
          Contact Us
        </Link>
      </ul>
    </div>
  );
};
const SocialMediaIcons: FC<ISMIconsProps> = ({ links, icons }) => {
  return (
    <Magnetic>
      <Link href={links}>
        <motion.div
          initial="initial"
          whileHover="hovered"
          className="p-2 border-white/10 md:shadow-none shadow-sm shadow-black/30 rounded-full bg-white/20 backdrop-blur-sm"
        >
          {icons}
        </motion.div>
      </Link>
    </Magnetic>
  );
};
const LastCol = () => {
  const [modalIsOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h5 className="text-ucWhite md:block hidden">Social Media</h5>
        <div className="flex items-center justify-between md:justify-normal gap-2">
          {socialMediaList.map((sm) => (
            <SocialMediaIcons key={sm.name} icons={sm.icon} links={sm.link} />
          ))}
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-3">
        <h5 className="md:text-ucWhite text-xl font-montrealBold font-bold w-[140px]">
          Let's talk about our products...
        </h5>
        <div
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <DoubleBtn text="Contact Us" theme="white" />
        </div>
        <ContactUsModal
          modalIsOpen={modalIsOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col md:bg-ucNavyBlue1 justify-between lg:pr-20 xl:pr-32 xl:mx-[101px] md:text-ucWhite px-4 md:px-8 py-6 rounded-3xl pb-20 gap-10 md:gap-12 xl:gap-20 mb-5">
      <FirstCol />
      <div className="md:mt-9 flex md:flex-row flex-col px-3 gap-10 md:gap-12 xl:gap-20">
        <FooterNav pages={pagesLink} title="Pages" />
        {window.innerWidth > 1000 && (
          <FooterNav pages={legalLinks} title="Legal & Payment" />
        )}
        <LastCol />
      </div>
    </footer>
  );
};

export default Footer;
