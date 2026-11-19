
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CarFront,
  Users,
  Tags,
  Settings,
  LogOut,
  Store,
} from "lucide-react";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Manage Cars",
      path: "/admin/cars",
      icon: CarFront,
    },
    {
      name: "Manage Sellers",
      path: "/admin/sellers",
      icon: Users,
    },
    {
      name: "Categories",
      path: "/admin/categories",
      icon: Tags,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    // Temporary frontend logout
    navigate("/admin/login");
  };

  return (
    <aside className="w-64 min-h-screen bg-[#083463] text-white flex flex-col">

      {/* LOGO */}
      <div className="px-6 py-7 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-white text-[#083463] p-2 rounded-lg">
            <Store size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold">AUTOSELL</h1>
            <p className="text-xs text-blue-200">
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <p className="text-xs uppercase tracking-wider text-blue-200 px-3 mb-4">
          Main Menu
        </p>

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? "bg-white text-[#083463] shadow-md"
                    : "text-blue-100 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={19} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm text-blue-100 hover:bg-red-500 hover:text-white transition"
        >
          <LogOut size={19} />
          Logout
        </button>
      </div>

    </aside>
  );
};

export default AdminSidebar;
