import React from "react";
import { car } from "../src/assets/assets";
import CarCategory from "../component/CarCategory";

const Product = () => {
  return <CarCategory cars={car} />;
};

export default Product;
