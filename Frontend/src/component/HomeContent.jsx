import React from "react";
import Swiping from "../component/Swiping.jsx";
import { FaWhatsapp } from "react-icons/fa";

const HomeContent = () => {
  return (
    <div>
      <div className="bg-[#083463] text-white w-full md:pb-38 md:mt-5 md:mb-40 mb-5 ">
        <div className="max-w-6xl mx-auto px-6 md:flex items-center justify-between pt-20 md:gap-10">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="border border-white/40 rounded-lg p-8">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                GET A REAL OFFER <br /> IN 2 MINUTES
              </h1>
              <p className="text-gray-200 mt-4 text-lg">
                Sell your car 100% online. No haggling, no headaches.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white text-gray-900 rounded-xl p-6 shadow-md w-full max-w-md mx-auto">
              <div className="flex border-b border-gray-300 pb-2 mb-4 text-sm font-medium">
                <span className="mr-6 text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">
                  License Plate
                </span>
                <span className="text-gray-400 cursor-pointer">VIN</span>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="License Plate"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-3 focus:ring-blue-500/50"
                />

                <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-3 focus:ring-blue-500/50">
                  <option>State</option>
                  <option>CA</option>
                  <option>NY</option>
                  <option>TX</option>
                </select>

                <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                  Get My Offer
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-14 md:mt-30 px-6 md:absolute xl:right-50 md:top-80">
          <div className="bg-white text-gray-900 rounded-xl shadow-md p-4 flex flex-col md:flex-row items-center justify-between gap-6 border">
            <div className="w-36 h-32 rounded-xl">
              <Swiping />
            </div>

            <div className="lg:w-2/3">
              <h2 className="text-xl font-semibold text-blue-600">
                Value Tracker
              </h2>
              <p className="mt-2 text-gray-700">
                Stay up to speed with your car’s value. Not ready to sell yet?
                Get updates so you always know your car’s value.
              </p>
            </div>

            <button
              className="border border-blue-500 text-blue-600 px-6 py-2
            rounded-full font-medium hover:bg-blue-50 transition"
            >
              Track
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-white w-15 h-15 rounded-full cursor-pointer 
        z-90 right-1 bottom-1 fixed flex items-center justify-center"
      >
        <a
          href="https://wa.me/250785313282"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaWhatsapp color="green" size={30} />
        </a>
      </div>
    </div>
  );
};

export default HomeContent;
