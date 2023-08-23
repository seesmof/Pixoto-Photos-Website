"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Description } from "@radix-ui/react-toast";
import {
  ArrowRight,
  Camera,
  ChevronDown,
  ChevronUp,
  MapPin,
  Menu,
  Pointer,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import * as z from "zod";

const MainPage = () => {
  const [isPagesCollapsed, setIsPagesCollapsed] = React.useState(true);

  return (
    <>
      <section className="grid bg-cover bg-no-repeat bg-[url('/assets/main-hero-background.jpg')] p-4 bg-center">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pixoto</h1>
          <div className="flex flex-row items-center gap-1">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <ShoppingCart size={22} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Your cart</SheetTitle>
                  <SheetDescription>
                    Add items to your cart and they will appear here
                  </SheetDescription>
                </SheetHeader>
                <Separator className="my-2" />
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <Menu size={22} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="grid gap-4">
                  <Link href="/">Home</Link>
                  <Link href="/">About</Link>
                  <Link href="/">Shop</Link>
                  <Collapsible>
                    <CollapsibleTrigger
                      className="flex flex-row items-center justify-between w-full pr-6"
                      onClick={() => setIsPagesCollapsed(!isPagesCollapsed)}
                    >
                      Pages
                      {isPagesCollapsed ? (
                        <ChevronDown size={22} />
                      ) : (
                        <ChevronUp size={22} />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="grid gap-4 ml-6">
                      <Link href="/" className="pt-4">
                        Portfolio
                      </Link>
                      <Link href="/">Services</Link>
                      <Link href="/">Styles Guide</Link>
                    </CollapsibleContent>
                  </Collapsible>
                  <Link href="/">Blog</Link>
                  <Link href="/">Contact</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>

        <div className="grid py-24">
          <h2 className="uppercase font-medium">welcome to pixoto world</h2>
          <h1 className="text-3xl font-bold mt-2">
            We are a digital photography powerhouse
          </h1>
          <p className="mt-6">
            Opposite plain whistle taken better missing ordinary egg fairly
            palace tank indicate date bottom cave experience word service barn
            orbit it news location compass
          </p>
          <div className="grid mt-8 gap-3">
            <Button className="flex flex-row items-center gap-2 w-max">
              Get in touch
              <ArrowRight size={18} strokeWidth={1.4} />
            </Button>
            <Button
              variant="outline"
              className="flex flex-row items-center gap-2 w-max bg-transparent border border-slate-200"
            >
              Get in touch
              <ArrowRight size={18} strokeWidth={1.4} />
            </Button>
          </div>
        </div>
      </section>

      <section className="p-4 pb-12 grid">
        <div className="rounded-full border border-slate-500 p-3 my-6">
          <Image
            src="/assets/main-about-me.jpg"
            alt="an image of a man standing and smiling with a photo camera in hands"
            width={1920}
            height={1080}
            className="rounded-full"
          />
        </div>
        <h3 className="uppercase font-medium">about us</h3>
        <h2 className="text-2xl font-bold mt-2">
          We are the leading photo studio
        </h2>
        <p className="mt-6">
          Long interior wheel salt faster describe softly apart blank clock
          shown attack song letter term climate remain nor beat season leave
          nuts market activity
        </p>
        <p className="mt-2">
          Port guide provide smallest bark why master cry state today region
          settlers statement zoo nature charge please baby plane cool pick talk
          tree actually
        </p>
        <Button className="flex flex-row items-center gap-2 mt-6">
          Learn more
          <ArrowRight size={18} strokeWidth={1.4} />
        </Button>
      </section>

      <section className="p-4 grid bg-slate-700 py-10">
        <h3 className="uppercase font-medium">our services</h3>
        <h2 className="text-2xl font-bold mt-2">
          We have the experince you need
        </h2>
        <div className="grid gap-4 py-6">
          <ServicesCard
            image="photography"
            title="Photography"
            description="Chair teeth origin nobody would may production whom actual he though through giving pupil using plus"
          />
          <ServicesCard
            image="snapshot-studios"
            title="Snapshot Studios"
            description="Apartment sort faster bus lift addition farther sit football many save chance snow sweet cast care"
          />
          <ServicesCard
            image="flash-photography"
            title="Flash Photography"
            description="Pink secret ourselves wall blank former history silence particles inch loud difficulty held went"
          />
          <ServicesCard
            image="flashy-frames"
            title="Flashy Frames"
            description="Pack college rain cookies be human change suggest teach serious dress deal ask fog former badly kept pitch"
          />
          <ServicesCard
            image="aerial-photography"
            title="Aerial Photography"
            description="Railroad list electricity courage merely ship wall old engineer pool lift know against relationship"
          />
          <ServicesCard
            image="videography"
            title="Videography"
            description="Balance hunter settlers this said wife funny attack cat experiment loose identity find doubt plastic"
          />
        </div>
        <Button className="flex flex-row items-center gap-2">
          Learn more
          <ArrowRight size={18} strokeWidth={1.4} />
        </Button>
      </section>

      <section className="grid p-4 py-10">
        <h3 className="uppercase font-medium">Portfolio</h3>
        <h2 className="text-2xl font-bold mt-2">
          Photography portfolio by Pixoto Studios
        </h2>
        <div className="grid gap-4 py-8">
          <PortfolioCard
            title="Life in Focus"
            description="Record ants many layers white lift drink ride cat steady spring"
            image={1}
            camera="Sony Alpha"
            location="Tokyo"
          />
          <PortfolioCard
            title="Faces of the World"
            description="Interior active cotton tight plates wheel drew hat fence industrial shut island"
            image={2}
            camera="Sony Alpha"
            location="Hämeenlinna"
          />
          <PortfolioCard
            title="Essence of Nature"
            description="Finally process finger hurt protection across continued take carried settlers lovely"
            image={3}
            camera="Sony Alpha"
            location="Helsinki"
          />
          <PortfolioCard
            title="Reflections of Life"
            description="Master amount cage pictured star observe basis any pie record sea involved your"
            image={4}
            camera="Sony Alpha"
            location="Bahamas"
          />
        </div>
        <Button className="flex flex-row items-center gap-2">
          See all
          <ArrowRight size={18} strokeWidth={1.4} />
        </Button>
      </section>

      <section className="grid p-4 py-10 bg-center bg-no-repeat bg-[url('/assets/main-contact.png')] relative">
        <div className="inset-0 absolute bg-slate-900/15"></div>
        <h3 className="uppercase font-medium">got any questions?</h3>
        <h2 className="text-2xl font-bold mt-2">Get in touch with us</h2>
        <Card className="bg-slate-800 p-4 rounded-lg mt-6 grid gap-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          voluptatibus voluptatem placeat sequi quae deserunt amet nulla
          debitis! Facere, modi nam sed non ratione illo natus quis distinctio
          accusantium alias!
        </Card>
      </section>
    </>
  );
};

interface PorfolioCardProps {
  title: string;
  description: string;
  image: number;
  camera: string;
  location: string;
}

const PortfolioCard = ({
  title,
  description,
  image,
  camera,
  location,
}: PorfolioCardProps) => {
  return (
    <Card className="bg-inherit relative overflow-hidden rounded-lg p-0">
      <div className="inset-0 absolute bg-slate-900/20 flex flex-col justify-end p-4">
        <div className="hidden md:block">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-base text-slate-200 pt-2">
            {description}
          </CardDescription>
          <div className="flex flex-row items-center gap-2 mt-4">
            <Badge
              variant="outline"
              className="flex px-3 py-1 flex-row border border-slate-500 items-center gap-1"
            >
              <Camera size={18} strokeWidth={1.5} />
              {camera}
            </Badge>
            <Badge
              variant="outline"
              className="flex px-3 py-1 flex-row border border-slate-500 items-center gap-1"
            >
              <MapPin size={18} strokeWidth={1.5} />
              {location}
            </Badge>
          </div>
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

interface ServicesCardProps {
  image: string;
  title: string;
  description: string;
}

const ServicesCard = ({ image, title, description }: ServicesCardProps) => {
  return (
    <Card className="bg-inherit border-slate-500">
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
        <Link
          className="w-max font-medium flex flex-row items-center gap-2 pt-4"
          href="/"
        >
          Learn more
          <ArrowRight size={18} strokeWidth={2} />
        </Link>
      </CardHeader>
    </Card>
  );
};

export default MainPage;
