
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CarFront,
  Users,
  Tags,
  Settings,
  LogOut,
  CarTaxiFront,
  X,
} from "lucide-react";

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

const AdminSidebar = ({ mobileOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onClose?.();
    navigate("/admin/login");
  };

  const renderSidebarContent = (mobile = false) => (
    <div className="flex h-full flex-col">
      {/* LOGO */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-6 lg:px-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white p-2.5 text-[#083463] shadow-sm">
            <CarTaxiFront size={23} />
          </div>

          <div className={mobile ? "block" : "hidden lg:block"}>
            <h1 className="text-xl font-bold tracking-wide">AUTOSELL</h1>
            <p className="text-xs text-blue-200">Admin Panel</p>
          </div>
        </div>

        {mobile && (
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="rounded-lg p-2 text-blue-100 transition hover:bg-white/10"
          >
            <X size={22} />
          </button>
        )}
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 space-y-2 px-3 py-7">
        <p
          className={`mb-4 px-3 text-[11px] font-semibold uppercase tracking-[2px] text-blue-300 ${
            mobile ? "block" : "hidden lg:block"
          }`}
        >
          Main Menu
        </p>

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              title={item.name}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-3 py-3.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#083463] shadow-lg shadow-black/10"
                    : "text-blue-100 hover:bg-white/10 hover:text-white"
                } ${mobile ? "" : "justify-center lg:justify-start lg:px-4"}`
              }
            >
              <Icon size={20} className="shrink-0" />

              <span className={mobile ? "block" : "hidden lg:block"}>
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* ADMIN PROFILE / LOGOUT */}
      <div className="border-t border-white/10 p-3">
        <div
          className={`mb-3 items-center gap-3 rounded-xl bg-white/5 p-3 ${
            mobile ? "flex" : "hidden lg:flex"
          }`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-200 font-bold text-[#083463]">
            A
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Administrator</p>
            <p className="text-xs text-blue-200">Admin account</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          title="Logout"
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-blue-100 transition hover:bg-red-500 hover:text-white ${
            mobile ? "" : "justify-center lg:justify-start lg:px-4"
          }`}
        >
          <LogOut size={20} />
          <span className={mobile ? "block" : "hidden lg:block"}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* DESKTOP AND TABLET SIDEBAR */}
      <aside className="sticky top-0 hidden h-screen w-20 shrink-0 flex-col bg-[#083463] text-white md:flex lg:w-64">
        {renderSidebarContent()}
      </aside>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <button
            aria-label="Close navigation menu"
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
          />

          {/* Drawer */}
          <aside className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-[#083463] text-white shadow-2xl">
            {renderSidebarContent(true)}
          </aside>
        </div>
      )}
    </>
  );
};

export default AdminSidebar;
