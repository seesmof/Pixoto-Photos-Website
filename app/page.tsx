"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  ArrowUpRight,
  Camera,
  ChevronDown,
  ChevronUp,
  CircleDot,
  Dribbble,
  Facebook,
  Instagram,
  Link2,
  Mail,
  MapPin,
  Menu,
  Pointer,
  ShoppingCart,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const MainPage = () => {
  const [isPagesCollapsed, setIsPagesCollapsed] = React.useState(true);

  return (
    <>
      <section className="bg-cover bg-no-repeat bg-[url('/assets/main-hero-background.jpg')] bg-center">
        <div className="max-w-6xl mx-auto w-full grid p-4">
          <nav className="flex justify-between items-center lg:pt-6">
            <h1 className="text-2xl lg:text-4xl font-bold">
              <Link href="/">Pixoto</Link>
            </h1>
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

          <div className="grid py-24 lg:py-40 w-full">
            <h2 className="uppercase font-medium lg:text-lg">
              welcome to pixoto world
            </h2>
            <h1 className="text-3xl lg:text-5xl font-bold lg:font-semibold lg:max-w-xl lg:leading-tight mt-2">
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

      <section>
        <div className="max-w-6xl mx-auto w-full p-4 pb-12 grid lg:flex lg:items-center lg:gap-12 lg:pt-12">
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
            <h3 className="uppercase font-medium lg:text-lg">about us</h3>
            <h2 className="text-2xl lg:text-4xl font-bold mt-2">
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

      <section className="bg-slate-700">
        <div className="max-w-6xl mx-auto w-full grid p-4 py-10 lg:py-20">
          <h3 className="uppercase font-medium lg:text-lg">our services</h3>
          <h2 className="text-2xl lg:text-4xl font-bold mt-2">
            Shoot comfortable read sheep good person
          </h2>
          <div className="grid gap-4 py-6 lg:py-10 lg:grid-cols-3">
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
        </div>
      </section>

      <section>
        <div className="grid p-4 py-10 lg:py-20 max-w-6xl mx-auto w-full">
          <h3 className="uppercase font-medium lg:text-lg">Portfolio</h3>
          <h2 className="text-2xl lg:text-4xl font-bold mt-2">
            Photography portfolio by Pixoto Studios
          </h2>
          <div className="grid lg:grid-cols-2 gap-4 py-8">
            <PortfolioCard title="Life in Focus" image={1} />
            <PortfolioCard title="Faces of the World" image={2} />
            <PortfolioCard title="Essence of Nature" image={3} />
            <PortfolioCard title="Reflections of Life" image={4} />
          </div>
          <Button className="flex flex-row items-center gap-2">
            See all
            <ArrowRight size={18} strokeWidth={1.4} />
          </Button>
        </div>
      </section>

      <section className="grid p-4 py-10 bg-center bg-no-repeat bg-[url('/assets/main-contact.png')] relative">
        <div className="inset-0 absolute bg-slate-900/15 z-10"></div>
        <div className="z-20">
          <h3 className="uppercase font-medium lg:text-lg">
            got any questions?
          </h3>
          <h2 className="text-2xl lg:text-4xl font-bold mt-2">
            Get in touch with us
          </h2>
          <div className="bg-slate-800 rounded-lg p-4 grid mt-4">
            <h3 className="font-medium text-lg">Let us know how we can help</h3>
            <div className="grid gap-2 mt-4">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                placeholder="Name..."
                id="name"
                className="bg-inherit border border-slate-500"
              />
            </div>
            <div className="grid gap-2 mt-3">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Email..."
                id="email"
                className="bg-inherit border border-slate-500"
              />
            </div>
            <Button className="mt-4">Submit</Button>
          </div>
        </div>
      </section>

      <section className="grid p-4 py-10">
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

        <h3 className="uppercase font-medium lg:text-lg mt-8">our equipment</h3>
        <h2 className="text-2xl lg:text-4xl font-bold mt-2">
          Cameras that made us who we are
        </h2>
        <div className="grid gap-4 mt-6 font-medium text-lg">
          <div className="flex items-center gap-2">
            <CircleDot size={18} strokeWidth={2} />
            Sony ILME-FX30
          </div>
          <div className="flex items-center gap-2">
            <CircleDot size={18} strokeWidth={2} />
            Samsung ILME-FR7
          </div>
          <div className="flex items-center gap-2">
            <CircleDot size={18} strokeWidth={2} />
            Alpha 7 IV Full Frame
          </div>
          <div className="flex items-center gap-2">
            <CircleDot size={18} strokeWidth={2} />
            Sony Alpha 330 DSLR-A330
          </div>
          <div className="flex items-center gap-2">
            <CircleDot size={18} strokeWidth={2} />
            Lenovo E Yoga LME-FR7
          </div>
          <div className="flex items-center gap-2">
            <CircleDot size={18} strokeWidth={2} />
            Sony Wide Angle F
          </div>
        </div>
        <Button variant="default" className="mt-6">
          Learn more
        </Button>
      </section>

      <section className="p-4 py-10 grid bg-slate-700">
        <h3 className="uppercase font-medium lg:text-lg">testimonials</h3>
        <h2 className="text-2xl lg:text-4xl font-bold mt-2">
          What our clients say about us
        </h2>
        <div className="grid gap-4 mt-6">
          <Card className="bg-slate-800">
            <CardHeader>
              <CardTitle>Glen Maldonado</CardTitle>
              <CardDescription>São Tomé and Príncipe</CardDescription>
            </CardHeader>
            <CardContent>
              Garden on nine automobile burst talk mail smile establish mice
              mark congress matter movie horn gas out send split adjective
              object curious almost his
            </CardContent>
          </Card>
          <Card className="bg-slate-800">
            <CardHeader>
              <CardTitle>Edna Francis</CardTitle>
              <CardDescription>Ireland</CardDescription>
            </CardHeader>
            <CardContent>
              Frozen escape eat compass card drawn color nuts upon joy bite
              victory spring wolf since cover sound wagon order might table
              outline stems remain
            </CardContent>
          </Card>
          <Card className="bg-slate-800">
            <CardHeader>
              <CardTitle>Keith Woods</CardTitle>
              <CardDescription>Maldives</CardDescription>
            </CardHeader>
            <CardContent>
              Pool mill flight atmosphere willing tired lonely fence one journey
              exact flame stage nose but source iron product realize syllable
              magnet box just bring
            </CardContent>
          </Card>
          <Card className="bg-slate-800">
            <CardHeader>
              <CardTitle>Lina Crawford</CardTitle>
              <CardDescription>Senegal</CardDescription>
            </CardHeader>
            <CardContent>
              Contain fourth iron yourself smallest repeat key have fairly plain
              ability means look unit stepped globe desert describe golden fun
              color club political telephone
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="p-4 py-10 grid">
        <h3 className="uppercase font-medium lg:text-lg">blog and news</h3>
        <h2 className="text-2xl lg:text-4xl font-bold mt-2">
          Latest news and blog
        </h2>
        <div className="grid gap-4 mt-6">
          <div className="overflow-hidden rounded-lg relative">
            <Image
              src="/assets/main-blog-1.jpg"
              alt="blog photo"
              width={1920}
              height={1080}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60 flex flex-col justify-end p-4">
              <Link href="/">
                <h4 className="font-bold text-lg">
                  Blanket allow good palace simply
                </h4>
                <div className="flex items-end gap-1 mt-1.5">
                  Read more
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg relative">
            <Image
              src="/assets/main-blog-2.jpg"
              alt="blog photo"
              width={1920}
              height={1080}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60 flex flex-col justify-end p-4">
              <Link href="/">
                <h4 className="font-bold text-lg">
                  Tomorrow entirely noon line letter giving
                </h4>
                <div className="flex items-end gap-1 mt-1.5">
                  Read more
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg relative">
            <Image
              src="/assets/main-blog-3.jpg"
              alt="blog photo"
              width={1920}
              height={1080}
              className="object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60 flex flex-col justify-end p-4">
              <Link href="/">
                <h4 className="font-bold text-lg">
                  Paragraph practical contrast{" "}
                </h4>
                <div className="flex items-end gap-1 mt-1.5">
                  Read more
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="p-4 py-10 text-slate-300 grid bg-slate-700">
        <h2 className="text-3xl font-bold text-slate-200">Pixoto</h2>
        <p className="mt-2">
          For upward root correctly according chosen hall crowd desert
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Button variant="ghost" className="bg-slate-700" size={"icon"}>
            <Facebook size={18} strokeWidth={1.5} />
          </Button>
          <Button variant="ghost" className="bg-slate-700" size={"icon"}>
            <Instagram size={18} strokeWidth={1.5} />
          </Button>
          <Button variant="ghost" className="bg-slate-700" size={"icon"}>
            <Dribbble size={18} strokeWidth={1.5} />
          </Button>
          <Button variant="ghost" className="bg-slate-700" size={"icon"}>
            <Twitter size={18} strokeWidth={1.5} />
          </Button>
        </div>

        <h3 className="font-bold uppercase mt-8">pages</h3>
        <div className="grid gap-2 mt-2">
          <Link href="/">About us</Link>
          <Link href="/">Services</Link>
          <Link href="/">Portfolio</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Team</Link>
          <Link href="/">Contact</Link>
        </div>

        <h3 className="font-bold uppercase mt-8">miscellaneous</h3>
        <div className="grid gap-2 mt-2">
          <Link href="/">Photography</Link>
          <Link href="/">Testimonials</Link>
          <Link href="/">Styles guide</Link>
          <Link href="/">Privacy policy</Link>
        </div>

        <h3 className="font-bold uppercase mt-8">subscribe</h3>
        <p className="mt-2">
          Subscribe to our newsletter for the latest news and special offers
          just for you!
        </p>
        <div className="flex relative rounded-lg border-2 border-slate-500 items-center gap-2 mt-4">
          <Input
            type="email"
            id="footer-email"
            placeholder="Your email..."
            className="bg-inherit border-none"
          />
          <Button variant="ghost" size={"icon"}>
            <Mail size={18} strokeWidth={1.5} />
          </Button>
        </div>
      </footer>
    </>
  );
};

interface PorfolioCardProps {
  title: string;
  image: number;
}

const PortfolioCard = ({ title, image }: PorfolioCardProps) => {
  return (
    <Card className="bg-inherit group relative overflow-hidden cursor-pointer rounded-lg p-0">
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
