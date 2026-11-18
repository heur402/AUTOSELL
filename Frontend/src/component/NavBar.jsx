import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  CarTaxiFront,
  X,
  UserRound,
  ChevronDown,
  Home,
  Info,
  ShoppingBag,
  Search,
  LogIn,
  UserPlus,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const NAV_LINKS = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Products", path: "/product", icon: ShoppingBag },
];

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const searchButtonRef = useRef(null);
  const searchPanelRef = useRef(null);
  const location = useLocation();

  const isActive = useCallback(
    (path) =>
      path === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(path),
    [location.pathname]
  );

  // --- Mutually exclusive toggles -------------------------------------------
  const toggleProfileMenu = () => {
    setIsVisible((prev) => {
      const next = !prev;
      if (next) setShowSearch(false);
      return next;
    });
  };

  // Focus the input *synchronously* on open so mobile browsers
  // treat it as part of the user gesture and show the keyboard.
  const toggleSearch = () => {
    setShowSearch((prev) => {
      const next = !prev;
      if (next) {
        setIsVisible(false);
        // Give React a tick to mount the panel, then focus.
        // requestAnimationFrame runs before paint → still within gesture.
        requestAnimationFrame(() => {
          const input = searchPanelRef.current?.querySelector("input");
          input?.focus();
        });
      }
      return next;
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape closes menus and returns focus to the toggle button
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key !== "Escape") return;
      if (isVisible) {
        setIsVisible(false);
        menuButtonRef.current?.focus();
      }
      if (showSearch) {
        setShowSearch(false);
        searchButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, showSearch]);

  // Close menus when navigating
  useEffect(() => {
    setIsVisible(false);
    setShowSearch(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 sm:backdrop-blur-md border-b border-gray-100 shadow-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary"
        className="max-w-7xl mx-auto px-4 md:px-8 h-16 sm:h-20 flex items-center justify-between gap-4"
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="bg-blue-600 p-2 rounded-xl text-white shadow-md shadow-blue-200 group-hover:bg-blue-700 transition">
            <CarTaxiFront size={26} strokeWidth={2.2} />
          </div>
          <div>
            <span className="block text-xl md:text-2xl font-extrabold tracking-tight text-gray-900">
              AUTO<span className="text-blue-600">SELL</span>
            </span>
            <span className="hidden sm:block text-[10px] text-gray-400 tracking-[1.5px] font-semibold">
              DRIVE YOUR DREAM
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold transition-colors relative py-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  active
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 rounded-full transition-all duration-200 ${
                    active ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* DESKTOP SEARCH */}
        <div className="hidden sm:flex flex-1 max-w-md">
          <div className="w-full">
            <SearchBar />
          </div>
        </div>

        {/* SEARCH + PROFILE MENU */}
        <div className="relative flex items-center gap-2 shrink-0" ref={menuRef}>
          {/* MOBILE SEARCH BUTTON */}
          <button
            ref={searchButtonRef}
            onClick={toggleSearch}
            aria-label={showSearch ? "Close search" : "Open search"}
            aria-expanded={showSearch}
            aria-controls="mobile-search-panel"
            className="sm:hidden w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            {showSearch ? <X size={21} /> : <Search size={21} />}
          </button>

          {/* PROFILE / MENU BUTTON */}
          <button
            ref={menuButtonRef}
            onClick={toggleProfileMenu}
            aria-label={isVisible ? "Close menu" : "Open menu"}
            aria-expanded={isVisible}
            aria-controls="profile-menu"
            aria-haspopup="menu"
            className={`flex items-center gap-2 p-1.5 pr-3 rounded-full border transition-all hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
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
            <div
              id="profile-menu"
              role="menu"
              aria-label="Account and navigation"
              className="absolute right-0 top-full mt-2 w-60 bg-white rounded-2xl border border-gray-100 shadow-xl p-2 animate-in fade-in slide-in-from-top-2 duration-200"
            >
              <div className="px-3 py-3 border-b border-gray-100 mb-2">
                <p className="font-bold text-gray-800">Welcome to AUTOSELL</p>
                <p className="text-xs text-gray-400 mt-1">
                  Explore our marketplace
                </p>
              </div>

              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    role="menuitem"
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
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

              <div className="mt-2 pt-2 border-t border-gray-100">
                <Link
                  to="/login"
                  role="menuitem"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <LogIn size={18} />
                  Sign In
                </Link>
                <Link
                  to="/register"
                  role="menuitem"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <UserPlus size={18} />
                  Create Account
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* MOBILE SEARCH DROPDOWN */}
      {showSearch && (
        <div
          ref={searchPanelRef}
          id="mobile-search-panel"
          className="sm:hidden px-4 pb-4 pt-3 bg-white border-t border-gray-100 shadow-md animate-in fade-in slide-in-from-top-1 duration-150"
        >
          <SearchBar />
        </div>
      )}
    </header>
  );
};

export default NavBar;