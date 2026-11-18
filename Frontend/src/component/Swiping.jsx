import React from 'react'
import { photo } from '../assets/assets';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Swiping = () => {
  return (
    <div className="w-full h-full rounded-xl">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        className="w-full h-full rounded-xl"  
      >
        {photo.map((p, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              src={p}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiping;
