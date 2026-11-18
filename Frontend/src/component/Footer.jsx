import React from "react";
import {
  CarTaxiFront,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
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
        { name: "Cars Under 1M", path: "/product?maxPrice=1000000" },
        { name: "Cars Under 10M", path: "/product?maxPrice=10000000" },
        { name: "Cars Above 10M", path: "/product?minPrice=10000000" },
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

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#083463] rounded";

  return (
    <footer className="bg-[#083463] text-white" aria-label="Site footer">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className={`flex items-center gap-2 mb-4 w-fit ${focusRing}`}
              aria-label="AUTOSELL home"
            >
              <CarTaxiFront
                size={30}
                className="text-blue-400"
                aria-hidden="true"
              />
              <span className="text-2xl font-bold tracking-tight">
                AUTO<span className="text-blue-400">SELL</span>
              </span>
            </Link>

            <p className="text-gray-300 text-sm leading-6 max-w-sm">
              Find your perfect car with AUTOSELL. Explore vehicles, compare
              prices and discover the right car for your needs.
            </p>

            <p className="text-gray-300 text-sm mt-5">
              <span className="font-semibold text-white">Phone:</span>{" "}
              <a
                href="tel:+250796577776"
                className={`hover:text-blue-300 transition-colors ${focusRing}`}
              >
                +250 796 577 776
              </a>
            </p>
          </div>

          {/* LINKS */}
          {sections.map((section) => (
            <nav
              key={section.title}
              aria-labelledby={`footer-${section.title.toLowerCase()}`}
            >
              <h3
                id={`footer-${section.title.toLowerCase()}`}
                className="font-semibold text-base mb-5"
              >
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`text-gray-300 text-sm hover:text-blue-300 transition-colors ${focusRing}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
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
          <ul className="flex items-center gap-3" aria-label="Social media">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (opens in new tab)`}
                    className={`w-9 h-9 flex items-center justify-center rounded-full text-gray-300 hover:text-white hover:bg-white/10 hover:scale-110 transition-all ${focusRing}`}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* BACK TO TOP */}
          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Back to top"
            className={`hidden md:flex w-9 h-9 items-center justify-center rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 transition-all ${focusRing}`}
          >
            <ArrowUp size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;