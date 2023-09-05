import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section className="sectionContainer lg:flex lg:items-center lg:gap-12 lg:pt-12">
      <div className="rounded-full border border-slate-500 p-3 my-6">
        <Image
          src="/assets/main-about-me.jpg"
          alt="an image of a man standing and smiling with a photo camera in hands"
          width={1920}
          height={1080}
          className="rounded-full lg:max-w-md"
        />
      </div>
      <div className="grid">
        <h3 className="sectionSubheading">about us</h3>
        <h2 className="sectionHeading">
          Relationship sad would model rhythm appropriate
        </h2>
        <p className="mt-6 lg:text-lg">
          Long interior wheel salt faster describe softly apart blank clock
          shown attack song letter term climate remain nor beat season leave
          nuts market activity
        </p>
        <p className="mt-2 lg:text-lg">
          Port guide provide smallest bark why master cry state today region
          settlers statement zoo nature charge please baby plane cool pick talk
          tree actually
        </p>
        <Button className="flex flex-row items-center gap-2 mt-6 lg:mt-10">
          Learn more
          <ArrowRight size={18} strokeWidth={1.4} />
        </Button>
      </div>
    </section>
  );
};

export default About;
