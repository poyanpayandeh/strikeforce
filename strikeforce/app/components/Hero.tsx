import React from 'react';
import Image from "next/image";
import Carosel from "./Carosel";
import About from "./About";
import Timetable from './Timetable';

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
      <div className="flex-shrink-0 mt-10 mb-10 md:mt-15 md:mb-15">
        <Image src="/assets/logo.png" height={100} width={100} alt="logo"/>
      </div> 

      {/* About section */}
      <section className='mb-10'>
        <About></About>
      </section>

      {/* TimeTable  */}
      <section className='w-full'>
        <Timetable></Timetable>
      </section>

      {/* Contact */}
    </section>
  );
};

export default Hero;