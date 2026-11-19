
import React from "react";
import {
  Bell,
  Search,
  UserCircle,
  Menu,
} from "lucide-react";

const AdminNavbar = ({ title, onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-gray-100 bg-white px-4 shadow-sm sm:px-6 lg:px-8">

      {/* LEFT SIDE */}
      <div className="flex min-w-0 items-center gap-3">
        {/* Mobile Menu */}
        <button
          onClick={onMenuClick}
          aria-label="Open navigation menu"
          className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 lg:hidden"
        >
          <Menu size={23} />
        </button>

        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-gray-900 sm:text-xl">
            {title}
          </h2>

          <p className="hidden text-xs text-gray-500 sm:block sm:text-sm">
            Welcome to AUTOSELL administration
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="ml-3 flex shrink-0 items-center gap-3 sm:gap-5">

        {/* Search */}
        <button
          aria-label="Search"
          className="hidden rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-[#083463] sm:block"
        >
          <Search size={20} />
        </button>

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="relative rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-[#083463]"
        >
          <Bell size={20} />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
        </button>

        {/* Admin Profile */}
        <div className="flex items-center gap-2 border-l border-gray-100 pl-3 sm:pl-5">
          <UserCircle size={34} className="shrink-0 text-[#083463]" />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Administrator
            </p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;