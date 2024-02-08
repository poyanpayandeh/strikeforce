import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-t-2 border-gray-600 py-4">
            <div>
                <p className="text-sm text-gray-600">© 2024 Strikeforce</p>
                <p className='text-sm text-gray-600'>All Rights Reserved</p>
            </div>
            <div>
                <a href="https://www.instagram.com/strikeforcenewzealand/?hl=en" target='_blank'>
                    <Image src="/assets/ig2.svg" height={40} width={40} alt="instagram"/>
                </a>
            </div>
        </div>
    </div>
)}

export default Footer