import React from "react";
import { TestimonyCard } from "./TestimonyCard";
import { TestimonialsData } from "./data/TestimonyData";

const Testimonials = () => {
  return (
    <section className="bg-backgroundLight">
      <div className="flex py-10 flex-col p-4 max-w-6xl container mx-auto">
        <h3 className="subheading">Client Testimonials</h3>
        <h2 className="heading">Capturing Moments, Making Memories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
          {TestimonialsData.map((testimonial) => (
            <TestimonyCard {...testimonial} key={testimonial.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
