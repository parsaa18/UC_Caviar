// components
import NavigationBar from "./Navlinks/navlinks";
import { ContactUsLink, HeaderLogo } from "./Component";
import { div } from "framer-motion/client";

const Header = () => {
  return (
    <div className="w-full maw-w-[1920px] absolute top-0 left-0 right-0 z-30">
      <header className=" flex items-center max-w-[1820px] justify-between absolute top-9 left-10 right-10 m-auto">
        <HeaderLogo />
        <NavigationBar />
        <ContactUsLink />
      </header>
    </div>
  );
};

export default Header;
