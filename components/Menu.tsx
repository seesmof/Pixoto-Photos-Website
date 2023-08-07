"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Menu = () => {
  const [isPagesShown, setIsPagesShown] = useState(false);

  return (
    <>
      <div className="text-inherit fixed z-20 min-h-screen left-0 top-0 bg-inherit font-medium w-max">
        <div className="flex flex-col gap-6 px-8 py-20">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Shop</Link>
          <button
            className="text-start flex flex-row gap-48 justify-between items-center w-full"
            onClick={() => setIsPagesShown(!isPagesShown)}
          >
            Pages
            <button>
              {isPagesShown ? (
                <BsChevronUp className="stroke-1" />
              ) : (
                <BsChevronDown className="stroke-1" />
              )}
            </button>
          </button>
          {isPagesShown && (
            <div className="flex flex-col gap-4 ml-4">
              <Link href="/">Portfolio</Link>
              <Link href="/">Services</Link>
              <Link href="/">Style Guide</Link>
            </div>
          )}
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
