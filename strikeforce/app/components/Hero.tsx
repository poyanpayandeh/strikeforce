import React from 'react'
import Image from "next/image";
import Carosel from "./Carosel";

const Hero = () => {
  return (
    <section>
        <div className="max-w-7xl mx-auto flex flex-col items-center h-screen">
            {/* Main Logo */}
            <div>
                <div>
                    <Image priority src="/assets/CopyofStrikeforcelogo.png"  height={500} width={500} alt="logo"/>
                </div>
            </div>

            {/* Carosel Slideshow */}
            <div className='mt-20'>
                <Carosel></Carosel>
            </div>
        </div>
    </section>
  )
}

export default Hero