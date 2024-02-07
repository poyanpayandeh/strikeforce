import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl text-center">Welcome to Strikeforce</h1>
      </div>
    </main>
    

    <footer>
      <Footer />
    </footer>
    </>
  );
}
