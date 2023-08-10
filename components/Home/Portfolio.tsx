import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { PortfolioCard } from "./PortfolioCard";

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

const Portfolio = () => {
  return (
    <section className="bg-background">
      <div className="flex py-10 flex-col layout">
        <h3 className="subheading">Portfolio Showcase</h3>
        <h2 className="heading">
          Captivating Photography Collection by Pixoto Studio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
          {PortfolioData.map((service) => (
            <PortfolioCard {...service} key={service.heading} />
          ))}
        </div>
        <Link
          href="/portfolio"
          className="flex font-medium border-b-[1.5px] pb-[2px] self-center text-lg w-max flex-row items-center gap-2"
        >
          View Full Portfolio
          <BsArrowRight className="text-xl stroke-[.5]" />
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
