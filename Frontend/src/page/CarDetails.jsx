
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { car } from "../assets/assets";

import {
  ArrowLeft,
  CalendarDays,
  Fuel,
  CarFront,
  Building2,
  ShoppingCart,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const CarDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Find selected vehicle
  const vehicle = car.find(
    (item) => String(item.id) === String(id)
  );

  // Vehicle not found
  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-50">

        <CarFront size={60} className="text-gray-300 mb-5" />

        <h2 className="text-2xl font-bold text-[#083463] mb-3">
          Vehicle Not Found
        </h2>

        <p className="text-gray-500 mb-6 text-center">
          Sorry, the vehicle you are looking for does not exist.
        </p>

        <Link
          to="/product"
          className="bg-[#083463] text-white px-6 py-3 rounded-lg"
        >
          Back to Products
        </Link>

      </div>
    );
  }

  const images = Array.isArray(vehicle.images)
    ? vehicle.images.filter(Boolean)
    : [];

  const specifications = [
    {
      label: "Brand",
      value: vehicle.carBrand,
      icon: CarFront,
    },
    {
      label: "Year",
      value: vehicle.year,
      icon: CalendarDays,
    },
    {
      label: "Fuel Type",
      value: vehicle.fuel,
      icon: Fuel,
    },
    {
      label: "Vehicle Type",
      value: vehicle.type,
      icon: CarFront,
    },
    {
      label: "Seller",
      value: vehicle.company,
      icon: Building2,
    },
  ];

  const price = Number(vehicle.price);

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">

          <Link
            to="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <ChevronRight size={15} />

          <Link
            to="/product"
            className="hover:text-blue-600"
          >
            Products
          </Link>

          <ChevronRight size={15} />

          <span className="text-[#083463] font-medium truncate">
            {vehicle.carBrand}
          </span>

        </div>

        {/* BACK BUTTON */}
        <Link
          to="/product"
          className="inline-flex items-center gap-2 text-[#083463] font-semibold text-sm mb-6 hover:text-blue-600 transition"
        >
          <ArrowLeft size={18} />
          Back to Vehicles
        </Link>

        {/* MAIN DETAILS */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* IMAGE GALLERY */}
          <div className="bg-white rounded-2xl p-3 sm:p-5 border border-gray-100 shadow-sm">

            {images.length > 0 ? (
              <>
                <Swiper
                  modules={[Thumbs, Navigation]}
                  navigation={images.length > 1}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  spaceBetween={10}
                  className="car-details-main rounded-xl overflow-hidden"
                >

                  {images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="h-[280px] sm:h-[400px] bg-gray-100 rounded-xl overflow-hidden">

                        <img
                          src={img}
                          alt={`${vehicle.carBrand} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />

                      </div>
                    </SwiperSlide>
                  ))}

                </Swiper>

                {images.length > 1 && (
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    modules={[Thumbs, FreeMode]}
                    freeMode
                    watchSlidesProgress
                    spaceBetween={12}
                    slidesPerView={Math.min(images.length, 4)}
                    className="mt-4"
                  >

                    {images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div className="h-20 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500 transition">
                          <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}

                  </Swiper>
                )}
              </>
            ) : (
              <div className="h-[350px] flex items-center justify-center bg-gray-100 rounded-xl">
                <CarFront size={60} className="text-gray-300" />
              </div>
            )}

          </div>

          {/* VEHICLE INFORMATION */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">

            <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
              {vehicle.type || "Vehicle"}
            </span>

            <p className="text-sm text-gray-500 mb-2">
              {vehicle.company}
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#083463] mb-5">
              {vehicle.carBrand}
            </h1>

            {/* PRICE */}
            <div className="border-y border-gray-100 py-6 mb-6">

              <p className="text-sm text-gray-500 mb-2">
                Vehicle Price
              </p>

              <h2 className="text-3xl font-bold text-[#083463]">
                {Number.isFinite(price)
                  ? `$${price.toLocaleString()}`
                  : vehicle.price}
              </h2>

            </div>

            {/* SHORT DESCRIPTION */}
            <div className="mb-7">

              <h3 className="text-lg font-bold text-gray-800 mb-3">
                About This Vehicle
              </h3>

              <p className="text-gray-600 leading-7 text-sm">
                {vehicle.description ||
                  `Explore this ${vehicle.year || ""} ${vehicle.carBrand || "vehicle"} offered by ${vehicle.company || "the seller"}. Contact the seller for additional information about its condition and availability.`}
              </p>

            </div>

            {/* AVAILABILITY */}
            <div className="flex items-center gap-2 text-green-600 mb-7">
              <CheckCircle2 size={19} />
              <span className="text-sm font-medium">
                Listed on AUTOSELL
              </span>
            </div>

            {/* ACTION BUTTON */}
            <button
              type="button"
              onClick={() => onAddToCart?.(vehicle)}
              className="w-full bg-[#083463] hover:bg-blue-700 text-white flex items-center justify-center gap-3 py-4 rounded-xl font-semibold transition"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
              Vehicle information is provided by the seller.
            </p>

          </div>

        </div>

        {/* SPECIFICATIONS */}
        <section className="mt-14">

          <div className="mb-8">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Vehicle information
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#083463]">
              Vehicle Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {specifications.map((spec) => {
              const Icon = spec.icon;

              return (
                <div
                  key={spec.label}
                  className="bg-white border border-gray-100 rounded-xl p-6 flex items-center gap-4"
                >

                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <Icon size={23} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      {spec.label}
                    </p>

                    <p className="font-semibold text-gray-800">
                      {spec.value || "Not provided"}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </section>

      </div>

    </main>
  );
};

export default CarDetails;
