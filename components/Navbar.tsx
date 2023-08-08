"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import Cart from "./Cart";
import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
  const [isCartShown, setIsCartShown] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      {isMenuShown && <Menu />}
      {isCartShown && <Cart setIsCartShown={setIsCartShown} />}
      <div className="flex sticky top-0 flex-row items-center justify-between backdrop-blur-sm bg-slate-900/10 p-4 z-50">
        <Link href="/">
          <Image
            width={999}
            height={999}
            src="/logo.png"
            alt=""
            className="object-cover w-20"
          />
        </Link>
        <div className="flex flex-row items-center gap-2 text-2xl">
          <button
            className="cursor-pointer relative"
            onClick={() => setIsCartShown(true)}
          >
            <AiOutlineShoppingCart />
            <div className="rounded-full bg-slate-50 h-4 w-4 text-sm text-slate-900 text-center flex items-center justify-center absolute top-0 -left-3 font-medium">
              0
            </div>
          </button>
          <button onClick={() => setIsMenuShown(!isMenuShown)}>
            {isMenuShown ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
