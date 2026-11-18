
import React, { useState, useRef, useEffect } from "react";
import {
  CarTaxiFront,
  Menu,
  X,
  UserRound,
  ChevronDown,
  Home,
  Info,
  ShoppingBag,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About Us", path: "/about", icon: Info },
    { name: "Products", path: "/product", icon: ShoppingBag },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu when navigating
  useEffect(() => {
    setIsVisible(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">

      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-6">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-md shadow-blue-200 group-hover:bg-blue-700 transition">
            <CarTaxiFront size={27} strokeWidth={2.2} />
          </div>

          <div>
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900">
              AUTO<span className="text-blue-600">SELL</span>
            </h1>
            <p className="text-[9px] text-gray-400 tracking-[2px] font-semibold">
              DRIVE YOUR DREAM
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors relative py-2 ${
                  active
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}

                {active && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* SEARCH BAR */}
        <div className="hidden sm:flex flex-1 max-w-md">
          <div className="w-full">
            <SearchBar />
          </div>
        </div>

        {/* PROFILE AND MENU */}
        <div className="relative shrink-0" ref={menuRef}>

          <button
            onClick={() => setIsVisible((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isVisible}
            className={`flex items-center gap-2 p-1.5 pr-3 rounded-full border transition-all ${
              isVisible
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-blue-400 hover:bg-gray-50"
            }`}
          >
            <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <UserRound size={21} />
            </div>

            <span className="hidden md:block text-sm font-semibold text-gray-700">
              Menu
            </span>

            {isVisible ? (
              <X size={18} className="text-blue-600" />
            ) : (
              <ChevronDown size={18} className="text-gray-500" />
            )}
          </button>

          {/* DROPDOWN MENU */}
          {isVisible && (
            <div className="absolute right-0 top-14 w-56 bg-white rounded-2xl border border-gray-100 shadow-xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">

              <div className="px-3 py-3 border-b border-gray-100 mb-2">
                <p className="font-bold text-gray-800">Welcome to AUTOSELL</p>
                <p className="text-xs text-gray-400 mt-1">
                  Explore our marketplace
                </p>
              </div>

              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition ${
                      active
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    <Icon size={18} />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

      </nav>

      {/* MOBILE SEARCH */}
      <div className="sm:hidden px-4 pb-3">
        <SearchBar />
      </div>

    </header>
  );
};

export default NavBar;
