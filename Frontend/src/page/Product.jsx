
import React from "react";
import { car } from "../assets/assets";
import CarCategory from "../component/CarCategory";

const Product = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      <CarCategory cars={car} />
    </main>
  );
};

export default Product;
