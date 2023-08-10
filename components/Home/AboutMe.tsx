import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const AboutMe = () => {
  return (
    <>
      <div className="layout lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
        <Image
          src="/mainAboutMe.jpg"
          alt="a picture of a man standing, holding a camera in his hands, looking in the camera and smiling"
          className="rounded-full outline outline-offset-[12px] outline-slate-500 outline-1 object-cover self-center max-w-[22rem] md:max-w-lg lg:w-[40%] xl:w-1/2 mt-4"
          width={999}
          height={999}
        />
        <div className="w-[60%] xl:w-1/2">
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
