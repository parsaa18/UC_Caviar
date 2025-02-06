"use client";

import React, { FC } from "react";
import Contact from "@/components/common/Contact/indext";
import Modal from "@/components/common/Modal";
import EmarartFlag from "@/components/icons/Flags/Emarat.flag";
import FranceFlag from "@/components/icons/Flags/France.flag";
import GermanyFlag from "@/components/icons/Flags/Germany.flag";
import SpainFlag from "@/components/icons/Flags/Spain.flag";
import UKFlag from "@/components/icons/Flags/UK.flag";

const contacts = {
  ceo: {
    phone: "+98 9355051917",
    whatsappLink: "+989355051917",
    languages: [<EmarartFlag />],
  },
  contactPerson: [
    {
      phone: "+49 1775359546",
      whatsappLink: "+491775359546",
      languages: [<UKFlag />, <GermanyFlag />],
    },
    {
      phone: "+34 661348478",
      whatsappLink: "+34661348478",
      languages: [<SpainFlag />, <FranceFlag />],
    },
  ],
};

interface IProps {
  modalIsOpen: boolean;
  onClose: () => void;
}

const ContactUsModal: FC<IProps> = ({ modalIsOpen, onClose }) => {
  return (
    <Modal
      width={466}
      isOpen={modalIsOpen}
      onClose={onClose}
      title="Contact Us"
    >
      <div className="flex flex-col w-full items-center gap-6">
        <h5>Click on the desired language</h5>
        <div className="gap-4 flex flex-col w-full">
          <h6 className="opacity-50">
            Contact to <span> “ CEO ”</span>
          </h6>
          <Contact
            languages={contacts.ceo.languages}
            phoneNumber={contacts.ceo.phone}
            whatsAppLink={contacts.ceo.whatsappLink}
          />
        </div>
        <div className="gap-4 flex flex-col w-full">
          <h6 className="opacity-50">
            Contact to <span>“ Contact Person ”</span>{" "}
          </h6>
          {contacts.contactPerson.map((contact, idx) => {
            return (
              <Contact
                whatsAppLink={contact.whatsappLink}
                languages={contact.languages}
                phoneNumber={contact.phone}
                key={contact.phone + idx}
              />
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default ContactUsModal;
