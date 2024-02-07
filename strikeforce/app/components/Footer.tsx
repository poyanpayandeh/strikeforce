import React from 'react'

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-t-2 border-gray-100 py-4">
            <div>
                <p className="text-sm text-gray-500">© 2024 Strikeforce</p>
            </div>
            <div>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-600">
                Privacy Policy
                </a>
                <span className="text-sm text-gray-500 mx-4">|</span>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-600">
                Terms of Service
                </a>
            </div>
        </div>
    </div>
)}

export default Footer  