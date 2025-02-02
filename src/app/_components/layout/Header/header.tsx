import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <div className="flex items-center gap-3 text-ucBlack font-bold font-montrealBold">
      <div>
        <Image
          src={"/images/logo-header.svg"}
          alt="Logo"
          width={56}
          height={56}
          className="object-cover"
        />
      </div>
      <h2>UNIQUE CASPIAN CAVIAR</h2>
    </div>
  );
};

const ContactUsLink = () => {
  return <Link href={"."}></Link>;
};
const Header = () => {
  return (
    <header className=" w-full flex items-center fixed top-9">
      <HeaderLogo />
      <div></div>
      <ContactUsLink />
    </header>
  );
};

export default Header;
