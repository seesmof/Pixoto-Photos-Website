import AboutMe from "@/components/Home/AboutMe";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar";
import MyServices from "@/components/Home/MyServices";
import MyAlbum from "@/components/Home/MyAlbum";
import Contact from "@/components/Home/Contact";
import Gear from "@/components/Home/Gear";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background text-slate-50 flex flex-col">
        {/* container max-w-6xl */}
        <Navbar />
        <Hero />
        <AboutMe />
        <MyServices />
        <MyAlbum />
        <Contact />
        <Gear />
      </div>
    </>
  );
}
