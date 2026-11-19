import React from "react";
import { photo } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Swiping = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        grabCursor={true}
        spaceBetween={16}
        // Responsive slides per view
        breakpoints={{
          0:    { slidesPerView: 1,   spaceBetween: 12 },
          480:  { slidesPerView: 1,   spaceBetween: 16 },
          640:  { slidesPerView: 2,   spaceBetween: 16 },
          1024: { slidesPerView: 3,   spaceBetween: 20 },
          1280: { slidesPerView: 4,   spaceBetween: 20 },
        }}
        className="w-full rounded-xl pb-10"
      >
        {photo.map((p, index) => (
          <SwiperSlide key={index}>
            <div className="w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
              <img
                src={p}
                alt={`Photo ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiping;