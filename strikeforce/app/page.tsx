import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className="bg-zinc-400">
      <div className="max-w-7xl mx-auto flex justify-center items-center h-screen top-container">
        <div className="self-start">
          <Image src="/assets/CopyofStrikeforcelogo.png" height={800} width={800} alt="logo"/>
        </div>
      </div>
    </main>
    

    <footer className="bg-zinc-400">
      <Footer />
    </footer>
    </>
  );
}
