import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="w-full max-w-md">

      
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-xl px-4 py-2 cursor-pointer"
        >
          
          <Search size={20} className="text-gray-500" />
          <span className="text-gray-500">Search car</span>
        </div>
      )}

      
      {isOpen && (
        <div
          className="flex items-center gap-2 rounded-xl px-4 py-1 
                     bg-gray-100 border border-gray-300
                     ring-2 ring-blue-500 transition"
        >
          
          <Search size={20} className="text-blue-500" />
          
          <input
            type="text"
            ref={inputRef}
            placeholder="Search car..."
            className="w-full bg-transparent outline-none"
            onBlur={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
