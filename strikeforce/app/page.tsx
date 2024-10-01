import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <header>
      <Navbar />
      </header>

      <div className="bg-zinc-300">
        <main className="pt-[5rem] pl-1 pr-1 md:pl-0 md:pr-0 mb-[50rem]">
          <Hero></Hero> 
        </main>

        <footer className="">
          <Footer />
        </footer>
      </div>
    </>
  );
}
