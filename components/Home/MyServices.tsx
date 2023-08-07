import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ServicePhotos = [
  "Aerial",
  "Flash",
  "Flashy",
  "Photo",
  "Snapshot",
  "Video",
];

const AboutMe = () => {
  return (
    <>
      <div className="flex py-10 flex-col p-4 bg-slate-700">
        <h3 className="subheading">my services</h3>
        <h2 className="heading">I have the experience to make of your photo</h2>
        <button className="btn btn-fill mt-8">
          All Services
          <BsArrowRight className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default AboutMe;
