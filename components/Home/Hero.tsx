import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <div className="bg-center bg-auto bg-[url('/hero.jpg')] p-4">
        <div className="flex flex-col py-12">
          <h3 className="uppercase tracking-widest font-medium">
            welcome to pixoto world
          </h3>
          <h1 className="font-medium text-3xl pt-3">
            We are a digital photography house
          </h1>
          <p className="pt-6 pb-10">
            Discover the world of digital photography with Pixoto. We specialize
            in capturing moments that matter, turning them into lasting
            memories. Explore our gallery and let images speak.{" "}
          </p>
          <div className="flex flex-col gap-3 font-medium">
            <button className="rounded-md bg-slate-50 text-slate-900 border-2 border-transparent px-6 py-3 w-max flex items-center flex-row gap-2">
              Get in touch
              <BsArrowRight className="text-xl" />
            </button>
            <button className="rounded-md bg-transparent border-2 border-slate-50 text-slate-50 px-6 py-3 w-max flex items-center flex-row gap-2">
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
