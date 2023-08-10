import React from "react";
import { BlogCard } from "./BlogCard";

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

const Blog = () => {
  return (
    <>
      <div className="layout">
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
