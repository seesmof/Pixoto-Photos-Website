import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="bg-center bg-auto bg-[url('/hero.jpg')] bg-norepeat">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col py-12 md:py-20 lg:py-32 xl:py-48 max-w-xs md:max-w-sm lg:max-w-lg">
          <h3 className="subheading">welcome to pixoto world</h3>
          <h1 className="heading xl:text-6xl xl:leading-[1.25]">
            We are a digital photography house
          </h1>
          <p className="paragraph">
            Discover the world of digital photography with Pixoto. We specialize
            in capturing moments that matter, turning them into lasting
            memories. Explore our gallery and let images speak.
          </p>
          <div className="flex flex-col md:flex-row gap-3 font-medium">
            <button className="btn btn-fill">
              Get in touch
              <BsArrowRight className="text-xl" />
            </button>
            <button className="btn btn-outline">
              Read More
              <BsArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
