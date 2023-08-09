import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { ServiceCard } from "./ServiceCard";
import { ServicesData } from "./data/ServicesData";

const Services = () => {
  return (
    <section className="bg-backgroundLight">
      <div className="flex py-10 flex-col p-4 mx-auto max-w-6xl">
        <h3 className="subheading">Services Offered</h3>
        <h2 className="heading">Elevating Your Photography to Excellence</h2>
        <button className="btn btn-fill mt-8">
          All Services
          <BsArrowRight className="text-xl" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
          {ServicesData.map((service) => (
            <ServiceCard {...service} key={service.heading} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
