import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ name, position, comment }: any) => {
  return (
    <>
      <div className="bg-background rounded-md text-slate-200 p-4 flex flex-col">
        <h3 className="text-slate-50 text-xl font-medium">{name}</h3>
        <h3 className="pt-1 pb-3">{position}</h3>
        <p>{comment}</p>
      </div>
    </>
  );
};

const Testimonials = () => {
  const ServicesData = [
    {
      name: "Tammy Powell",
      position: "Photographer",
      comment:
        "This is a testimonial! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur doloribus vero, non omnis mollitia magni provident exercitationem nemo qui!",
    },
    {
      name: "Tammy Powell",
      position: "Photographer",
      comment:
        "This is a testimonial! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur doloribus vero, non omnis mollitia magni provident exercitationem nemo qui!",
    },
    {
      name: "Tammy Powell",
      position: "Photographer",
      comment:
        "This is a testimonial! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur doloribus vero, non omnis mollitia magni provident exercitationem nemo qui!",
    },
    {
      name: "Tammy Powell",
      position: "Photographer",
      comment:
        "This is a testimonial! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur doloribus vero, non omnis mollitia magni provident exercitationem nemo qui!",
    },
    {
      name: "Tammy Powell",
      position: "Photographer",
      comment:
        "This is a testimonial! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur doloribus vero, non omnis mollitia magni provident exercitationem nemo qui!",
    },
    {
      name: "Tammy Powell",
      position: "Photographer",
      comment:
        "This is a testimonial! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur doloribus vero, non omnis mollitia magni provident exercitationem nemo qui!",
    },
  ];

  return (
    <>
      <div className="flex py-10 flex-col p-4 bg-backgroundLight">
        <h3 className="subheading">testimonials</h3>
        <h2 className="heading">What our clients say about us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
          {ServicesData.map((service) => (
            <ServiceCard {...service} key={service.heading} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
