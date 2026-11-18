
import React from "react";
import {
  ShieldCheck,
  Tag,
  Zap,
  Target,
  Eye,
  CarFront,
  Users,
  Headset,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";
import Swiping from "../component/Swiping";

const AboutUs = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted Sellers",
      description:
        "Connect with reliable sellers and discover vehicles with confidence.",
    },
    {
      icon: Tag,
      title: "Fair Pricing",
      description:
        "Explore different vehicles and compare prices to find the right value.",
    },
    {
      icon: Zap,
      title: "Simple Process",
      description:
        "Find, compare and connect with sellers through a simple experience.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To make buying and selling vehicles easier by connecting buyers and sellers through a simple and accessible online marketplace.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become a trusted platform where people can discover vehicles and make informed buying decisions.",
    },
  ];

  const highlights = [
    {
      icon: CarFront,
      title: "Vehicle Selection",
      description: "Explore different vehicles in one place.",
    },
    {
      icon: Users,
      title: "Buyer & Seller Connection",
      description: "Bringing buyers and sellers closer together.",
    },
    {
      icon: Headset,
      title: "Customer Support",
      description: "Making your experience easier and more convenient.",
    },
  ];

  return (
    <main className="w-full pt-16 sm:pt-20">

      {/* HERO SECTION */}
      <section className="relative bg-[#083463] text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#052443] via-[#083463] to-blue-900 opacity-95" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="max-w-2xl">

            <p className="text-blue-300 font-semibold tracking-widest uppercase text-sm mb-4">
              Welcome to AUTOSELL
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              About Our
              <span className="block text-blue-300">
                Car Marketplace
              </span>
            </h1>

            <p className="text-gray-200 text-base md:text-lg leading-8 max-w-xl mb-8">
              Buy and sell cars with confidence, transparency and
              convenience. We make finding your next vehicle easier.
            </p>

            <Link
              to="/product"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 px-7 py-3.5 rounded-lg font-semibold transition-all"
            >
              Explore Cars
              <ArrowRight size={19} />
            </Link>

          </div>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div>

            <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-3">
              Get to know us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#083463] mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              AUTOSELL is an online automotive marketplace designed
              to make buying and selling vehicles easier and more
              convenient.
            </p>

            <p className="text-gray-600 leading-8 mb-6">
              We aim to connect buyers with sellers, provide access
              to different vehicle options and help people make
              informed decisions when choosing their next car.
            </p>

            <div className="space-y-3 mb-8">

              {[
                "Easy vehicle discovery",
                "Convenient seller connections",
                "A simple marketplace experience",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-blue-600 shrink-0"
                  />
                  <span className="text-gray-700 text-sm">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <Link
              to="/product"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
            >
              Discover our vehicles
              <ArrowRight size={18} />
            </Link>

          </div>

          {/* EXISTING SWIPING COMPONENT */}
          <div className="w-full min-h-[300px] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
            <Swiping />
          </div>

        </div>

      </section>

      {/* MISSION AND VISION */}
      <section className="bg-gray-50 py-16 md:py-20">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="text-center mb-12">

            <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-3">
              What drives us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#083463]">
              Our Purpose
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition"
                >

                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-xl font-bold text-[#083463] mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="text-center mb-14">

            <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-3">
              The AUTOSELL difference
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#083463] mb-4">
              Why Choose Us
            </h2>

            <p className="text-gray-500 max-w-xl mx-auto leading-7">
              We focus on creating a straightforward experience
              for everyone looking to buy or sell a vehicle.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-7">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-[#083463] mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* PLATFORM HIGHLIGHTS */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold text-[#083463] mb-3">
              What We Offer
            </h2>

            <p className="text-gray-500">
              Everything you need for a simpler car marketplace experience.
            </p>

          </div>

          <div className="grid sm:grid-cols-3 gap-8">

            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="text-center"
                >

                  <div className="mx-auto w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-5">
                    <Icon size={27} />
                  </div>

                  <h3 className="font-bold text-lg text-[#083463] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-6">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-[#083463] py-16 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Find Your Next Car?
          </h2>

          <p className="text-gray-300 leading-7 mb-8 max-w-2xl mx-auto">
            Explore available vehicles and discover an easier way
            to find the car that fits your needs.
          </p>

          <Link
            to="/product"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold transition"
          >
            Browse Cars
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
};

export default AboutUs;
