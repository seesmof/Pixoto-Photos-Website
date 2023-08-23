"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";

const MainPage = () => {
  return (
    <>
      <section className="flex flex-col bg-cover bg-no-repeat bg-[url('/assets/main-hero-background.jpg')] p-4 bg-center min-h-[80vh]">
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
                  <Link href="/">Home</Link>
                  <Link href="/">Home</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </section>
    </>
  );
};

export default MainPage;
