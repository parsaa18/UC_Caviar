"use client";
import UcButton1 from "@/components/common/Button";
import ContactUsModal from "@/components/ContactUsModal";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [modalIsOpen, setModalOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex-1 flex items-center justify-end">
        <div
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <UcButton1
            text="Contact Us"
            fontSize="sm"
            theme={
              pathname.toLowerCase() === "/shipping" ? "revertNavy" : "navy"
            }
          />
        </div>
        <ContactUsModal
          modalIsOpen={modalIsOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
      </div>
    </>
  );
};
export { HeaderLogo, ContactUsLink };
