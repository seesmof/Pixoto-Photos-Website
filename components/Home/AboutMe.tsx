import React from "react";
import { BsArrowRight } from "react-icons/bs";

const AboutMe = () => {
  return (
    <>
      <div className="flex py-10 flex-col p-4">
        <img
          src="/mainAboutMe.jpg"
          alt="a picture of a man standing, holding a camera in his hands, looking in the camera and smiling"
          className="rounded-full outline outline-offset-[12px] outline-slate-500 outline-1 object-cover self-center max-w-sm"
        />
        <h3 className="subheading pt-12">about me</h3>
        <h2 className="heading">
          We're the leading photo studio in the country
        </h2>
        <p className="paragraph">
          It is a long established fact that a reader will be distr by the
          readabll content of a page when looking at its layout. The point of
          using Lorel Ipsum is that it has a more-or-less normal distribution of
          letters oppo to using Content here, content here making it look like
          readabl Englis Many desktop publishing packages and.
        </p>
        <button className="btn btn-fill">
          Learn More
          <BsArrowRight className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default AboutMe;
