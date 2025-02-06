import ArrowUpRight03Icon from "@/components/icons/ArrowUpRight03";
import WhatsappIcon from "@/components/icons/Whatsapp";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

// Third party
import { motion } from "framer-motion";

interface IProps {
  phoneNumber: string;
  whatsAppLink: string;
  languages: ReactNode[];
}

const Contact: FC<IProps> = ({ phoneNumber, languages, whatsAppLink }) => {
  return (
    <Link
      href={`https://wa.me/${whatsAppLink}`}
      target="_blank"
      className="flex items-center justify-between py-7 px-6 rounded-3xl border-2 border-[#D4D4D4]"
    >
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="flex items-center gap-4"
      >
        <WhatsappIcon color="#46F028" />
        <div className="flex gap-2 items-center">
          {languages?.map((lan, idx) => {
            //@ts-ignore
            return React.cloneElement(lan, { key: idx });
          })}
        </div>
        <p className="text-xl">{phoneNumber}</p>
      </motion.div>
      <ArrowUpRight03Icon color="#fafafa" />
    </Link>
  );
};

export default Contact;
