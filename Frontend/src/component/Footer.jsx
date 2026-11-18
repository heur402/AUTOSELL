import React, { useState } from "react";
import {
  CarTaxiFront,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#062a4f] rounded";

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: wire up to your API
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer
      className="relative bg-gradient-to-b from-[#083463] to-[#062a4f] text-white"
      aria-label="Site footer"
    >
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400" />

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* BRAND + CONTACT + NEWSLETTER */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              className={`flex items-center gap-2 mb-4 w-fit ${focusRing}`}
              aria-label="AUTOSELL home"
            >
              <div className="bg-blue-500/15 p-2 rounded-xl">
                <CarTaxiFront
                  size={26}
                  className="text-blue-400"
                  aria-hidden="true"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                AUTO<span className="text-blue-400">SELL</span>
              </span>
            </Link>

            <p className="text-gray-300 text-sm leading-6 max-w-sm">
              Find your perfect car with AUTOSELL. Explore vehicles, compare
              prices and discover the right car for your needs.
            </p>

            {/* Contact details */}
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400 shrink-0" aria-hidden="true" />
                <a
                  href="tel:+250796577776"
                  className={`hover:text-white transition-colors ${focusRing}`}
                >
                  +250 796 577 776
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400 shrink-0" aria-hidden="true" />
                <a
                  href="mailto:hello@autosell.rw"
                  className={`hover:text-white transition-colors ${focusRing}`}
                >
                  hello@autosell.rw
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-400 shrink-0" aria-hidden="true" />
                <span>Kigali, Rwanda</span>
              </li>
            </ul>

            {/* Newsletter */}
            <form
              onSubmit={handleSubscribe}
              className="mt-6 max-w-sm"
              aria-label="Newsletter signup"
            >
              <label
                htmlFor="footer-email"
                className="block text-sm font-semibold text-white mb-2"
              >
                Get the latest listings
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`flex-1 min-w-0 px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition ${focusRing}`}
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className={`shrink-0 w-11 h-11 flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-400 text-white transition ${focusRing}`}
                >
                  {subscribed ? (
                    <Check size={18} aria-hidden="true" />
                  ) : (
                    <Send size={18} aria-hidden="true" />
                  )}
                </button>
              </div>
              {subscribed && (
                <p
                  role="status"
                  className="text-xs text-green-300 mt-2"
                >
                  Thanks! You're on the list.
                </p>
              )}
            </form>
          </div>

          {/* LINKS */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {sections.map((section) => (
              <nav
                key={section.title}
                aria-labelledby={`footer-${section.title.toLowerCase()}`}
              >
                <h3
                  id={`footer-${section.title.toLowerCase()}`}
                  className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4"
                >
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className={`inline-block text-gray-300 text-sm hover:text-white hover:translate-x-0.5 transition-all ${focusRing}`}
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
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} AUTOSELL. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {/* SOCIAL LINKS */}
            <ul className="flex items-center gap-2" aria-label="Social media">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} (opens in new tab)`}
                      className={`w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all ${focusRing}`}
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Divider */}
            <div className="hidden md:block w-px h-5 bg-white/15" aria-hidden="true" />

            {/* BACK TO TOP */}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className={`w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all ${focusRing}`}
            >
              <ArrowUp size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  