// src/components/CarCard.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CarCard = ({ car }) => {
  const swiperRef = useRef(null);

  const handleEnter = () => {
    // start autoplay when user hovers
    if (swiperRef.current && swiperRef.current.autoplay) {
      // ensure autoplay params exist then start
      swiperRef.current.params.autoplay = {
        delay: 2000, // 2s, change as needed
        disableOnInteraction: false,
      };
      swiperRef.current.autoplay.start();
    }
  };

  const handleLeave = () => {
    // stop autoplay when mouse leaves
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  return (
    <div
      className="opacity-100 rounded-xl shadow-md p-4 hover:shadow-lg transition"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={1}
        slidesPerView={1}
        loop={true}
        autoplay={false} 
        modules={[Autoplay]}
        observer={true}
        observeParents={true}
        className="border-2 border-black rounded-lg"
      >
        {car.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              className="w-full h-40 object-cover cursor-pointer rounded-lg"
              alt={`${car.carBrand}-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="border-2 border-black mt-1 rounded-lg p-1">
        <h2 className="mt-3 text-xl font-semibold">{car.carBrand}</h2>
        <p className="text-gray-500 text-sm">{car.company}</p>

        <div className="mt-2 flex justify-between text-sm">
          <span className="font-semibold">Year: {car.year}</span>
          <span className="font-semibold">Fuel: {car.fuel}</span>
        </div>

        <p className="mt-3 text-lg font-bold text-[#083463]">
          ${car.price.toLocaleString()}
        </p>
      </div>

      <button
        className="mt-4 w-full bg-[#083463] text-white py-2 rounded-lg hover:bg-blue-900 transition"
      >
        Add to cart
      </button>


    </div>
  );
};

export default CarCard;
