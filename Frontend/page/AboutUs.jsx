import React from "react";
import Swiping from "../component/Swiping";

const AboutUs = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="bg-[#083463] text-white h-[300px] flex flex-col items-center justify-center mt-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Our Car Market
        </h1>
        <p className="text-center max-w-2xl text-gray-200">
          Buy and sell cars with confidence, transparency, and speed.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* Text */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-[#083463]">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            We are a modern car selling platform focused on making car buying
            and selling easy, secure, and fully online.
          </p>
          <p className="text-gray-600">
            Our goal is to connect buyers with trusted sellers while offering
            fair prices and excellent customer support.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="bg-gray-100 rounded-xl flex items-center justify-center border">
           <Swiping />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#083463]">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Trusted Sellers
              </h3>
              <p className="text-gray-600">
                Every car comes from verified and reliable sellers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Fair Pricing
              </h3>
              <p className="text-gray-600">
                We help buyers and sellers get the best value possible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                Simple Process
              </h3>
              <p className="text-gray-600">
                Search, compare, and connect in just a few clicks.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-[#083463]">500+</h3>
            <p className="text-gray-600">Cars Listed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#083463]">300+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#083463]">50+</h3>
            <p className="text-gray-600">Dealers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#083463]">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AboutUs;
