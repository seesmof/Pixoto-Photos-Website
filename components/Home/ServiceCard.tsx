import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import {
  cardBackgroundClasses,
  headingClasses,
} from "./data/TestimonyCardData";
import { linkClasses, paragraphClasses } from "./data/ServiceCardData";

interface ServiceCardProps {
  image: string;
  heading: string;
  paragraph: string;
}

export const ServiceCard = ({
  image,
  heading,
  paragraph,
}: ServiceCardProps) => {
  return (
    <>
      <div className={cardBackgroundClasses}>
        <Image
          src={`/mainServices${image}.svg`}
          alt={`${image} image for a card of services`}
          className="w-16 py-4"
          height={999}
          width={999}
        />
        <h3 className={headingClasses}>{heading}</h3>
        <p className={paragraphClasses}>{paragraph}</p>
        <a href="https://github.com/seesmof" className={linkClasses}>
          Read More
          <BsArrowRight className="text-xl stroke-[.5]" />
        </a>
      </div>
    </>
  );
};
