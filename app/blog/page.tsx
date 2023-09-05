import BlogCard from "@/components/blog-card";
import HeroSectionWrapper from "@/components/hero-section-wrapper";
import * as React from "react";

const BlogPage = () => {
  const BlogArticlesData = [
    {
      image: 1,
      title: "win energy table earth twelve according father",
      link: "",
    },
    {
      image: 1,
      title: "win energy table earth twelve according father",
      link: "",
    },
    {
      image: 1,
      title: "win energy table earth twelve according father",
      link: "",
    },
    {
      image: 1,
      title: "win energy table earth twelve according father",
      link: "",
    },
    {
      image: 1,
      title: "win energy table earth twelve according father",
      link: "",
    },
    {
      image: 1,
      title: "win energy table earth twelve according father",
      link: "",
    },
  ];

  return (
    <>
      <HeroSectionWrapper>
        <div className="grid">
          <h3 className="sectionSubheading">Our blog & news</h3>
          <h2 className="sectionHeading">
            Latest news and blog on Photography
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-6">
            {BlogArticlesData.map((card, index) => (
              <BlogCard key={index} {...card} />
            ))}
          </div>
        </div>
      </HeroSectionWrapper>
    </>
  );
};

export default BlogPage;
