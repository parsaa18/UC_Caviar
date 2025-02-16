"use client";

import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

// Components
import DoubleBtn from "@/components/common/DoubleButton";
import Facebook01Icon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/Instagram";
import Linkedin01Icon from "@/components/icons/Linkedin";
import VolumeHighIcon from "@/components/icons/Sound";
import WhatsappIcon from "@/components/icons/Whatsapp";
import Magnetic from "@/components/common/motion/Magnet";

// Third Party
import { AnimatePresence, motion } from "framer-motion";
import { ISMIconsProps } from "@/core/types/footer/footer.types";
import MouseScroll02Icon from "@/components/icons/MouseScroll";

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
const SocialMediaIcons: FC<ISMIconsProps> = ({ links, icons }) => {
  return (
    <Magnetic>
      <Link href={links}>
        <motion.div
          initial="initial"
          whileHover="hovered"
          className="p-2 border-white/10 rounded-full bg-ucWhite md:bg-white/20 backdrop-blur-sm"
        >
          {icons}
        </motion.div>
      </Link>
    </Magnetic>
  );
};
const Hero = () => {
  const [muted, setMuted] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="h-[calc(100dvh-32px)] min-h-[640px] max-h-[720px] w-full  md:rounded-[32px]  relative pt-32">
      <div className="absolute top-0 left-0 bottom-0 right-0 -z-10 overflow-hidden md:rounded-[32px]">
        {/* <img
          src="/images/Home_Hero_test.jpg"
          alt="Hero"
          className="rounded-[40px] w-full h-full object-cover "
        /> */}
        <video
          src="/videos/hero-caviar.mp4"
          autoPlay
          muted={muted}
          loop
          controlsList="nodownload"
          className=" h-full w-full object-cover"
        ></video>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 md:gap-10 lg:gap-16 mx-6 md:mx-16">
        <div className="xl:ml-4">
          <h1 className="text-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-white font-bold font-montrealBold">
            Caspian Caviar,
            <br /> the Taste of <br /> the Sea in Every Pearl.
          </h1>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-4 items-start">
            <p className="text-justify max-w-[477px] leading-5 text-ucWhite">
              We are a leading company specializing in the export of premium
              caviar and canned goods, offering a wide range of packaging
              options. Our products are shipped worldwide with guaranteed
              quality and tailored delivery methods. Contact us for orders and
              inquiries.
            </p>
            <div className="flex xs:flex-row flex-col xs:items-center gap-4 w-full justify-between">
              <Link href={"/products"}>
                <DoubleBtn text="Products" />
              </Link>
              <div className="flex md:hidden items-center gap-2">
                {socialMediaList.map((sm, idx) => (
                  <SocialMediaIcons key={idx} icons={sm.icon} links={sm.link} />
                ))}
              </div>
            </div>
          </div>
          <div className="md:flex hidden flex-col gap-2">
            <h5 className="text-ucWhite ">Social Media</h5>
            <div className="flex items-center gap-2">
              {socialMediaList.map((sm, idx) => (
                <SocialMediaIcons key={idx} icons={sm.icon} links={sm.link} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Magnetic>
        <div
          onClick={() => {
            setMuted(!muted);
          }}
          className="p-3 absolute cursor-pointer bottom-6 left-6 bg-ucWhite rounded-full"
        >
          <VolumeHighIcon />
          <AnimatePresence>
            {muted && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "32px" }}
                exit={{ width: 0 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1.7px] w-[32px] rotate-[-45deg] bg-ucBlack "
              ></motion.div>
            )}
          </AnimatePresence>
        </div>
      </Magnetic>
      <AnimatePresence mode="wait">
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-6 right-6  flex items-center gap-1 text-sm bg-ucWhite rounded-full px-4 py-3 to-white/0"
          >
            Scroll down for more... <MouseScroll02Icon color="#0d0a0b" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
