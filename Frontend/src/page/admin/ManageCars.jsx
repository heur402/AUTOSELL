
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus, SlidersHorizontal } from "lucide-react";

import { car } from "../../assets/assets";
import CarTable from "../../component/admin/CarTable";

const ManageCars = () => {
  const navigate = useNavigate();

  const [cars, setCars] = useState(car || []);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(cars.map((item) => item.type).filter(Boolean)),
  ];

  const filteredCars = useMemo(() => {
    return cars.filter((item) => {
      const searchMatch = [
        item.carBrand,
        item.company,
        item.type,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      const categoryMatch =
        selectedCategory === "All" ||
        item.type === selectedCategory;

      return searchMatch && categoryMatch;
    });
  }, [cars, search, selectedCategory]);

  const handleDelete = (selectedCar) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${selectedCar.carBrand}?`
    );

    if (!confirmed) return;

    setCars((previousCars) =>
      previousCars.filter(
        (item) =>
          (item.id ?? item._id) !==
          (selectedCar.id ?? selectedCar._id)
      )
    );
  };

  const handleEdit = (selectedCar) => {
    // We'll implement the edit form next.
    console.log("Selected car for editing:", selectedCar);
  };

  const handleView = (selectedCar) => {
    const id = selectedCar.id ?? selectedCar._id;

    if (id != null) {
      navigate(`/product/${id}`);
    }
  };

  return (
    <div className="space-y-6">

      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Manage Cars
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            View and manage all vehicle listings on AUTOSELL.
          </p>
        </div>

        <button
          type="button"
          onClick={() => console.log("Add car form coming next")}
          className="flex items-center justify-center gap-2 bg-[#083463] hover:bg-blue-800 text-white px-5 py-3 rounded-xl text-sm font-semibold transition"
        >
          <Plus size={18} />
          Add New Car
        </button>

      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <p className="text-sm text-gray-500">Total Listings</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            {cars.length}
          </h2>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <p className="text-sm text-gray-500">Categories</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            {categories.length - 1}
          </h2>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <p className="text-sm text-gray-500">Search Results</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">
            {filteredCars.length}
          </h2>
        </div>

      </div>

      {/* SEARCH AND FILTERS */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5">

        <div className="flex flex-col md:flex-row gap-4">

          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by brand, seller or category..."
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#083463]"
            />
          </div>

          <div className="relative md:w-52">
            <SlidersHorizontal
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#083463] bg-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

        </div>

      </div>

      {/* CAR TABLE */}
      <CarTable
        cars={filteredCars}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />

    </div>
  );
};

export default ManageCars;
