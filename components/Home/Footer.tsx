import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="flex p-4 py-10 bg-backgroundLight flex-col text-slate-200">
        <section className="pb-6 flex flex-col">
          <Image
            src="/logo.png"
            alt="pixoto logo"
            className="object-cover w-32"
            width={999}
            height={999}
          ></Image>
          <p className="pt-1 font-medium text-slate-50">
            Capturing life's moments, frame by frame.
          </p>
          <div className="flex flex-row gap-2 pt-4">
            <a href="#" className="rounded-md p-3 bg-background w-max">
              <BsFacebook className="text-lg" />
            </a>
            <a href="#" className="rounded-md p-3 bg-background w-max">
              <BsTwitter className="text-lg" />
            </a>
            <a href="#" className="rounded-md p-3 bg-background w-max">
              <BsInstagram className="text-lg" />
            </a>
            <a href="#" className="rounded-md p-3 bg-background w-max">
              <BsLinkedin className="text-lg" />
            </a>
          </div>
        </section>
        <section className="flex flex-col md:flex-row md:gap-6">
          <article className="pb-6 flex flex-col">
            <h3 className="footer-section">informational</h3>
            <div className="flex flex-col gap-3 pt-3 font-medium">
              <a href="#">About Us</a>
              <a href="#">Our Services</a>
              <a href="#">Gallery</a>
              <a href="#">Blog Post</a>
              <a href="#">Our Team</a>
              <a href="#">Contact Us</a>
            </div>
          </article>
          <article className="pb-6 flex flex-col">
            <h3 className="footer-section">miscellaneous</h3>
            <div className="flex flex-col gap-3 pt-3 font-medium">
              <a href="#">Photography</a>
              <a href="#">Testimonies</a>
              <a href="#">Styles Guide</a>
              <a href="https://github.com/seesmof/pixoto-photography-website/commits/main">
                Change Log
              </a>
              <a href="https://github.com/seesmof/pixoto-photography-website/blob/main/LICENSE">
                License
              </a>
            </div>
          </article>
          <article className="flex flex-col pb-12">
            <h3 className="footer-section">subscribe</h3>
            <p className="pt-2">
              Subscribe to receive updates, access to exclusive deals, and more
            </p>
            <form className="flex flex-row items-center gap-2 pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none border-2 rounded-md px-3 py-2 border-slate-300 bg-inherit text-slate-900"
              />
              <button className="border-2 border-transparent rounded-md bg-slate-50 text-slate-900 font-medium px-4 py-2 w-max">
                Subscribe
              </button>
            </form>
          </article>
        </section>
        <section className="p-4 border-t-2 text-center border-slate-700">
          <a href="https://github.com/seesmof" className="group">
            © 2023{" "}
            <span className="text-slate-50 font-medium group-hover:underline underline-offset-4">
              seesmof
            </span>
            . All rights reserved
          </a>
        </section>
      </div>
    </>
  );
};

export default Footer;
