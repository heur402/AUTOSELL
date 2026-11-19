
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import {
  CalendarDays,
  Fuel,
  CarFront,
  ShoppingCart,
  ArrowUpRight,
  Eye,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const CarCard = ({ car, onAddToCart }) => {
  const images = Array.isArray(car.images)
    ? car.images.filter(Boolean)
    : [];

  const price = Number(car.price);

  const formattedPrice = Number.isFinite(price)
    ? price.toLocaleString()
    : car.price;

  // Use the car ID for the details route
  const carId = car.id ?? car._id;

  return (
    <article className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden bg-gray-100">

        {images.length > 0 ? (
          <Swiper
            modules={[Pagination, A11y]}
            slidesPerView={1}
            loop={images.length > 1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="car-card-swiper w-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="h-56 overflow-hidden">
                  <img
                    src={img}
                    alt={`${car.carBrand || "Car"} image ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.visibility = "hidden";
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="h-56 flex items-center justify-center">
            <CarFront size={48} className="text-gray-300" />
          </div>
        )}

        {/* CAR TYPE */}
        <span className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm text-[#083463] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
          {car.type || "Vehicle"}
        </span>

        {/* IMAGE COUNT */}
        {images.length > 1 && (
          <span className="absolute top-4 right-4 z-10 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
            {images.length} Photos
          </span>
        )}

      </div>

      {/* CARD INFORMATION */}
      <div className="p-5">

        {/* BRAND AND SELLER */}
        <div className="flex justify-between items-start gap-3 mb-5">

          <div className="min-w-0">
            <h2 className="text-xl font-bold text-gray-900 truncate">
              {car.carBrand || "Unknown Brand"}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {car.company || "Seller"}
            </p>
          </div>

          <div className="bg-blue-50 text-blue-600 p-2 rounded-lg shrink-0">
            <ArrowUpRight size={20} />
          </div>

        </div>

        {/* SPECIFICATIONS */}
        <div className="grid grid-cols-3 gap-2 border-y border-gray-100 py-4">

          <div className="flex flex-col items-center gap-2">
            <CalendarDays size={19} className="text-blue-600" />

            <span className="text-xs text-gray-400">Year</span>

            <span className="text-sm font-semibold text-gray-800">
              {car.year || "N/A"}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 border-x border-gray-100">
            <Fuel size={19} className="text-blue-600" />

            <span className="text-xs text-gray-400">Fuel</span>

            <span className="text-sm font-semibold text-gray-800">
              {car.fuel || "N/A"}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <CarFront size={19} className="text-blue-600" />

            <span className="text-xs text-gray-400">Type</span>

            <span className="text-sm font-semibold text-gray-800 truncate max-w-full">
              {car.type || "N/A"}
            </span>
          </div>

        </div>

        {/* PRICE */}
        <div className="mt-5 mb-5">

          <p className="text-xs text-gray-400 mb-1">
            Asking Price
          </p>

          <h3 className="text-2xl font-bold text-[#083463]">
            ${formattedPrice}
          </h3>

        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-2 gap-3">

          {/* VIEW DETAILS */}
          {carId != null ? (
            <Link
              to={`/product/${carId}`}
              className="flex items-center justify-center gap-2 border border-[#083463] text-[#083463] hover:bg-blue-50 py-3 rounded-xl text-sm font-semibold transition"
            >
              <Eye size={17} />
              Details
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="flex items-center justify-center gap-2 border border-gray-200 text-gray-400 py-3 rounded-xl text-sm font-semibold cursor-not-allowed"
            >
              <Eye size={17} />
              Details
            </button>
          )}

          {/* ADD TO CART */}
          <button
            type="button"
            onClick={() => onAddToCart?.(car)}
            className="flex items-center justify-center gap-2 bg-[#083463] hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-semibold transition"
          >
            <ShoppingCart size={17} />
            Add to Cart
          </button>

        </div>

      </div>

    </article>
  );
};

export default CarCard;
