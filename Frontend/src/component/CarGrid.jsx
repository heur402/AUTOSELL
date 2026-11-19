
import React from "react";
import CarCard from "./Carcard";

const CarGrid = ({ cars = [], onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

      {cars.map((car, index) => (
        <CarCard
          key={car.id ?? `${car.carBrand}-${index}`}
          car={car}
          onAddToCart={onAddToCart}
        />
      ))}

    </div>
  );
};

export default CarGrid;
