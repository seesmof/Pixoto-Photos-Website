"use client";
import React from "react";
import { ContactSubsection } from "./ContactSubsection";

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
      <div className="py-10 bg-[url('/mainContact.png')] bg-auto bg-center">
        <div className="flex flex-col md:flex-row md:gap-8 layout">
          <div className="w-max">
            <h3 className="subheading">Simple and Convenient Steps</h3>
            <h2 className="heading">Need Assistance from Our Photographer?</h2>
          </div>
          <div className="flex w-full flex-col mt-6 bg-backgroundLight rounded-md p-4 gap-4">
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
