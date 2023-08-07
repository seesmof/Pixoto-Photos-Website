import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface ServiceCardProps {
  image: string;
  heading: string;
  paragraph: string;
}

const ServiceCard = ({ image, heading, paragraph }: ServiceCardProps) => {
  return (
    <>
      <div className="bg-background rounded-md p-4 flex flex-col">
        <img src={`/mainServices${image}.svg`} className="" />
        <h3 className="heading">{heading}</h3>
        <p className="paragraph">{paragraph}</p>
        <a
          href="https://github.com/seesmof"
          className="flex flex-row items-center gap-2"
        >
          Read More
          <BsArrowRight className="text-xl" />
        </a>
      </div>
    </>
  );
};

const ServicesData: ServiceCardProps = [
  {
    image: "Aerial",
    heading: "Aerial Photography",
    paragraph:
      "Our photography packages vary depending on the type of service you require.",
  },
  {
    image: "Video",
    heading: "Videography",
    paragraph:
      "Our photography packages vary depending on the type of service you require.",
  },
  {
    image: "Photo",
    heading: "Photography",
    paragraph:
      "Our photography packages vary depending on the type of service you require.",
  },
  {
    image: "Snapshot",
    heading: "Snapshot Studios",
    paragraph:
      "Our photography packages vary depending on the type of service you require.",
  },
  {
    image: "Flash",
    heading: "Flash Photography",
    paragraph:
      "Our photography packages vary depending on the type of service you require.",
  },
  {
    image: "Flashy",
    heading: "Flashy Frames",
    paragraph:
      "Our photography packages vary depending on the type of service you require.",
  },
];

const AboutMe = () => {
  return (
    <>
      <div className="flex py-10 flex-col p-4 bg-backgroundLight">
        <h3 className="subheading">my services</h3>
        <h2 className="heading">I have the experience to make of your photo</h2>
        <button className="btn btn-fill mt-8">
          All Services
          <BsArrowRight className="text-xl" />
        </button>
        <ServiceCard
          image={ServicePhotos[0]}
          heading="Photography"
          paragraph="We can capture beautiful aerial photos."
        />
      </div>
    </>
  );
};

export default AboutMe;
