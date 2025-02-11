"use client";

import Link from "next/link";
import React, { FC } from "react";

// Components
import DoubleBtn from "@/components/common/DoubleButton";
import Facebook01Icon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/Instagram";
import Linkedin01Icon from "@/components/icons/Linkedin";
import VolumeHighIcon from "@/components/icons/Sound";
import WhatsappIcon from "@/components/icons/Whatsapp";
import Magnetic from "@/components/common/motion/Magnet";

// Third Party
import { motion } from "framer-motion";
import { ISMIconsProps } from "@/core/types/footer/footer.types";

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
  return (
    <section className="h-[calc(100dvh-32px)] min-h-[640px] max-h-[720px] w-full  md:rounded-[32px]  relative pt-32">
      <div className="absolute top-0 left-0 bottom-0 right-0 -z-10">
        <img
          src="/images/Home_Hero_test.jpg"
          alt="Hero"
          className="rounded-[40px] w-full h-full object-cover "
        />
      </div>
      <div className="flex flex-col xl:flex-row gap-6 md:gap-10 lg:gap-16 mx-6 md:mx-16">
        <div className="xl:ml-4">
          <h1 className="text-nowrap text-3xl md:text-4xl lg:text-5xl text-white font-bold font-montrealBold">
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
            <div className="flex items-center w-full justify-between">
              <Link href={"/Products"}>
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
        <div className="p-3 absolute cursor-pointer bottom-6 left-6 bg-ucWhite rounded-full">
          <VolumeHighIcon />
        </div>
      </Magnetic>
    </section>
  );
};

export default Hero;
