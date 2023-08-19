"use client";
import AboutMe from "@/components/Home/AboutMe";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar";
import MyServices from "@/components/Home/Services";
import MyAlbum from "@/components/Home/Portfolio";
import Contact from "@/components/Home/Contact";
import Gear from "@/components/Home/Gear";
import Testimonials from "@/components/Home/Testimony";
import Blog from "@/components/Home/Blog";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";
import { Prompt } from "next/font/google";

export default function Home() {
  const [finalValue, setFinalValue] = useState("Waiting for data...");
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const value = confirm("Are you sure?");
    if (value === true) {
      setFinalValue("Submitted! 😄");
      console.log("Successfully submitted the form.");
    } else {
      setFinalValue("Failed to submit 😔");
      console.warn(
        "WARNING: Failed to submit form.\nWARNING_CODE: 8TSysKrrbim"
      );
    }
    nameInputRef.current!.value = "";
    nameInputRef.current?.focus();
  };

  const handleNewPage = () => {
    const userPrompt = prompt("Enter your name please: ");
    if (userPrompt) console.log(`Welcome, ${userPrompt}!`);
  };

  return (
    <>
      <div className="layout gap-4">
        <h2 className="font-medium text-xl">{finalValue}</h2>
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="flex flex-col gap-1 font-medium">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="bg-inherit px-4 py-2 rounded-lg border-2 border-slate-50 outline-none"
              placeholder="John Doe"
              required
              ref={nameInputRef}
            />
          </div>
          <button className="btn btn-fill">Submit</button>
        </form>
        <button className="btn btn-yellow" onClick={handleNewPage}>
          New Page
        </button>
      </div>

      {/* <Hero />
      <AboutMe />
      <MyServices />
      <MyAlbum />
      <Contact />
      <Gear />
      <Testimonials />
      <Blog /> */}
    </>
  );
}
