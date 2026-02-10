import { car } from "../src/assets/assets";
import React from "react";
import CarCard from "./Carcard";

const CarGrid = ({ cars }) => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarGrid;
