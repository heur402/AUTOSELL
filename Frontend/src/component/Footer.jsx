
import React from "react";
import {
  CarTaxiFront,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Explore",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "All Products", path: "/product" },
        { name: "Find Your Car", path: "/product" },
      ],
    },
    {
      title: "Car Categories",
      links: [
        { name: "Cars Under 1M", path: "/product" },
        { name: "Cars Under 10M", path: "/product" },
        { name: "Cars Above 10M", path: "/product" },
        { name: "Fuel Efficient Cars", path: "/product" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "Contact Us", path: "/about" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms & Conditions", path: "/terms" },
        { name: "Help & Support", path: "/about" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#071D36] text-white">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">

          {/* BRAND SECTION */}
          <div className="lg:col-span-2">

            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">

              <div className="bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-900/40 group-hover:bg-blue-500 transition">
                <CarTaxiFront size={30} strokeWidth={2.2} />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  AUTO<span className="text-blue-400">SELL</span>
                </h2>

                <p className="text-[10px] tracking-[3px] text-gray-400 font-semibold">
                  DRIVE YOUR DREAM
                </p>
              </div>

            </Link>

            <p className="text-gray-400 text-sm leading-7 max-w-sm mb-7">
              Discover your perfect car with AUTOSELL. Explore a wide
              selection of vehicles, compare options and find a car
              that matches your needs and budget.
            </p>

            {/* NEWSLETTER / CALL TO ACTION */}
            <Link
              to="/product"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-lg font-semibold text-sm transition-all group"
            >
              Explore Cars

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

          </div>

          {/* FOOTER LINKS */}
          {footerLinks.map((section) => (
            <div key={section.title}>

              <h3 className="text-base font-bold mb-6 relative">
                {section.title}

                <span className="absolute -bottom-2 left-0 w-9 h-0.5 bg-blue-500 rounded-full" />
              </h3>

              <ul className="space-y-4">

                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-blue-400 text-sm transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition" />

                      {link.name}
                    </Link>
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

        {/* CONTACT INFORMATION */}
        <div className="mt-16 pt-8 border-t border-white/10">

          <h3 className="font-bold text-lg mb-6">
            Get in Touch
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <a
              href="tel:+250796577776"
              className="flex items-center gap-4 group"
            >
              <div className="bg-blue-500/10 text-blue-400 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">
                  Call Us
                </p>

                <p className="text-sm font-medium text-gray-200">
                  +250 796 577 776
                </p>
              </div>
            </a>

            <a
              href="mailto:info@autosell.com"
              className="flex items-center gap-4 group"
            >
              <div className="bg-blue-500/10 text-blue-400 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">
                  Email Us
                </p>

                <p className="text-sm font-medium text-gray-200">
                  Contact AUTOSELL
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="bg-blue-500/10 text-blue-400 p-3 rounded-xl">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">
                  Location
                </p>

                <p className="text-sm font-medium text-gray-200">
                  Rwanda
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-white/10 bg-[#05172B]">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-7 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* COPYRIGHT */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-white font-semibold">AUTOSELL</span>.
              All rights reserved.
            </p>

            <p className="text-gray-600 text-xs mt-2">
              Designed to make your car search easier.
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-3">

            <span className="text-gray-500 text-xs mr-2 hidden sm:block">
              Follow us
            </span>

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                >
                  <Icon size={17} />
                </a>
              );
            })}

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
