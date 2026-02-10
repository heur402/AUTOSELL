import React, { useState, useMemo, useCallback } from "react";
import CarGrid from "./CarGrid";


const CarCategory = ({ cars }) => {
  const [filters, setFilters] = useState({
    type: "type",
    brand: "brand",
    company: "companies",
    fuel: "fuels"
  });

  // Memoize categories generation
  const categories = useMemo(() => ({
    types: ["type", ...new Set(cars.map(car => car.type))],
    brands: ["brand", ...new Set(cars.map(car => car.carBrand))],
    companies: ["companies", ...new Set(cars.map(car => car.company))],
    fuels: ["fuels", ...new Set(cars.map(car => car.fuel))]
  }), [cars]);

  // Memoize filter handler
  const handleFilter = useCallback((e) => {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  // Memoize filtered cars and grouping
  const carsByCompany = useMemo(() => {
    const filteredCars = cars.filter(car => {
      return (
        (filters.type === "type" || car.type === filters.type) &&
        (filters.brand === "brand" || car.carBrand === filters.brand) &&
        (filters.company === "companies" || car.company === filters.company) &&
        (filters.fuel === "fuels" || car.fuel === filters.fuel)
      );
    });

    return filteredCars.reduce((acc, car) => {
      if (!acc[car.company]) acc[car.company] = [];
      acc[car.company].push(car);
      return acc;
    }, {});
  }, [cars, filters]);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 mt-10 md:mt-15">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#083463]">
        Available Cars
      </h1>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <select
          name="type"
          value={filters.type}
          onChange={handleFilter}
          className="p-2 rounded-lg"
        >
          {categories.types.map((t, i) => (
            <option key={i} value={t}>{t.toUpperCase()}</option>
          ))}
        </select>

        <select
          name="brand"
          value={filters.brand}
          onChange={handleFilter}
          className="p-2 rounded-lg"
        >
          {categories.brands.map((b, i) => (
            <option key={i} value={b}>{b}</option>
          ))}
        </select>

        <select
          name="company"
          value={filters.company}
          onChange={handleFilter}
          className="p-2 rounded-lg"
        >
          {categories.companies.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>

        <select
          name="fuel"
          value={filters.fuel}
          onChange={handleFilter}
          className="p-2 rounded-lg"
        >
          {categories.fuels.map((f, i) => (
            <option key={i} value={f}>{f}</option>
          ))}
        </select>
      </div>

      {/* Display cars grouped by company */}
      {Object.keys(carsByCompany).map((company) => (
        <div key={company} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#083463]">
            {company.toUpperCase()}
          </h2>
          <CarGrid cars={carsByCompany[company]} />
        </div>
      ))}
    </div>
  );
};

export default CarCategory;