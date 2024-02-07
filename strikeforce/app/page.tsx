import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className="bg-zinc-200 top-container">
      <div className="max-w-7xl mx-auto flex flex-col items-center h-screen">
        <div>
          <div>
            <Image priority src="/assets/CopyofStrikeforcelogo.png"  height={500} width={500} alt="logo"/>
          </div>
        </div>
          <h1 className="text-xl mt-12">strikeforce</h1>
      </div>
    </main>
    

    <footer className="bg-zinc-200">
      <Footer />
    </footer>
    </>
  );
}
