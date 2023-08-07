"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import Cart from "./Cart";

const Navbar = () => {
  const [isCartShown, setIsCartShown] = useState(true);
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      {isCartShown ? (
        <Cart setIsCartShown={setIsCartShown} />
      ) : isMenuShown ? (
        <Menu />
      ) : (
        <div className="flex sticky top-0 flex-row items-center justify-between backdrop-blur-sm bg-slate-900/10 p-4">
          <Link href="/">
            <img src="/logo.png" className="object-cover w-20" />
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
            <AiOutlineMenu />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
