
import React, { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  RotateCcw,
  CarFront,
  ChevronDown,
} from "lucide-react";

import CarGrid from "./CarGrid";

const CarCategory = ({ cars = [] }) => {
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    type: "all",
    brand: "all",
    company: "all",
    fuel: "all",
  });

  // Generate unique filter options
  const categories = useMemo(() => {
    const unique = (key) => [
      ...new Set(
        cars.map((car) => car[key]).filter(Boolean)
      ),
    ].sort();

    return {
      types: unique("type"),
      brands: unique("carBrand"),
      companies: unique("company"),
      fuels: unique("fuel"),
    };
  }, [cars]);

  // Filter handler
  const handleFilter = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Search and filter vehicles
  const filteredCars = useMemo(() => {
    const query = search.trim().toLowerCase();

    return cars.filter((car) => {
      const matchesSearch =
        !query ||
        [
          car.carBrand,
          car.company,
          car.type,
          car.fuel,
          car.year,
        ].some((value) =>
          String(value ?? "").toLowerCase().includes(query)
        );

      const matchesType =
        filters.type === "all" || car.type === filters.type;

      const matchesBrand =
        filters.brand === "all" || car.carBrand === filters.brand;

      const matchesCompany =
        filters.company === "all" || car.company === filters.company;

      const matchesFuel =
        filters.fuel === "all" || car.fuel === filters.fuel;

      return (
        matchesSearch &&
        matchesType &&
        matchesBrand &&
        matchesCompany &&
        matchesFuel
      );
    });
  }, [cars, search, filters]);

  // Reset everything
  const resetFilters = () => {
    setSearch("");

    setFilters({
      type: "all",
      brand: "all",
      company: "all",
      fuel: "all",
    });
  };

  const hasActiveFilters =
    search !== "" ||
    Object.values(filters).some((value) => value !== "all");

  // Reusable filter component
  const FilterSelect = ({ label, name, options }) => (
    <div className="relative">
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-gray-500 mb-2"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          value={filters[name]}
          onChange={handleFilter}
          className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 pr-10 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition cursor-pointer"
        >
          <option value="all">All {label}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
    </div>
  );

  return (
    <div className="pb-16">

      {/* PAGE INTRODUCTION */}
      <section className="bg-[#083463] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">

          <div className="max-w-2xl">

            <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
              AUTOSELL Marketplace
            </p>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Find Your Perfect Car
            </h1>

            <p className="text-gray-200 leading-7 text-sm md:text-base">
              Explore our collection of vehicles, compare your options
              and discover a car that matches your needs and budget.
            </p>

          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-10">

        {/* SEARCH AND FILTER PANEL */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 md:p-7 mb-10">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

            <div className="flex items-center gap-3">
              <div className="bg-blue-50 text-blue-600 p-2.5 rounded-lg">
                <SlidersHorizontal size={21} />
              </div>

              <div>
                <h2 className="font-bold text-gray-800">
                  Find Your Vehicle
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Search and filter available cars
                </p>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
              >
                <RotateCcw size={15} />
                Clear filters
              </button>
            )}

          </div>

          {/* SEARCH INPUT */}
          <div className="relative mb-6">

            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by car brand, company, type..."
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition text-sm"
            />

          </div>

          {/* FILTERS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <FilterSelect
              label="Vehicle Type"
              name="type"
              options={categories.types}
            />

            <FilterSelect
              label="Brand"
              name="brand"
              options={categories.brands}
            />

            <FilterSelect
              label="Company"
              name="company"
              options={categories.companies}
            />

            <FilterSelect
              label="Fuel Type"
              name="fuel"
              options={categories.fuels}
            />

          </div>

        </div>

        {/* RESULTS HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">

          <div>
            <h2 className="text-2xl font-bold text-[#083463]">
              Available Vehicles
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Discover vehicles that match your preferences.
            </p>
          </div>

          <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">
            {filteredCars.length} {filteredCars.length === 1 ? "Vehicle" : "Vehicles"}
          </div>

        </div>

        {/* VEHICLE GRID */}
        {filteredCars.length > 0 ? (

          <CarGrid cars={filteredCars} />

        ) : (

          <div className="bg-white border border-gray-200 rounded-xl py-16 px-6 text-center">

            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <CarFront size={30} className="text-gray-400" />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No vehicles found
            </h3>

            <p className="text-gray-500 text-sm mb-6">
              Try changing your search or filter options.
            </p>

            <button
              onClick={resetFilters}
              className="bg-[#083463] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-800 transition"
            >
              Reset Filters
            </button>

          </div>

        )}

      </section>

    </div>
  );
};

export default CarCategory;
