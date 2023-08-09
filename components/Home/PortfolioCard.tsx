import Image from "next/image";
import { AiOutlineCamera } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const badgeClassesSmall =
  "flex flex-row items-center gap-1.5 bg-slate-600 rounded-full p-1 px-3 text-sm mr-2";
const badeClassesLarge =
  "flex flex-row gap-1 items-center text-sm bg-slate-600 rounded-md px-2 py-3";
const localButtonClasses =
  "rounded-md border-2 py-2 px-4 w-max flex font-medium items-center flex-row gap-2 bg-slate-50 text-slate-900 border-transparent mt-3";
const iconClasses = "text-lg stroke-[2]";
const buttonLink = "https://github.com/seesmof";

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
      <div className="flex bg-backgroundLight rounded-md overflow-hidden flex-col">
        <div className="h-80 relative group overflow-hidden">
          <div className="inset-0 flex items-end bg-gradient-to-t from-black/40 to-transparent md:from-black/60 md:to-black/10 absolute z-30">
            <div className="flex-col font-medium p-4 text-slate-50 hidden md:flex">
              <h3 className="text-2xl font-bold duration-[600ms] translate-y-20 group-hover:-translate-y-2">
                {heading}
              </h3>
              <p className="pt-3 opacity-0 duration-[600ms] group-hover:opacity-100 translate-y-20 group-hover:-translate-y-2">
                {paragraph}
              </p>
              <div className="flex flex-row-reverse items-end justify-between">
                <div className="flex flex-row gap-2">
                  <div className={badeClassesLarge}>
                    <AiOutlineCamera className={iconClasses} />
                    {camera}
                  </div>
                  <div className={badeClassesLarge}>
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
            className="object-cover w-full h-full group-hover:rotate-3 group-hover:scale-110 duration-[600ms] z-10"
            height={999}
            width={999}
          />
        </div>
        <div className="flex flex-col font-medium p-4 text-slate-50 md:hidden">
          <h3 className="text-xl">{heading}</h3>
          <p className="pt-3">{paragraph}</p>
          <div className="flex flex-row items-center py-4">
            <div className={badgeClassesSmall}>
              <AiOutlineCamera className={iconClasses} />
              {camera}
            </div>
            <div className={badgeClassesSmall}>
              <HiOutlineLocationMarker className={iconClasses} />
              {location}
            </div>
          </div>
          <a href={buttonLink} className={localButtonClasses}>
            Read More
          </a>
        </div>
      </div>
    </>
  );
};
