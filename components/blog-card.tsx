import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface BlogCardProps {
  image: number;
  title: string;
  link: string;
}

const BlogCard = ({ image, title, link }: BlogCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg relative cursor-pointer group">
      <Image
        src={`/assets/blog-${image}.jpg`}
        alt="blog photo"
        width={1920}
        height={1080}
        className="object-cover w-full duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60 flex flex-col justify-end p-4">
        <Link href={`/${link}`}>
          <h4 className="font-bold text-lg">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </h4>
          <div className="w-max relative group overflow-hidden">
            <div className="flex items-end gap-1 mt-1.5">
              Read more
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </div>
            <div className="h-[1px] hidden lg:block w-24 bg-slate-200 mt-1 duration-300 -translate-x-24 group-hover:translate-x-0"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
