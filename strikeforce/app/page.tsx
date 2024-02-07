import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className="bg-zinc-200">
      <div className="max-w-7xl mx-auto flex justify-center items-center h-screen top-container">
        <div className="self-start">
          <Image src="/assets/CopyofStrikeforcelogo.png" height={600} width={600} alt="logo"/>
        </div>
      </div>
    </main>
    

    <footer className="bg-zinc-200">
      <Footer />
    </footer>
    </>
  );
}
