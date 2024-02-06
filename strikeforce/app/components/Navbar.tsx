import React from 'react';
import Image from "next/image";

const Navbar = () => {
  return (
    <>
        <nav className='bg-black'>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/" className='text-white'><Image src="/assests/logo.png" height={50} width={50} alt="logo"/></a>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className="hidden md:block">
                        <div className='ml-4 flex items-center space-x-4'>
                            <a href="/" className='text-red-500 hover:bg-red-500 hover:text-black rounded-lg p-2'>About Us</a>
                            <a href="/" className='text-red-500 hover:bg-red-500 hover:text-black rounded-lg p-2'>TimeTable</a>
                            <a href="/" className='text-red-500 hover:bg-red-500 hover:text-black rounded-lg p-2'>Contact US</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar