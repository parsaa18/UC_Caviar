import Link from "next/link";
import React, { FunctionComponent } from "react";

// Components
import DoubleBtn from "@/components/common/DoubleButton";
import Facebook01Icon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/Instagram";
import Linkedin01Icon from "@/components/icons/Linkedin";
import VolumeHighIcon from "@/components/icons/Sound";
import WhatsappIcon from "@/components/icons/Whatsapp";
import Magnetic from "@/components/common/motion/Magnet";

interface IProps {
  links: string;
  icons: React.JSX.Element;
}
const socialMediaList = [
  { name: "linkedin", link: ".", icon: <Linkedin01Icon /> },
  { name: "whatsapp", link: ".", icon: <WhatsappIcon /> },
  { name: "instagram", link: ".", icon: <InstagramIcon /> },
  { name: "facebook", link: ".", icon: <Facebook01Icon /> },
];

const SocialMediaIcons: FunctionComponent<IProps> = ({ links, icons }) => {
  return (
    <Link
      href={links}
      className="p-2 border-white/10 rounded-full bg-white/20 backdrop-blur-sm"
    >
      {icons}
    </Link>
  );
};
const Hero = () => {
  return (
    <div className="h-[calc(100dvh-32px)] max-h-[1080px] w-full  rounded-[32px]  relative pt-32">
      <div className="absolute top-0 left-0 bottom-0 right-0 -z-10">
        <img
          src="/images/Home_Hero_test.jpg"
          alt="Hero"
          className="rounded-[40px] w-full h-full object-cover "
        />
      </div>
      <div className="flex gap-16 mx-16">
        <div className="ml-4">
          <h1 className="w-[477px] text-5xl text-white">
            Caspian Caviar,
            <br /> the Taste of <br /> the Sea in Every Pearl.
          </h1>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-4 items-start">
            <p className="text-justify w-[477px] leading-5 text-ucWhite">
              We are a leading company specializing in the export of premium
              caviar and canned goods, offering a wide range of packaging
              options. Our products are shipped worldwide with guaranteed
              quality and tailored delivery methods. Contact us for orders and
              inquiries.
            </p>
            <Link href={"/Products"}>
              <DoubleBtn text="Products" />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-ucWhite">Social Media</h5>
            <div className="flex items-center gap-2">
              {socialMediaList.map((sm) => (
                <Magnetic key={sm.name}>
                  <SocialMediaIcons icons={sm.icon} links={sm.link} />
                </Magnetic>
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
    </div>
  );
};

export default Hero;
