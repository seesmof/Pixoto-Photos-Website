import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";

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
            alt={`${image} image for a card of portfolio`}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col font-medium p-4 text-slate-50">
          <h3 className="text-xl ">{heading}</h3>
          <p className="pt-3">{paragraph}</p>
          <div className="flex flex-row items-center text-sm py-4 gap-2">
            <div className="flex flex-row items-center gap-1.5 bg-slate-600 rounded-full p-1 px-3">
              <AiOutlineCamera className="text-lg stroke-[2]" />
              {camera}
            </div>
            <div className="flex flex-row items-center gap-1.5 bg-slate-600 rounded-full p-1 px-3">
              <HiOutlineLocationMarker className="text-lg stroke-[2]" />
              {location}
            </div>
          </div>
          <a
            href="https://github.com/seesmof"
            className="rounded-md border-2 py-2 px-4 w-max flex font-medium items-center flex-row gap-2 bg-slate-50 text-slate-900 border-transparent mt-3"
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
    heading: "Capturing Life's Intimate Moments",
    paragraph:
      "This intimate family portrait was shot on a Nikon D3500 in a home studio, perfectly capturing the loving bond between parent and child.",
    camera: "Nikon D3500",
    location: "Chamonix",
  },
  {
    image: "Faces",
    heading: "The Diverse Faces of Our World",
    paragraph:
      "I captured the diversity and beauty of humanity in this environmental portrait of a farmer in Tuscany using natural light and a Canon 5D Mark IV.",
    camera: "Canon 5D Mark IV",
    location: "Tuscany, Italy",
  },
  {
    image: "Essence",
    heading: "Botanical Essence in Macro",
    paragraph:
      "Using macro focus and a shallow depth of field, I highlighted the striking details of this orchid, shot with a Fujifilm X-T4 in a conservatory.",
    camera: "Fujifilm X-T4",
    location: "Conservatory",
  },
  {
    image: "Reflection",
    heading: "Peaceful Mountain Reflections",
    paragraph:
      "The stillness of a mountain lake captures a perfect mirrored reflection of its surroundings in this long exposure taken at sunrise with a Nikon Z7 II.",
    camera: "Nikon Z7 II",
    location: "Mountain Lake",
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
        <Link
          href="/portfolio"
          className="flex font-medium border-b-[1.5px] pb-[2px] self-center text-lg w-max flex-row items-center gap-2"
        >
          View All Portfolio
          <BsArrowRight className="text-xl stroke-[.5]" />
        </Link>
      </div>
    </>
  );
};

export default MyAlbum;
