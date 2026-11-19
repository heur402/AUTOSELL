
import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
  EffectFade,
  A11y,
} from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { photo } from "../assets/assets";

const Swiping = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Normalize images
  const images = useMemo(() => {
    if (Array.isArray(photo)) {
      return photo.filter(Boolean);
    }

    if (typeof photo === "string") {
      return photo ? [photo] : [];
    }

    if (photo && typeof photo === "object") {
      return Object.values(photo).filter(Boolean);
    }

    return [];
  }, []);

  const hasMultipleImages = images.length > 1;

  // Empty state
  if (!images.length) {
    return (
      <div className="w-full h-[280px] md:h-[400px] rounded-2xl bg-gray-100 flex flex-col items-center justify-center gap-3">
        <div className="text-gray-400 text-4xl">🚗</div>

        <p className="text-gray-500 text-sm">
          No photos available
        </p>
      </div>
    );
  }

  return (
    <div className="w-full relative group">

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, A11y]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={0}
        loop={hasMultipleImages}
        grabCursor={hasMultipleImages}
        autoplay={
          hasMultipleImages
            ? {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        pagination={
          hasMultipleImages
            ? {
                clickable: true,
                dynamicBullets: true,
              }
            : false
        }
        className="autosell-swiper w-full overflow-hidden rounded-2xl shadow-lg"
      >

        {images.map((src, index) => (
          <SwiperSlide key={index}>

            <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[420px] overflow-hidden bg-gray-100">

              {/* IMAGE */}
              <img
                src={src}
                alt={`AUTOSELL vehicle showcase ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable="false"
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                }}
                className="w-full h-full object-cover"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* IMAGE LABEL */}
              <div className="absolute bottom-8 left-5 md:left-8 text-white pointer-events-none">

                <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-blue-200 mb-2">
                  AUTOSELL
                </p>

                <h3 className="text-xl md:text-2xl font-bold">
                  Discover Your Next Car
                </h3>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      {/* NAVIGATION BUTTONS */}
      {hasMultipleImages && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 text-gray-800 flex items-center justify-center shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 text-gray-800 flex items-center justify-center shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* IMAGE COUNTER */}
      {hasMultipleImages && (
        <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
          {activeIndex + 1} / {images.length}
        </div>
      )}

      {/* PAGINATION STYLING */}
      <style>
        {`
          .autosell-swiper .swiper-pagination {
            bottom: 12px !important;
          }

          .autosell-swiper .swiper-pagination-bullet {
            background: white;
            opacity: 0.65;
            width: 8px;
            height: 8px;
          }

          .autosell-swiper .swiper-pagination-bullet-active {
            background: #2563eb;
            opacity: 1;
            width: 22px;
            border-radius: 10px;
          }
        `}
      </style>

    </div>
  );
};

export default Swiping;