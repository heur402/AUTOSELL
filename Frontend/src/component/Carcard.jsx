
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import {
  CarFront,
  ShoppingCart,
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

  const carId = car.id ?? car._id;

  return (
    <article className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* CLICKABLE CARD CONTENT */}
      <Link
        to={carId != null ? `/product/${carId}` : "#"}
        onClick={(e) => {
          if (carId == null) e.preventDefault();
        }}
        className="block cursor-pointer"
      >
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
          <div className="min-w-0 mb-5">
            <h2 className="text-xl font-bold text-gray-900 truncate group-hover:text-[#083463] transition-colors">
              {car.carBrand || "Unknown Brand"}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {car.company || "Seller"}
            </p>
          </div>

          {/* PRICE */}
          <div className="mt-5">
            <p className="text-xs text-gray-400 mb-1">
              Asking Price
            </p>

            <h3 className="text-2xl font-bold text-[#083463]">
              ${formattedPrice}
            </h3>
          </div>

        </div>
      </Link>

      {/* ADD TO CART */}
      <div className="px-5 pb-5">
        <button
          type="button"
          onClick={() => onAddToCart?.(car)}
          className="w-full flex items-center justify-center gap-2 bg-[#083463] hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-semibold transition"
        >
          <ShoppingCart size={17} />
          Add to Cart
        </button>
      </div>

    </article>
  );
};

export default CarCard;