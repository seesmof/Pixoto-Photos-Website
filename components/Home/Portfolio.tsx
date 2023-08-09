import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";
import {
  PortfolioData,
  bottomButtonClasses,
  cardsGridWrapperClasses,
  sectionWrapperClasses,
} from "./data/PortfolioData";
import { PortfolioCard } from "./PortfolioCard";

const Portfolio = () => {
  return (
    <section className="bg-background">
      <div className={sectionWrapperClasses}>
        <h3 className="subheading">Portfolio Showcase</h3>
        <h2 className="heading">
          Captivating Photography Collection by Pixoto Studio
        </h2>
        <div className={cardsGridWrapperClasses}>
          {PortfolioData.map((service) => (
            <PortfolioCard {...service} key={service.heading} />
          ))}
        </div>
        <Link href="/portfolio" className={bottomButtonClasses}>
          View Full Portfolio
          <BsArrowRight className="text-xl stroke-[.5]" />
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
