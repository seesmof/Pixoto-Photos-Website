import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { ServiceCard } from "./ServiceCard";
import {
  ServicesData,
  cardsGridWrapperClasses,
  sectionWrapperClasses,
} from "./data/ServicesData";

const Services = () => {
  return (
    <section className="bg-backgroundLight">
      <div className={sectionWrapperClasses}>
        <h3 className="subheading">Services Offered</h3>
        <h2 className="heading">Elevating Your Photography to Excellence</h2>
        <button className="btn btn-fill mt-8">
          All Services
          <BsArrowRight className="text-xl" />
        </button>
        <div className={cardsGridWrapperClasses}>
          {ServicesData.map((service) => (
            <ServiceCard {...service} key={service.heading} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
