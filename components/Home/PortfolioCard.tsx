import Image from "next/image";
import { AiOutlineCamera } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const buttonLink = "https://github.com/seesmof";
const smallerBadgeClasses =
  "flex flex-row items-center gap-1.5 bg-slate-600 rounded-full p-1 px-3 text-sm mr-2";
const largerBadgeClasses =
  "flex flex-row gap-1 items-center text-sm bg-slate-600/80 rounded-md p-3";
const localButtonClasses =
  "rounded-md border-2 py-2 px-4 w-max flex font-medium items-center flex-row gap-2 bg-slate-50 text-slate-900 border-transparent mt-3 duration-300 hover:bg-slate-900 hover:text-slate-50 cursor-pointer";
const iconClasses = "text-lg stroke-[2]";
const smallBadgesWrapperClasses = "flex flex-row items-center py-4";
const smallCardInfoClasses =
  "flex flex-col font-medium p-4 text-slate-50 md:hidden";
const cardImageClasses =
  "object-cover w-full h-full group-hover:rotate-3 group-hover:scale-110 duration-[600ms] z-10";
const cardWrapperClasses =
  "flex bg-backgroundLight rounded-md overflow-hidden flex-col";
const imageWrapperClasses = "h-80 relative group overflow-hidden";
const largerImageOverlayWrapperClasses =
  "inset-0 flex items-end bg-gradient-to-t from-black/40 to-transparent md:from-black/60 md:to-black/10 absolute z-30";
const imageOverlayDataWrapperClasses =
  "flex-col font-medium p-4 text-slate-50 hidden md:flex";
const largerHeadingClasses =
  "text-2xl font-bold duration-[600ms] translate-y-20 group-hover:-translate-y-2";
const largerParagraphClasses =
  "pt-3 opacity-0 duration-[600ms] group-hover:opacity-100 translate-y-20 group-hover:-translate-y-2";
const largerBadgesWrapperClasses =
  "flex flex-row-reverse items-end justify-between";

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
