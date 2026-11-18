import React from 'react'
import { CarTaxiFront } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#083463] text-white py-10 px-6 ">


      <div className='flex gap-2 lg:ml-20 md:mb-5'>
            <a href="/">
                <CarTaxiFront color='blue' size={30} href='/' className='cursor-pointer' />
            </a>
            
            <span className='text-black text-2xl '>AUTOSELL</span>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
      
        <div>
          <h3 className="text-xl font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Find My Car</li>
            <li className="hover:text-white cursor-pointer">Cars Under 1M</li>
            <li className="hover:text-white cursor-pointer">Fuel Efficient</li>
          </ul>
        </div>


        
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">More Info About Carvana</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>


        
        <div>
          <h3 className="text-xl font-semibold mb-4">Available cars</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">under 1M</li>
            <li className="hover:text-white cursor-pointer">under 10M</li>
            <li className="hover:text-white cursor-pointer">Above 10M</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Terms and Privacy</li>
          </ul>
        </div>
      </div>


      
      <div className="max-w-6xl mx-auto border-t border-white my-8"></div>


      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-400 text-sm text-center md:text-left">
          <p className='flex justify-center items-center'>Copyright © 2025 AUTO SELL. All Rights reserved.</p>
          <p className="mt-2">
            OUR CONTACT: +250796577776
          </p>
        </div>


        
        <div className="flex space-x-4">
          <div className="bg-gray-600/30 p-3 rounded-full cursor-pointer hover:bg-gray-500/40"><FaFacebookF /></div>
          <div className="bg-gray-600/30 p-3 rounded-full cursor-pointer hover:bg-gray-500/40"><FaTwitter /></div>
          <div className="bg-gray-600/30 p-3 rounded-full cursor-pointer hover:bg-gray-500/40"><FaPinterestP /></div>
          <div className="bg-gray-600/30 p-3 rounded-full cursor-pointer hover:bg-gray-500/40"><FaLinkedinIn /></div>
        </div>
      </div>
    </div>
  )
}

export default Footer