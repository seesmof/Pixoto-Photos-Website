import AboutMe from "@/components/Home/AboutMe";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar";
import MyServices from "@/components/Home/MyServices";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-slate-800 text-slate-50 flex flex-col">
        <Navbar />
        <Hero />
        <AboutMe />
        <MyServices />
      </div>
    </>
  );
}
