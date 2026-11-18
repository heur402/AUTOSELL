import React, { useState, useRef, useEffect } from "react";
import { CarTaxiFront, Menu, X } from "lucide-react";
import { RxAvatar } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  useEffect(() => {
    setIsVisible(false);
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-xl flex items-center justify-between px-4 md:px-8 py-3">
      
      
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Link to="/">
            <CarTaxiFront color="blue" size={30} className="cursor-pointer" />
          </Link>
          <span className="hidden md:block text-black text-2xl">AUTOSELL</span>
        </div>

        <div className="text-black md:ml-5 ml-2 mr-2">
          <SearchBar />
        </div>
      </div>

      
      <div className="w-18 h-9 border-2 rounded-full p-2 flex items-center space-x-3 border-gray-500">
        <div className="w-6 h-6 rounded-full flex justify-center items-center cursor-pointer">
          <RxAvatar color="black" size={180} />
        </div>

        <button
          onClick={() => setIsVisible((prev) => !prev)}
          className="cursor-pointer"
        >
          {isVisible ? <X color="blue" size={18} /> : <Menu color="blue" size={18} />}
        </button>
      </div>

      
      {isVisible && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-40 w-40 bg-black text-white rounded-md shadow-lg p-4 z-50"
        >
          <div className="flex flex-col space-y-2">
            <Link to="/" className="font-medium">
              Home
            </Link>
            <Link to="/about" className="font-medium">
              About Us
            </Link>
            <Link to="/product" className="font-medium">
              Product
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
