"use client";
import UcButton1 from "@/components/common/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLogo = () => {
  const pathname = usePathname();

  const title = pathname === "/" ? "UNIQUE CASPIAN CAVIAR" : "UNIQUE CASPIAN";

  return (
    <div className="flex flex-1 items-center gap-3 font-bold font-montrealBold">
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
        className={`${
          pathname === "/" || pathname.toLowerCase() === "/shipping"
            ? "text-ucWhite"
            : "text-ucBlack"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

const ContactUsLink = () => {
  const pathname = usePathname();
  return (
    <div className="flex-1 flex items-center justify-end">
      <Link href={"."}>
        <UcButton1
          text="Contact Us"
          fontSize="sm"
          theme={pathname.toLowerCase() === "/shipping" ? "revertNavy" : "navy"}
        />
      </Link>
    </div>
  );
};
export { HeaderLogo, ContactUsLink };
