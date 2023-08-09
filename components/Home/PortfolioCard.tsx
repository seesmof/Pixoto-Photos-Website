import Image from "next/image";
import { AiOutlineCamera } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  largerBadgeClasses,
  smallerBadgeClasses,
  buttonLink,
  cardImageClasses,
  cardWrapperClasses,
  iconClasses,
  imageOverlayDataWrapperClasses,
  imageWrapperClasses,
  largerBadgesWrapperClasses,
  largerHeadingClasses,
  largerImageOverlayWrapperClasses,
  largerParagraphClasses,
  localButtonClasses,
  smallBadgesWrapperClasses,
  smallCardInfoClasses,
} from "./data/PortfolioCardData";

interface PortfolioCardProps {
  image: string;
  heading: string;
  paragraph: string;
  camera: string;
  location: string;
}

export const PortfolioCard = ({
  image,
  heading,
  paragraph,
  camera,
  location,
}: PortfolioCardProps) => {
  return (
    <>
      <article className={cardWrapperClasses}>
        <div className={imageWrapperClasses}>
          <div className={largerImageOverlayWrapperClasses}>
            <div className={imageOverlayDataWrapperClasses}>
              <h3 className={largerHeadingClasses}>{heading}</h3>
              <p className={largerParagraphClasses}>{paragraph}</p>
              <div className={largerBadgesWrapperClasses}>
                <div className="flex flex-row gap-2">
                  <div className={largerBadgeClasses}>
                    <AiOutlineCamera className={iconClasses} />
                    {camera}
                  </div>
                  <div className={largerBadgeClasses}>
                    <HiOutlineLocationMarker className={iconClasses} />
                    {location}
                  </div>
                </div>
                <a href={buttonLink} className={localButtonClasses}>
                  Read More
                </a>
              </div>
            </div>
          </div>
          <Image
            src={`/mainPortfolio${image}.jpg`}
            alt={`${image} image for a card of portfolio`}
            className={cardImageClasses}
            height={999}
            width={999}
          />
        </div>
        <div className={smallCardInfoClasses}>
          <h3 className="text-xl">{heading}</h3>
          <p className="pt-3">{paragraph}</p>
          <div className={smallBadgesWrapperClasses}>
            <div className={smallerBadgeClasses}>
              <AiOutlineCamera className={iconClasses} />
              {camera}
            </div>
            <div className={smallerBadgeClasses}>
              <HiOutlineLocationMarker className={iconClasses} />
              {location}
            </div>
          </div>
          <a href={buttonLink} className={localButtonClasses}>
            Read More
          </a>
        </div>
      </article>
    </>
  );
};
