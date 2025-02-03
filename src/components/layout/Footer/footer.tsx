import Link from "next/link";
import { FunctionComponent } from "react";

// Components
import Magnetic from "@/components/common/motion/Magnet";
import Facebook01Icon from "@/components/icons/facebook";
import InstagramIcon from "@/components/icons/Instagram";
import Linkedin01Icon from "@/components/icons/Linkedin";
import WhatsappIcon from "@/components/icons/Whatsapp";

// Types
import {
  INavProps,
  ISMIconsProps,
  linkType,
} from "@/core/types/footer/footer.types";
import DoubleBtn from "@/components/common/DoubleButton";

// links and icons list
const pagesLink: linkType[] = [
  { link: "/", name: "Home" },
  { link: "/Products", name: "Products" },
  { link: "/Blogs", name: "Blogs" },
  { link: "/Shipping", name: "Shipping" },
  { link: "/About-Us", name: "About Us" },
];
const legalLinks: linkType[] = [
  { link: "/", name: "Legal & Payment" },
  { link: "/", name: "Legal & Payment" },
  { link: "/", name: "Legal & Payment" },
];
const socialMediaList = [
  { name: "linkedin", link: ".", icon: <Linkedin01Icon /> },
  { name: "whatsapp", link: ".", icon: <WhatsappIcon /> },
  { name: "instagram", link: ".", icon: <InstagramIcon /> },
  { name: "facebook", link: ".", icon: <Facebook01Icon /> },
];

// footer's first column
const FirstCol = () => {
  return (
    <div className="flex items-start flex-col gap-6 ">
      <div className="flex items-center gap-6">
        <div>
          <img src={"images/logo-footer.svg"} alt="Logo-footer" />
        </div>
        <h2 className="text-xl font-bold font-montrealBold">
          UNIQUE CASPIAN CAVIAR
        </h2>
      </div>
      <p className="w-[402px] leading-5 font-medium text-justify ">
        Lorem ipsum dolor sit amet consectetur. Condimentum vitae sit placerat
        suscipit. Bibendum quis facilisi ultrices elit tempus sit lectus tortor
        enim. Elit congue amet at lorem lectus sagittis sollicitudin. Dolor elit
        nunc nunc orci lectus erat nibh. Amet fringilla
      </p>
    </div>
  );
};

const FooterNav: FunctionComponent<INavProps> = ({ title, pages }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-xl font-bold font-montrealBold">{title}</h4>
      <ul className="flex flex-col gap-3">
        {pages.map((page, idx) => {
          return (
            <Link href={page.link} key={idx}>
              {page.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

const SocialMediaIcons: FunctionComponent<ISMIconsProps> = ({
  links,
  icons,
}) => {
  return (
    <Link
      href={links}
      className="p-2 border-white/10 rounded-full bg-white/20 backdrop-blur-sm"
    >
      {icons}
    </Link>
  );
};

const LastCol = () => {
  return (
    <div className="flex flex-col gap-8">
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
      <div className="flex flex-col gap-3">
        <h5 className="text-ucWhite text-xl font-montrealBold font-bold w-[140px]">
          Let's talk about our products...
        </h5>
        <DoubleBtn text="Contact Us" theme="white" />
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="flex bg-ucNavyBlue1 mx-[101px] text-ucWhite px-8 py-6 rounded-3xl pb-20 gap-32 mb-5">
      <FirstCol />
      <div className="mt-9 flex gap-20">
        <FooterNav pages={pagesLink} title="Pages" />
        <FooterNav pages={legalLinks} title="Legal & Payment" />
        <LastCol />
      </div>
    </footer>
  );
};

export default Footer;
