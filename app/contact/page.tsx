"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Compass, Mail, Phone } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <section className="grid bg-center relative bg-no-repeat bg-cover bg-[url('/assets/contact-header.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800 z-10"></div>
        <div className="grid max-w-6xl p-4 mx-auto w-full z-20">
          <div className="mb-12">
            <Navbar />
          </div>
          <div className="gap-4 lg:grid-cols-3 grid">
            <Card className="bg-slate-700 border-slate-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Compass size={18} strokeWidth={2} />
                  Address
                </CardTitle>
                <CardDescription className="text-slate-200 text-base pt-2">
                  123 Main Street
                  <br />
                  New York, NY 12345
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-700 border-slate-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone size={18} strokeWidth={2} />
                  Phone
                </CardTitle>
                <CardDescription className="text-slate-200 text-base pt-2">
                  Mobile: +1 123 456 789
                  <br />
                  Hotline: +1 123 456 789
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-slate-700 border-slate-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail size={18} strokeWidth={2} />
                  Email
                </CardTitle>
                <CardDescription className="text-slate-200 text-base pt-2">
                  zarfufwe@ges.gn
                  <br />
                  rogivawa@do.gq
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="grid max-w-6xl w-full mx-auto p-4 py-12">
        <h3 className="uppercase font-medium lg:text-lg">
          have be any questions?
        </h3>
        <h2 className="text-2xl lg:text-4xl font-bold mt-2">
          Feel free to get in touch with us at any time
        </h2>
        <div className="grid gap-4 pt-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <Input
              className="bg-slate-700 border border-slate-500 focus:border-slate-200 focus:border-2"
              type="text"
              id="firstName"
              placeholder="First name *"
            />
            <Input
              className="bg-slate-700 border border-slate-500 focus:border-slate-200 focus:border-2"
              type="text"
              id="lastName"
              placeholder="Last name *"
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <Input
              className="bg-slate-700 border border-slate-500 focus:border-slate-200 focus:border-2"
              type="email"
              id="email"
              placeholder="Your email *"
            />
            <Input
              className="bg-slate-700 border border-slate-500 focus:border-slate-200 focus:border-2"
              type="text"
              id="subject"
              placeholder="Subject"
            />
          </div>
          <Textarea
            className="bg-slate-700 border border-slate-500 focus:border-slate-200 focus:border-2"
            id="message"
            placeholder="Your message..."
          />
          <Button variant="default">Send message</Button>
        </div>
      </section>

      <section className="grid w-full my-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16049.148558300005!2d-73.99870451382385!3d40.716504528662846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1693239999375!5m2!1suk!2sua"
          width="600"
          height="600"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </section>

      <Footer />
    </>
  );
};

export default page;
