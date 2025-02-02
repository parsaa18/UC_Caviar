// components
import NavigationBar from "./Navlinks/navlinks";
import { ContactUsLink, HeaderLogo } from "./Components";

const Header = () => {
  return (
    <header className="flex items-center justify-between fixed top-9 left-10 right-10 ">
      <HeaderLogo />
      <NavigationBar />
      <ContactUsLink />
    </header>
  );
};

export default Header;
