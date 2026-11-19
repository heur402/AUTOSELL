import React from "react";
import { photo } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Swiping = () => {
  // Normalize: accept array, object, or single string
  const images = React.useMemo(() => {
    if (Array.isArray(photo)) return photo;
    if (typeof photo === "string") return [photo];
    if (photo && typeof photo === "object") return Object.values(photo);
    return [];
  }, []);

  if (!images.length) {
    return (
      <div className="w-full aspect-[16/9] rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
        No photos to display
      </div>
    );
  }

  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={images.length > 3}
        grabCursor
        spaceBetween={16}
        breakpoints={{
          0:    { slidesPerView: 1, spaceBetween: 12 },
          640:  { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 20 },
        }}
        className="w-full rounded-xl pb-10"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="!h-auto">
            {/* Fixed-ratio box — this is what guarantees the image has height */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-xl bg-gray-200">
              <img
                src={src}
                alt={`Photo ${index + 1}`}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add(
                    "flex","items-center","justify-center"
                  );
                }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiping;