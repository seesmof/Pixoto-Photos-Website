import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

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
