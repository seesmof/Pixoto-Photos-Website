"use client";
import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

const ContactSubsection = ({ heading, icon, content }: any) => {
  const IconComponent =
    icon === "phone"
      ? AiOutlinePhone
      : icon === "mail"
      ? AiOutlineMail
      : AiOutlineHome;

  return (
    <>
      <div className="flex flex-col gap-1">
        <h3 className="font-medium">{heading}</h3>
        <button
          onClick={() => {
            navigator?.clipboard?.writeText(content);
          }}
          className="flex flex-row items-center gap-2"
        >
          {IconComponent && <IconComponent className="text-xl stroke-[3]" />}
          {content}
        </button>
      </div>
    </>
  );
};

const Contact = () => {
  const ContactInfo = [
    {
      heading: "Reach Us via Email",
      icon: "mail",
      content: "contact@pixoto.com",
    },
    {
      heading: "Contact Us via Phone",
      icon: "phone",
      content: "+91 9876543210",
    },
    {
      heading: "Visit Our Location",
      icon: "address",
      content: "123 Main Street, New York, NY 10001",
    },
  ];

  return (
    <>
      <div className="flex z-10 relative py-10 flex-col p-4 bg-[url('/mainContact.png')] bg-auto bg-center">
        <div className="absolute z-10 inset-0 bg-slate-900/30"></div>
        <div className="z-20">
          <h3 className="subheading">Simple and Convenient Steps</h3>
          <h2 className="heading">Require Assistance from Our Photographer?</h2>
          <div className="flex flex-col mt-6 bg-backgroundLight rounded-md p-4 gap-4">
            {ContactInfo.map((info) => (
              <ContactSubsection {...info} key={info.heading} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
