import Navbar from "@/components/navbar";
import * as React from "react";

const HeroSectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="grid relative bg-no-repeat bg-[url('/assets/contact-header.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a2835] z-10"></div>
        <div className="grid max-w-6xl p-4 mx-auto w-full z-20">
          <div className="mb-12">
            <Navbar />
          </div>
          {children}
        </div>
      </section>
    </>
  );
};

export default HeroSectionWrapper;
