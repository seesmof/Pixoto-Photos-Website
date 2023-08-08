import Image from "next/image";
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
      <div className="bg-background rounded-md p-6 flex flex-col">
        <Image
          src={`/mainServices${image}.svg`}
          alt={`${image} image for a card of services`}
          className="w-16 py-4"
          height={999}
          width={999}
        />
        <h3 className="heading">{heading}</h3>
        <p className="text-lg text-slate-200 pt-3 pb-6">{paragraph}</p>
        <a
          href="https://github.com/seesmof"
          className="flex flex-row items-center gap-2 font-medium"
        >
          Read More
          <BsArrowRight className="text-xl stroke-[.5]" />
        </a>
      </div>
    </>
  );
};

const ServicesData = [
  {
    image: "Aerial",
    heading: "Aerial Photography",
    paragraph:
      "Capture stunning aerial views from above with our drone photography services.",
  },
  {
    image: "Video",
    heading: "Videography",
    paragraph:
      "Immortalize your special moments through professional videography and cinematography services.",
  },
  {
    image: "Photo",
    heading: "Photography",
    paragraph:
      "Preserve life's precious memories with timeless professional photography services.",
  },
  {
    image: "Snapshot",
    heading: "Snapshot Studios",
    paragraph:
      "Get quick on-location photoshoots and headshots at our convenient studio.",
  },
  {
    image: "Flash",
    heading: "Flash Photography",
    paragraph:
      "Illuminate dim scenes with our expert flash and lighting equipment and techniques.",
  },
  {
    image: "Flashy",
    heading: "Flashy Frames",
    paragraph:
      "Add some flash and pizzazz to your photos with fun prints and customized framing.",
  },
];

const AboutMe = () => {
  return (
    <>
      <div className="flex py-10 flex-col p-4 bg-backgroundLight">
        <h3 className="subheading">Services Offered</h3>
        <h2 className="heading">Elevating Your Photography to Excellence</h2>
        <button className="btn btn-fill mt-8">
          All Services
          <BsArrowRight className="text-xl" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
          {ServicesData.map((service) => (
            <ServiceCard {...service} key={service.heading} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
