import React from "react";
import { Button } from "./ui/button";
import { Dribbble, Facebook, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <Link href={href} className="duration-300 hover:text-slate-200">
      {children}
    </Link>
  );
};

const Footer = ({ toast }: { toast: any }) => {
  const emailRef = React.useRef<HTMLInputElement>(null);

  const handleSubscribe = () => {
    if (emailRef.current) {
      toast({
        variant: "default",
        title: "Succesfully subscribed",
        description:
          "Your email has been successfully subscribed to our newsletter!",
      });
      emailRef.current.value = "";
    }
  };

  return (
    <>
      <footer className="text-slate-300 bg-slate-700">
        <div className="grid lg:flex gap-y-8 lg:gap-x-12 max-w-6xl mx-auto w-full p-4 py-10 lg:py-14">
          <article className="lg:w-[40%] lg:mr-12">
            <h2 className="text-3xl font-bold text-slate-200">Pixoto</h2>
            <p className="mt-2">
              For upward root correctly, according chosen hall crowd desert!
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
          </article>

          <article className="lg:w-[20%]">
            <h3 className="font-bold uppercase">pages</h3>
            <div className="grid gap-2 mt-2">
              <FooterLink href="/">About us</FooterLink>
              <FooterLink href="/">Services</FooterLink>
              <FooterLink href="/">Portfolio</FooterLink>
              <FooterLink href="/">Blog</FooterLink>
              <FooterLink href="/">Team</FooterLink>
              <FooterLink href="/">Contact</FooterLink>
            </div>
          </article>

          <article className="lg:w-[20%]">
            <h3 className="font-bold uppercase">miscellaneous</h3>
            <div className="grid gap-2 mt-2">
              <FooterLink href="/">Photography</FooterLink>
              <FooterLink href="/">Testimonials</FooterLink>
              <FooterLink href="/">Styles guide</FooterLink>
              <FooterLink href="/">Privacy policy</FooterLink>
            </div>
          </article>

          <article className="lg:w-[40%]">
            <h3 className="font-bold uppercase">subscribe</h3>
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
              <Button variant="ghost" size={"icon"} onClick={handleSubscribe}>
                <Mail size={18} strokeWidth={1.5} />
              </Button>
            </div>
          </article>
        </div>
      </footer>
    </>
  );
};

export default Footer;
