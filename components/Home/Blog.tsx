import Image from "next/image";
import React from "react";
import { BsCalendar2 } from "react-icons/bs";

interface BlogCardProps {
  image: string;
  date: string;
  name: string;
}

const BlogCard = ({ image, date, name }: BlogCardProps) => {
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
          <div className="flex flex-row items-center gap-2">
            <BsCalendar2 />
            {date}
          </div>
        </div>
      </div>
    </>
  );
};

const Blog = () => {
  const BlogData = [
    {
      image: "One",
      date: "March 25, 2022",
      name: "13 social media apps you should be paying for",
    },
    {
      image: "Two",
      date: "April 15, 2022",
      name: "12 social media apps you should be paying attention to",
    },
    {
      image: "Three",
      date: "May 28, 2022",
      name: "11 social media apps that will peek your interest",
    },
  ];

  return (
    <>
      <div className="flex py-10 flex-col p-4">
        <h3 className="subheading">our blog and news</h3>
        <h2 className="heading">Check Out our Blog with News on Photography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
          {BlogData.map((blog) => (
            <BlogCard {...blog} key={blog.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
