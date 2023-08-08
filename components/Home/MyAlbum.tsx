import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface CardProps {
  image: string;
  heading: string;
  paragraph: string;
  camera: string;
  location: string;
}

const Card = ({ image, heading, paragraph, camera, location }: CardProps) => {
  return (
    <>
      <div className="flex bg-backgroundLight rounded-md overflow-hidden flex-col">
        <div className="h-80 relative">
          <div className="inset-0 bg-gradient-to-t from-black/40 to-transparent absolute"></div>
          <img
            src={`/mainPortfolio${image}.jpg`}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col font-medium p-4 text-slate-50">
          <h3 className="text-xl ">{heading}</h3>
          <p className="pt-3">{paragraph}</p>
          <div className="flex flex-row items-center py-4 gap-2">
            <div className="flex flex-row items-center gap-1.5 bg-slate-600 rounded-full p-1 px-3">
              <AiOutlineCamera className="text-xl stroke-[2]" />
              {camera}
            </div>
            <div className="flex flex-row items-center gap-1.5 bg-slate-600 rounded-full p-1 px-3">
              <HiOutlineLocationMarker className="text-xl stroke-[2]" />
              {location}
            </div>
          </div>
          <a
            href="https://github.com/seesmof"
            className="rounded-md border-2 py-2 px-4 w-max flex font-medium items-center flex-row gap-2 bg-slate-50 text-slate-900 border-transparent mt-4"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

const PortfolioData = [
  {
    image: "Life",
    heading: "Life in Focus",
    paragraph:
      "It is a long established fact that a reader will be distr by the readabll content of a page when",
    camera: "Sony Alpha",
    location: "New York",
  },
  {
    image: "Faces",
    heading: "Faces of the World",
    paragraph:
      "It is a long established fact that a reader will be distr by the readabll content of a page when",
    camera: "Sony Alpha",
    location: "New York",
  },
  {
    image: "Essence",
    heading: "Essence of Nature",
    paragraph:
      "It is a long established fact that a reader will be distr by the readabll content of a page when",
    camera: "Sony Alpha",
    location: "New York",
  },
  {
    image: "Reflections",
    heading: "Reflections of Life",
    paragraph:
      "It is a long established fact that a reader will be distr by the readabll content of a page when",
    camera: "Sony Alpha",
    location: "New York",
  },
];

const MyAlbum = () => {
  return (
    <>
      <div className="flex py-10 flex-col p-4">
        <h3 className="subheading">Portfolio Showcase</h3>
        <h2 className="heading">
          Captivating Photography Collection by Pixoto Studio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
          {PortfolioData.map((service) => (
            <Card {...service} key={service.heading} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyAlbum;
