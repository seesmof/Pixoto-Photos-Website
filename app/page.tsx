"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowUpRight, CircleDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const Hero = () => {
  const heroHeadingClasses =
    "text-3xl lg:text-5xl font-bold lg:font-semibold lg:max-w-xl lg:leading-tight mt-2";

  return (
    <section className="bg-cover bg-no-repeat bg-[url('/assets/main-hero-background.jpg')] bg-center">
      <div className="sectionContainer">
        <Navbar />

        <div className="grid py-24 lg:py-40 w-full">
          <h2 className="sectionSubheading">welcome to pixoto world</h2>
          <h1 className={heroHeadingClasses}>
            We are a digital photography powerhouse
          </h1>
          <p className="mt-6 max-w-md lg:text-lg">
            Opposite plain whistle taken better missing ordinary egg fairly
            palace tank indicate date bottom cave experience word service barn
            orbit it news location compass
          </p>
          <div className="grid mt-8 gap-3 lg:flex lg:items-center">
            <Button className="flex flex-row items-center gap-2 w-max">
              Get in touch
              <ArrowRight size={18} strokeWidth={1.4} />
            </Button>
            <Button
              variant="outline"
              className="flex flex-row items-center gap-2 w-max bg-transparent border border-slate-200"
            >
              Read more
              <ArrowRight size={18} strokeWidth={1.4} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section>
      <div className="sectionContainer lg:flex lg:items-center lg:gap-12 lg:pt-12">
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
            settlers statement zoo nature charge please baby plane cool pick
            talk tree actually
          </p>
          <Button className="flex flex-row items-center gap-2 mt-6 lg:mt-10">
            Learn more
            <ArrowRight size={18} strokeWidth={1.4} />
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ServicesCardProps {
  image: string;
  title: string;
  description: string;
}

const ServicesCard = ({ image, title, description }: ServicesCardProps) => {
  return (
    <Card className="bg-inherit border-slate-500 duration-300 hover:shadow-2xl cursor-pointer hover:shadow-slate-200/10 hover:border-slate-200">
      <CardHeader>
        <Image
          src={`/assets/main-services-${image}.svg`}
          alt={`${image} icon`}
          width={48}
          height={48}
          className="mb-4 w-[24%]"
        />
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-base text-slate-200 pt-2">
          {description}
        </CardDescription>
        <div className="relative w-max group overflow-hidden">
          <Link
            className="w-max font-medium flex flex-row items-center gap-2 pt-4"
            href="/"
          >
            Learn more
            <ArrowRight size={18} strokeWidth={2} />
          </Link>
          <div className="w-full h-[1px] bg-slate-200 -translate-x-32 duration-300 group-hover:translate-x-0"></div>
        </div>
      </CardHeader>
    </Card>
  );
};

const Services = () => {
  const ServicesData = [
    {
      image: "photography",
      title: "Photography",
      description:
        "Chair teeth origin nobody would may production whom actual he though through giving ,pupil using plus",
    },
    {
      image: "snapshot-studios",
      title: "Snapshot Studios",
      description:
        "Apartment sort faster bus lift addition farther sit football many save chance snow ,sweet cast care",
    },
    {
      image: "flash-photography",
      title: "Flash Photography",
      description:
        "Pink secret ourselves wall blank former history silence particles inch loud ,difficulty held went",
    },
    {
      image: "flashy-frames",
      title: "Flashy Frames",
      description:
        "Pack college rain cookies be human change suggest teach serious dress deal ask fog ,former badly kept pitch",
    },
    {
      image: "aerial-photography",
      title: "Aerial Photography",
      description:
        "Railroad list electricity courage merely ship wall old engineer pool lift know ,against relationship",
    },
    {
      image: "videography",
      title: "Videography",
      description:
        "Balance hunter settlers this said wife funny attack cat experiment loose identity ,find doubt plastic",
    },
  ];

  return (
    <section className="bg-slate-700">
      <div className="sectionContainer py-10 lg:py-14">
        <h3 className="sectionSubheading">our services</h3>
        <h2 className="sectionHeading">
          Shoot comfortable read sheep good person
        </h2>
        <div className="grid gap-4 py-6 lg:py-10 lg:grid-cols-3">
          {ServicesData.map((service) => (
            <ServicesCard {...service} key={service.title} />
          ))}
        </div>
        <Button className="flex flex-row items-center gap-2">
          Learn more
          <ArrowRight size={18} strokeWidth={1.4} />
        </Button>
      </div>
    </section>
  );
};

interface PorfolioCardProps {
  title: string;
  image: number;
}

const PortfolioCard = ({ title, image }: PorfolioCardProps) => {
  return (
    <Card className="bg-inherit group relative overflow-hidden rounded-lg p-0 hover:shadow-2xl cursor-pointer">
      <div className="lg:opacity-0 lg:group-hover:opacity-100 lg:duration-300 flex inset-0 absolute bg-slate-900/20 bg-gradient-to-b from-transparent lg:to-slate-900/70 to-slate-900/50 flex-col justify-end p-4">
        <CardTitle>{title}</CardTitle>
        <div className="flex items-end gap-1 mt-1">
          Show more
          <ArrowUpRight size={18} strokeWidth={1.6} />
        </div>
      </div>
      <Image
        src={`/assets/main-portfolio-${image}.jpg`}
        alt=""
        width={1920}
        height={1080}
      />
    </Card>
  );
};

const Portfolio = () => {
  const CardsData = [
    {
      title: "Life in Focus",
      image: 1,
    },
    {
      title: "Faces of the World",
      image: 2,
    },
    {
      title: "Essence of Nature",
      image: 3,
    },
    {
      title: "Reflections of Life",
      image: 4,
    },
  ];

  return (
    <section>
      <div className="grid p-4 py-10 lg:py-14 max-w-6xl mx-auto w-full">
        <h3 className="sectionSubheading">Portfolio</h3>
        <h2 className="sectionHeading">
          Photography portfolio by Pixoto Studios
        </h2>
        <div className="grid lg:grid-cols-2 gap-4 py-8">
          {CardsData.map((card, index) => (
            <PortfolioCard key={index} {...card} />
          ))}
        </div>
        <Button className="flex flex-row items-center gap-2">
          See all
          <ArrowRight size={18} strokeWidth={1.4} />
        </Button>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="bg-[url('/assets/main-contact.png')] bg-center bg-no-repeat bg-cover">
      <div className="sectionContainer lg:grid-cols-2 lg:gap-4 lg:py-14">
        <div>
          <h3 className="sectionSubheading">got any questions?</h3>
          <h2 className="sectionHeading">
            Using solar however national stiff hope green seldom?
          </h2>
          <p className="lg:block lg:text-lg lg:mt-4 hidden">
            Stems story behind room stranger spoken steel fly smell feathers
            system term city bat everywhere beautiful square grow hill writer
            local again around only
          </p>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 grid mt-4">
          <h3 className="font-medium text-lg">Let us know how we can help</h3>
          <div className="grid gap-2 mt-4">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              placeholder="Name..."
              id="name"
              className="bg-inherit border border-slate-500 focus:border-slate-200 focus:border-2"
            />
          </div>
          <div className="grid gap-2 mt-3">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="Email..."
              id="email"
              className="bg-inherit border border-slate-500 focus:border-slate-200 focus:border-2"
            />
          </div>
          <Button className="mt-4">Submit</Button>
        </div>
      </div>
    </section>
  );
};

const Equipments = () => {
  const EquipmentsData = [
    "PixelView Pro 2000",
    "NovaLens MaxShot X1",
    "TechZone ZoomFlex ZR",
    "StellarCapture Vantage",
    "CyberFrame EvoCam 360",
    "GalaxyFocus UltraShot",
  ];

  return (
    <section>
      <div className="sectionContainer lg:grid-cols-2 lg:gap-12 lg:items-center py-10 lg:py-14">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="row-span-2 col-span-1">
            <Image
              src="/assets/main-equipment-1.jpg"
              alt="camera photo"
              width={1920}
              height={1080}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/assets/main-equipment-2.jpg"
              alt="camera photo"
              width={1920}
              height={1080}
              className="object-cover rounded-t-full rounded-br-full w-full h-full"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/assets/main-equipment-3.jpg"
              alt="camera photo"
              width={1920}
              height={1080}
              className="object-cover w-full h-full rounded-b-full"
            />
          </div>
        </div>

        <div>
          <h3 className="sectionSubheading mt-8 lg:mt-0">our equipment</h3>
          <h2 className="sectionHeading">
            Pond way society think facing how trade cave start
          </h2>
          <div className="grid lg:grid-cols-2 gap-4 mt-6 font-medium text-lg">
            {EquipmentsData.map((equipment, index) => (
              <div
                className="flex items-center gap-2 group cursor-pointer"
                key={index}
              >
                <CircleDot size={18} strokeWidth={2} />
                <span className="group-hover:translate-x-1 duration-300">
                  {equipment}
                </span>
              </div>
            ))}
          </div>
          <Button variant="default" className="mt-6">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const CardsData = [
    {
      name: "Glenn Campbell",
      country: "Barbados",
      comment:
        "Class getting kill tape entire bad bare children told jar leave silence shoot purple dig so light doctor plates soft call nor book highest",
    },
    {
      name: "William Mendez",
      country: "Romania",
      comment:
        "Blank spite ground means room rate why such only every follow week season something smell dog who facing expression saved cloth money sleep forest",
    },
    {
      name: "Keith Page",
      country: "Latvia",
      comment:
        "Sweet molecular silly it yesterday anyone deal mainly fox diagram silver church stay aid beautiful rocket interest bus collect weight mathematics film yourself include",
    },
    {
      name: "Christina Holt",
      country: "Tunisia",
      comment:
        "Creature burn very let dead famous sound melted sheet price coast limited forth uncle pie men triangle second note her knew alive desk week",
    },
  ];

  return (
    <section className="bg-slate-700">
      <div className="sectionContainer py-10 lg:py-14">
        <h3 className="sectionSubheading">testimonials</h3>
        <h2 className="sectionHeading">What our clients say about us</h2>
        <div className="grid lg:grid-cols-2 gap-4 mt-6">
          {CardsData.map((card, index) => (
            <Card className="bg-slate-800" key={index}>
              <CardHeader>
                <CardTitle>{card.name}</CardTitle>
                <CardDescription>{card.country}</CardDescription>
              </CardHeader>
              <CardContent>{card.comment}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

interface BlogCardProps {
  image: number;
  title: string;
  link: string;
}

const BlogCard = ({ image, title, link }: BlogCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg relative cursor-pointer group">
      <Image
        src={`/assets/main-blog-${image}.jpg`}
        alt="blog photo"
        width={1920}
        height={1080}
        className="object-cover w-full duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60 flex flex-col justify-end p-4">
        <Link href={`/${link}`}>
          <h4 className="font-bold text-lg">{title}</h4>
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

const Blog = () => {
  const CardsData = [
    {
      image: 1,
      title: "Spend women brother happened driving boy",
      link: "",
    },
    {
      image: 2,
      title: "Right stuck company air combine needs whenever",
      link: "",
    },
    {
      image: 3,
      title: "Work baby sugar grandmother divide",
      link: "",
    },
  ];

  return (
    <section>
      <div className="sectionContainer py-10 lg:py-14">
        <h3 className="sectionSubheading">blog and news</h3>
        <h2 className="sectionHeading">Latest news and blog</h2>
        <div className="grid lg:grid-cols-3 gap-4 mt-6">
          {CardsData.map((card, index) => (
            <BlogCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MainPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Equipments />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
};

export default MainPage;
