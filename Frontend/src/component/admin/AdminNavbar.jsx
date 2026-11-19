
import React from "react";
import { Bell, Search, UserCircle } from "lucide-react";

const AdminNavbar = ({ title }) => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 px-6 md:px-8 flex items-center justify-between">

      <div>
        <h2 className="text-xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-sm text-gray-500">
          Welcome to AUTOSELL administration
        </p>
      </div>

      <div className="flex items-center gap-5">

        <button className="text-gray-500 hover:text-[#083463]">
          <Search size={21} />
        </button>

        <button className="relative text-gray-500 hover:text-[#083463]">
          <Bell size={21} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2">
          <UserCircle size={35} className="text-[#083463]" />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Administrator
            </p>
            <p className="text-xs text-gray-500">
              Admin
            </p>
          </div>
        </div>

      </div>
    </header>
  );
};

export default AdminNavbar;
