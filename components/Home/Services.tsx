import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { ServiceCard } from "./ServiceCard";

const ServicesData = [
  {
    image: "Aerial",
    heading: "Aerial Photography",
    paragraph:
      "Capture stunning aerial views from above with our drone photography services.",
  },
  {
    image: "Video",
    heading: "Videography",
    paragraph:
      "Immortalize your special moments through professional videography and cinematography services.",
  },
  {
    image: "Photo",
    heading: "Photography",
    paragraph:
      "Preserve life's precious memories with timeless professional photography services.",
  },
  {
    image: "Snapshot",
    heading: "Snapshot Studios",
    paragraph:
      "Get quick on-location photoshoots and headshots at our convenient studio.",
  },
  {
    image: "Flash",
    heading: "Flash Photography",
    paragraph:
      "Illuminate dim scenes with our expert flash and lighting equipment and techniques.",
  },
  {
    image: "Flashy",
    heading: "Flashy Frames",
    paragraph:
      "Add some flash and pizzazz to your photos with fun prints and customized framing.",
  },
];

const Services = () => {
  return (
    <section className="bg-backgroundLight">
      <div className="layout">
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
