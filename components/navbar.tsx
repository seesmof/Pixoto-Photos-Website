"use client";

import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import { Separator } from "./ui/separator";

interface NavbarProps {
  shoppingCartItems: CartItem[];
  setShoppingCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export interface CartItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

const Navbar = () => {
  const [shoppingCartItems, setShoppingCartItems] = React.useState<CartItem[]>(
    []
  );

  return (
    <>
      <nav className="flex justify-between items-center lg:pt-6">
        <h1 className="text-2xl lg:text-4xl font-bold duration-500 hover:text-slate-300">
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
                  {shoppingCartItems.length > 0 ? (
                    <p>{shoppingCartItems.length} items</p>
                  ) : (
                    <p>Add items to your cart and they will appear here</p>
                  )}
                </SheetDescription>
              </SheetHeader>
              <Separator className="my-2" />
              <section className="grid gap-4 pt-6">
                {shoppingCartItems.map((item) => (
                  <article className="flex items-center">
                    <ShoppingCart size={24} className="mr-2" />
                    <div className="grid gap-1">
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>x{item.quantity}</p>
                    </div>
                  </article>
                ))}
              </section>
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
                <Link href="/about">About</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
