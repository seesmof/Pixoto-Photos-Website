import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsCalendar2 } from "react-icons/bs";

interface BlogCardProps {
  image: string;
  date: string;
  name: string;
}

export const BlogCard = ({ image, date, name }: BlogCardProps) => {
  const randomImageId = Math.floor(Math.random() * 1000);
  return (
    <>
      <div className="bg-backgroundLight rounded-md text-slate-200 overflow-hidden flex flex-col">
        <Image
          src={`/mainBlog${image}.jpg`}
          alt={`${image} image for a card of blog`}
          className="object-cover w-full h-full"
          height={999}
          width={999}
        />
        <div className="p-4">
          <div className="flex flex-row text-sm items-center gap-2">
            <BsCalendar2 />
            <span className="pt-[1px]">{date}</span>
          </div>
          <h2 className="font-medium text-slate-50 text-xl pb-5 pt-2">
            {name}
          </h2>
          <Link
            href="/"
            className="flex flex-row items-center gap-2 capitalize"
          >
            read more
            <BsArrowRight className="stroke-[.3]" />
          </Link>
        </div>
      </div>
    </>
  );
};
