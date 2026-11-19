import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
  const location = useLocation();

  const pageTitles = {
    "/admin/dashboard": "Dashboard",
    "/admin/cars": "Manage Cars",
    "/admin/sellers": "Manage Sellers",
    "/admin/categories": "Categories",
    "/admin/settings": "Settings",
  };

  const title = pageTitles[location.pathname] || "Admin Panel";

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />

      <div className="flex-1 min-w-0">
        <AdminNavbar title={title} />

        <main className="p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;