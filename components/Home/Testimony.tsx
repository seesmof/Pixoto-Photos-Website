import React from "react";
import { TestimonyCard } from "./TestimonyCard";
import {
  TestimonialsData,
  cardsGridWrapperClasses,
  sectionWrapperClasses,
} from "./data/TestimonyData";

const Testimonials = () => {
  return (
    <section className="bg-backgroundLight">
      <div className={sectionWrapperClasses}>
        <h3 className="subheading">Client Testimonials</h3>
        <h2 className="heading">Capturing Moments, Making Memories</h2>
        <div className={cardsGridWrapperClasses}>
          {TestimonialsData.map((testimonial) => (
            <TestimonyCard {...testimonial} key={testimonial.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
