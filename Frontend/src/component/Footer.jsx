
import React from "react";
import { CarTaxiFront, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Explore",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Our Cars", path: "/product" },
      ],
    },
    {
      title: "Categories",
      links: [
        { name: "Cars Under 1M", path: "/product" },
        { name: "Cars Under 10M", path: "/product" },
        { name: "Cars Above 10M", path: "/product" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", path: "/about" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms & Conditions", path: "/terms" },
      ],
    },
  ];

  const socials = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#083463] text-white">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <Link to="/" className="flex items-center gap-2 mb-4 w-fit">
              <CarTaxiFront size={30} className="text-blue-400" />

              <span className="text-2xl font-bold tracking-tight">
                AUTO<span className="text-blue-400">SELL</span>
              </span>
            </Link>

            <p className="text-gray-300 text-sm leading-6 max-w-sm">
              Find your perfect car with AUTOSELL. Explore vehicles,
              compare prices and discover the right car for your needs.
            </p>

            <p className="text-gray-300 text-sm mt-5">
              <span className="font-semibold text-white">Phone:</span>{" "}
              +250 796 577 776
            </p>

          </div>

          {/* LINKS */}
          {sections.map((section) => (
            <div key={section.title}>

              <h3 className="font-semibold text-base mb-5">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 text-sm hover:text-blue-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/15">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-300 text-sm text-center">
            © {currentYear} AUTOSELL. All rights reserved.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-5">

            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Icon size={19} />
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
