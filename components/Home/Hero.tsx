import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <div className="bg-center bg-auto bg-[url('/hero.jpg')] p-4">
        <div className="flex flex-col py-12 max-w-xs">
          <h3 className="subheading">welcome to pixoto world</h3>
          <h1 className="heading">We are a digital photography house</h1>
          <p className="paragraph">
            Discover the world of digital photography with Pixoto. We specialize
            in capturing moments that matter, turning them into lasting
            memories. Explore our gallery and let images speak.
          </p>
          <div className="flex flex-col gap-3 font-medium">
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
    </>
  );
};

export default Hero;
