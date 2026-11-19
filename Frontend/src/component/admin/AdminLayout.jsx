
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const pageTitles = {
    "/admin/dashboard": "Dashboard",
    "/admin/cars": "Manage Cars",
    "/admin/sellers": "Manage Sellers",
    "/admin/categories": "Categories",
    "/admin/settings": "Settings",
  };

  const title = pageTitles[location.pathname] || "Admin Panel";

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <AdminSidebar
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />

        {/* MAIN CONTENT */}
        <div className="min-w-0 flex-1">

          {/* NAVBAR */}
          <AdminNavbar
            title={title}
            onMenuClick={() => setMobileOpen(true)}
          />

          {/* PAGE CONTENT */}
          <main className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>

        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
