"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
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
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Menu,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

const MainPage = () => {
  const [isPagesCollapsed, setIsPagesCollapsed] = React.useState(true);

  return (
    <>
      <section className="flex flex-col bg-cover bg-no-repeat bg-[url('/assets/main-hero-background.jpg')] p-4 bg-center">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pixoto</h1>
          <div className="flex flex-row items-center gap-2">
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

        <div className="grid text-slate-200 py-24">
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
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              className="flex flex-row items-center gap-2 w-max bg-transparent border border-slate-200"
            >
              Get in touch
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
