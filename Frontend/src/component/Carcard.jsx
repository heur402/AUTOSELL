
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import {
  CalendarDays,
  Fuel,
  CarFront,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const CarCard = ({ car, onAddToCart }) => {
  const images = Array.isArray(car.images)
    ? car.images.filter(Boolean)
    : [];

  const formattedPrice = Number.isFinite(Number(car.price))
    ? Number(car.price).toLocaleString()
    : car.price;

  return (
    <article className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* IMAGE SLIDER */}
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
                <div className="h-52 overflow-hidden">

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

          <div className="h-52 flex items-center justify-center">
            <CarFront size={45} className="text-gray-300" />
          </div>

        )}

        {/* BRAND BADGE */}
        <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-sm text-[#083463] text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
          {car.carBrand || "Vehicle"}
        </div>

      </div>

      {/* CAR INFORMATION */}
      <div className="p-5">

        <div className="mb-4">

          <div className="flex items-center justify-between gap-2">

            <h3 className="text-lg font-bold text-gray-900 truncate">
              {car.carBrand || "Unknown Brand"}
            </h3>

            <ArrowUpRight
              size={19}
              className="text-gray-400 group-hover:text-blue-600 transition shrink-0"
            />

          </div>

          <p className="text-sm text-gray-500 mt-1">
            {car.company || "Seller"}
          </p>

        </div>

        {/* SPECIFICATIONS */}
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-gray-100">

          <div className="flex flex-col items-center text-center gap-1">
            <CalendarDays size={17} className="text-blue-600" />

            <span className="text-xs text-gray-500">
              Year
            </span>

            <span className="text-sm font-semibold text-gray-800">
              {car.year || "N/A"}
            </span>
          </div>

          <div className="flex flex-col items-center text-center gap-1">
            <Fuel size={17} className="text-blue-600" />

            <span className="text-xs text-gray-500">
              Fuel
            </span>

            <span className="text-sm font-semibold text-gray-800">
              {car.fuel || "N/A"}
            </span>
          </div>

          <div className="flex flex-col items-center text-center gap-1">
            <CarFront size={17} className="text-blue-600" />

            <span className="text-xs text-gray-500">
              Type
            </span>

            <span className="text-sm font-semibold text-gray-800 truncate max-w-full">
              {car.type || "N/A"}
            </span>
          </div>

        </div>

        {/* PRICE */}
        <div className="mt-4 mb-5">

          <p className="text-xs text-gray-500 mb-1">
            Price
          </p>

          <h4 className="text-2xl font-bold text-[#083463]">
            ${formattedPrice}
          </h4>

        </div>

        {/* ADD TO CART */}
        <button
          type="button"
          onClick={() => onAddToCart?.(car)}
          className="w-full flex items-center justify-center gap-2 bg-[#083463] hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-semibold transition-colors duration-300"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>

      </div>

    </article>
  );
};

export default CarCard;
