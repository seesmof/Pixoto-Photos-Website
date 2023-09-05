"use client";
import BlogCard, { BlogCardProps } from "@/components/blog-card";
import Footer from "@/components/footer";
import HeroSectionWrapper from "@/components/hero-section-wrapper";
import * as React from "react";

const BlogPage = () => {
  const BlogArticlesData: BlogCardProps[] = [
    {
      image: 1,
      title: "win energy table earth twelve according father",
      link: "",
    },
    {
      image: 2,
      title: "rubbed office straight climate path heat white",
      link: "",
    },
    {
      image: 3,
      title: "sense classroom minerals deer coming anybody exercise",
      link: "",
    },
    {
      image: 4,
      title: "road stiff occasionally cent appropriate wind",
      link: "",
    },
    {
      image: 5,
      title: "park knife settlers on tide practice life",
      link: "",
    },
    {
      image: 6,
      title: "powerful yes heard black carried contain",
      link: "",
    },
    {
      image: 7,
      title: "chief real opposite old bar brown changing line",
      link: "",
    },
    {
      image: 8,
      title: "control if pound solution above rope faster",
      link: "",
    },
  ];

  return (
    <>
      <HeroSectionWrapper>
        <div className="grid lg:py-12">
          <h3 className="sectionSubheading">Our blog & news</h3>
          <h2 className="sectionHeading">
            Latest news and blog on Photography
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-6 lg:mt-12">
            {BlogArticlesData.map((card, index) => (
              <BlogCard key={index} {...card} />
            ))}
          </div>
        </div>
      </HeroSectionWrapper>
      <Footer />
    </>
  );
};

export default BlogPage;
