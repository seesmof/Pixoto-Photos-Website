import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-slate-900 text-slate-50 flex flex-col">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
