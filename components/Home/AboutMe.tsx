import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const AboutMe = () => {
  return (
    <>
      <div className="layout lg:flex-row lg:gap-16 xl:gap-20">
        <div className="border border-slate-500 rounded-full p-4 max-w-md self-center">
          <Image
            src="/mainAboutMe.jpg"
            alt="a picture of a man standing, holding a camera in his hands, looking in the camera and smiling"
            className="rounded-full object-cover self-center"
            width={999}
            height={999}
          />
        </div>
        <div className="self-center max-w-xl">
          <h3 className="subheading pt-12 lg:pt-0">about me</h3>
          <h2 className="heading">
            We&apos;re the leading photo studio in the country
          </h2>
          <p className="paragraph">
            Welcome to our photography studio, where moments come to life
            through the lens. Our passion for capturing the essence of every
            occasion drives us to create stunning visual stories. With a
            dedication to quality and creativity, we believe in the power of
            images to convey emotions and tell narratives. From weddings to
            corporate events, our team is committed to transforming fleeting
            instants into timeless memories that you&apos;ll cherish forever.
          </p>
          <button className="btn btn-fill">
            Learn More
            <BsArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
