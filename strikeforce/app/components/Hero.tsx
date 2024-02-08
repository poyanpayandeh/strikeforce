import React from 'react';
import Image from "next/image";
import Carosel from "./Carosel";

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
    </section>
  );
};

export default Hero;