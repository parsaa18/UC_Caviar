// components
import NavigationBar from "./Navlinks/navlinks";
import { ContactUsLink, HeaderLogo } from "./Component";

const Header = () => {
  return (
    <div className="w-full maw-w-[1920px] absolute top-0 left-0 right-0 z-30">
      <header className=" flex items-center max-w-[1820px] justify-between absolute top-9 md:left-10 md:right-10 left-6 right-6 m-auto">
        <HeaderLogo />
        <NavigationBar />
        <ContactUsLink />
      </header>
    </div>
  );
};

export default Header;
