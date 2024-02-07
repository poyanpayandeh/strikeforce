"use client"
import React, { useState } from 'react';
import Image from "next/image";

const Navbar = () => {

    const [isNav, setIsNav] = useState(false);

    const toggleNavbar = () => {
        setIsNav(!isNav);
    }

  return (
    <>
        <nav className='bg-black'>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/" className='text-white'><Image src="/assests/logo.png" height={40} width={40} alt="logo"/></a>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className="hidden md:block">
                        <div className='ml-4 flex items-center space-x-4'>
                            <a href="/" className='text-red-600 hover:bg-red-500 hover:text-black rounded-lg p-2 text-sm'>Home</a>
                            <a href="/" className='text-red-600 hover:bg-red-500 hover:text-black rounded-lg p-2 text-sm'>About</a>
                            <a href="/" className='text-red-600 hover:bg-red-500 hover:text-black rounded-lg p-2 text-sm'>Timetable</a>
                            <a href="/" className='text-red-600 hover:bg-red-500 hover:text-black rounded-lg p-2 text-sm'>Contact</a>
                        </div>
                    </div>
                    
                    {/* Hamburger Icon */}
                    <div className='md:hidden flex items-center'>
                        <button className='inline-flex items-center justidy-center p-2 rounded-md text-red-600 hover:text-red-600
                         focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600' 
                         onClick={toggleNavbar}
                         >
                            {isNav ? (
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            ) : (
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 6h16M4 12h16m-7 6h7"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isNav && (
               <div className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-end'>
                    <a href="/" className='text-red-600 hover:bg-red-500 hover:text-black rounded-lg p-2'>About</a>
                    <a href="/" className='text-red-600 hover:bg-red-500 hover:text-black rounded-lg p-2'>Timetable</a>
                    <a href="/" className='text-red-600 hover:bg-red-500 hover:text-black rounded-lg p-2'>Contact</a>
                </div>
               </div> 
            )}
        </nav>
    </>
  )
}

export default Navbar