import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const AboutMe = () => {
  return (
    <>
      <div className="flex py-10 flex-col p-4">
        <Image
          src="/mainAboutMe.jpg"
          alt="a picture of a man standing, holding a camera in his hands, looking in the camera and smiling"
          className="rounded-full outline outline-offset-[12px] outline-slate-500 outline-1 object-cover self-center max-w-sm mt-4"
          width={999}
          height={999}
        />
        <h3 className="subheading pt-12">about me</h3>
        <h2 className="heading">
          We're the leading photo studio in the country
        </h2>
        <p className="paragraph">
          Welcome to our photography studio, where moments come to life through
          the lens. Our passion for capturing the essence of every occasion
          drives us to create stunning visual stories. With a dedication to
          quality and creativity, we believe in the power of images to convey
          emotions and tell narratives. From weddings to corporate events, our
          team is committed to transforming fleeting instants into timeless
          memories that you'll cherish forever.
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
