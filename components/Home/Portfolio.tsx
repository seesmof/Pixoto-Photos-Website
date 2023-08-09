import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { PortfolioData } from "./data/PortfolioData";
import { PortfolioCard } from "./PortfolioCard";

const Portfolio = () => {
  return (
    <section className="bg-background">
      <div className="flex py-10 flex-col p-4 mx-auto max-w-6xl">
        <h3 className="subheading">Portfolio Showcase</h3>
        <h2 className="heading">
          Captivating Photography Collection by Pixoto Studio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
          {PortfolioData.map((service) => (
            <PortfolioCard {...service} key={service.heading} />
          ))}
        </div>
        <Link
          href="/portfolio"
          className="flex font-medium border-b-[1.5px] pb-[2px] self-center text-lg w-max flex-row items-center gap-2"
        >
          View Full Portfolio
          <BsArrowRight className="text-xl stroke-[.5]" />
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
