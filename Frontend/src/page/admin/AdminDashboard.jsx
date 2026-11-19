
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CarFront,
  Users,
  Tags,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";

import { car } from "../../assets/assets";
import StatCard from "../../component/admin/StatCard";
import CarTable from "../../component/admin/CarTable";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Temporary dashboard statistics
  const totalCars = car?.length || 0;

  const totalSellers = [
    ...new Set(car.map((item) => item.company).filter(Boolean)),
  ].length;

  const totalCategories = [
    ...new Set(car.map((item) => item.type).filter(Boolean)),
  ].length;

  const recentCars = [...(car || [])].slice(-5).reverse();

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard Overview
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Monitor and manage your AUTOSELL marketplace.
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center gap-2 bg-[#083463] hover:bg-blue-800 text-white px-5 py-3 rounded-xl text-sm font-semibold transition"
        >
          View Website
          <ArrowUpRight size={18} />
        </button>
      </div>

      {/* STATISTICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          title="Total Cars"
          value={totalCars}
          icon={CarFront}
          description="Vehicles in current sample data"
        />

        <StatCard
          title="Total Sellers"
          value={totalSellers}
          icon={Users}
          description="Unique sellers in car listings"
        />

        <StatCard
          title="Categories"
          value={totalCategories}
          icon={Tags}
          description="Vehicle categories"
        />

        <StatCard
          title="Total Revenue"
          value="N/A"
          icon={DollarSign}
          description="Not available yet"
        />

      </div>

      {/* RECENT LISTINGS */}
      <div className="space-y-4">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Recent Car Listings
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Latest vehicles in your marketplace.
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/cars")}
            className="text-sm font-semibold text-[#083463] hover:underline"
          >
            View All
          </button>
        </div>

        <CarTable
          cars={recentCars}
          onView={(selectedCar) => {
            const id = selectedCar.id ?? selectedCar._id;
            if (id != null) navigate(`/product/${id}`);
          }}
        />

      </div>

    </div>
  );
};

export default AdminDashboard;