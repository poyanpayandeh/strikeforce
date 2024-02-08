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

    <main className="bg-zinc-200 pt-[5rem]">
      <Hero></Hero>  
    </main>
    

    <footer className="bg-zinc-200">
      <Footer />
    </footer>
    </>
  );
}
