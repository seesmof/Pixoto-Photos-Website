import AboutMe from "@/components/Home/AboutMe";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar";
import MyServices from "@/components/Home/Services";
import MyAlbum from "@/components/Home/MyAlbum";
import Contact from "@/components/Home/Contact";
import Gear from "@/components/Home/Gear";
import Testimonials from "@/components/Home/Testimony";
import Blog from "@/components/Home/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* container max-w-6xl */}
      <Hero />
      <AboutMe />
      <MyServices />
      <MyAlbum />
      <Contact />
      <Gear />
      <Testimonials />
      <Blog />
    </>
  );
}
