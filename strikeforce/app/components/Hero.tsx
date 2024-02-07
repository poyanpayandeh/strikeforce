import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
    <section>
        <div className="max-w-7xl mx-auto flex flex-col items-center h-screen">
            <div>
            <div>
                <Image priority src="/assets/CopyofStrikeforcelogo.png"  height={500} width={500} alt="logo"/>
            </div>
            </div>
            <h1 className="text-xl mt-12">strikeforce</h1>
        </div>
    </section>
  )
}

export default Hero