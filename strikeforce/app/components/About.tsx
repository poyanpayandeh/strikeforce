import React from 'react'

const About = () => {
  return (
    <section className='max-w-screen-sm'>
      <div className='flex flex-col justify-center items-center gap-2 text-center'>
        {/* <h1 className='font-bold font-sans text-4xl md:text-6xl text-nowrap'>Home</h1>
        <h1 className='font-bold font-sans text-4xl md:text-6xl text-nowrap'>of</h1>
        <h1 className='font-bold font-sans text-4xl md:text-6xl text-nowrap'>Champions!</h1> */}

        <h1 className='text-xl md:text-2xl shadow-xl border-2 border-zinc-300 rounded-lg font-mono text-gray-900 p-5'>
          <span className='font-bold underline text-red-700'>StrikeForce</span>, led by renowned head coach <span className='font-bold underline text-red-700'>Aaron Boyes</span>, is New Zealands 
          go-to Muay Thai and kickboxing gym. Located in New Lynn, <span className='font-bold underline text-red-700'>we train everyone 
          from first-timers to elite fighters offering world-class coaching in a motivating high-energy environment</span>. Whether you're looking to get in 
          shape, master self-defence, or dominate in the ring, <span className='font-bold underline text-red-700'>StikeForce is where champions are made</span>.
        </h1>
      </div>
    </section>
  )
}

export default About