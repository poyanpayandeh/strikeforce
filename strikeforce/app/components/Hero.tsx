import React from 'react';
import Image from "next/image";
import Carosel from "./Carosel";
import About from "./About";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-start items-center max-w-7xl mx-auto">
      {/* Main Logo */}
      <div className="mb-10 md:mb-15">
        <Image src="/assets/CopyofStrikeforcelogo.png" height={500} width={500} alt="logo" />
      </div>

      {/* Carousel Slideshow */}
      <div className="max-w-[100%] lg:max-w-7xl mx-auto justify-self-center">
        <Carosel />
      </div>
        
      {/* Secondary Logo */}
      <div className="flex-shrink-0 mt-10 md:mt-15">
        <a href="/" className='text-white'><Image src="/assets/logo.png" height={50} width={50} alt="logo"/></a>
      </div> 

      {/* About section */}
      <section>
        <About></About>
      </section>
    </section>
  );
};

export default Hero;