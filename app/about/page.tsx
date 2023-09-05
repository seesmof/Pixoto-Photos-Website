"use client";
import About from "@/components/about";
import Footer from "@/components/footer";
import HeroSectionWrapper from "@/components/hero-section-wrapper";
import * as React from "react";

const BlogPage = () => {
  return (
    <>
      <HeroSectionWrapper>
        <div className="grid lg:py-12">
          <About />
        </div>
      </HeroSectionWrapper>
      <section className="bg-slate-700">
        <div className="sectionContainer py-10 lg:py-14">
          <p>
            ready nothing struggle fully labor tell paint taste smallest managed
            tears atomic beneath atmosphere huge differ night eventually leaf
            built these dance triangle future
          </p>
        </div>
      </section>
      <section>
        <div className="sectionContainer py-10 lg:py-14">
          <p>
            substance daughter would greater rule information write factory
            purpose law taken secret stove aside lift grandmother slowly passage
            duty recently quite smell themselves exercise
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
