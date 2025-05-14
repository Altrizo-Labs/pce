"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image"; // Import Image component
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowLeft, ArrowRight } from "lucide-react";

// Define a type for the testimonial data
interface TestimonialData {
  id: number;
  name: string;
  affiliation: string; // Changed from school to affiliation
  quote: string;
  imageUrl?: string; // Optional image URL for avatar
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Client Name",
    affiliation: "Company/Project (Placeholder)",
    quote:
      "PCE provided exceptional Quantity Surveying services that were crucial to the success of our project. Their expertise and attention to detail were invaluable.",
    imageUrl: "", // Placeholder
  },
  {
    id: 2,
    name: "Client Name",
    affiliation: "Company/Project (Placeholder)",
    quote:
      "The cost engineering solutions from PCE helped us optimize our budget and ensure financial control throughout the construction phase.",
    imageUrl: "", // Placeholder
  },
  {
    id: 3,
    name: "Client Name",
    affiliation: "Company/Project (Placeholder)",
    quote:
      "We were impressed with PCE's professionalism and adherence to international standards. They are a reliable partner for complex engineering projects.",
    imageUrl: "", // Placeholder
  },
  {
    id: 4,
    name: "Client Name",
    affiliation: "Company/Project (Placeholder)",
    quote:
      "PCE's team provided excellent contract administration support, ensuring smooth project execution and minimizing disputes.",
    imageUrl: "", // Placeholder
  },
];

export default function Testimonials() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavState = (swiper: SwiperInstance) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="py-10 md:py-16 font-ibm-plex-sans">
      <div className=" mx-auto max-w-7xl w-full px-4 md:px-0">
        <div className="flex justify-between items-center mb-6 md:mb-8">

          <h2 className="text-2xl md:text-[45px] font-lato font-bold text-gray-900 text-left">
            What Our Clients Say
          </h2>
          <div className="md:flex items-center space-x-1 md:space-x-2 hidden">
            <button
              ref={prevRef}
              className={`w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border flex items-center justify-center transition-colors duration-200 ease-in-out ${
                isBeginning
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
              }`}
              disabled={isBeginning}
            >
              <ArrowLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className={`w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-colors duration-200 ease-in-out ${
                isEnd
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-800 text-[#FEDC69] hover:bg-blue-900 hover:text-[#FEDC69]"
              }`}
              disabled={isEnd}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          style={{ paddingTop: "32px" }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
            if (swiper.navigation) {
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
            updateNavState(swiper);
          }}
          onSlideChange={updateNavState}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="pb-10">
              {/* Added lg: prefix to min-w and min-h */}
              <div className="relative bg-[#EDEFF1] p-6 pt-12 rounded-[20px] mx-auto shadow-sm flex flex-col items-center text-center h-full lg:min-w-[379px] lg:min-h-[285px]">
                {/* Avatar */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[67px] h-[67px] bg-[#D9D9D9] rounded-full border-4 border-white overflow-hidden">
                  {testimonial.imageUrl ? (
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex items-center justify-center h-full w-full text-xl font-semibold text-gray-600">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>

                <h3 className="font-lato font-semibold text-xl text-gray-900 mt-2">
                  {testimonial.name}
                </h3>

                <p className="font-ibm-plex-sans font-medium text-base text-gray-500 mb-4">
                  {testimonial.affiliation}
                </p>

                <p className="font-ibm-plex-sans font-normal text-[#535862] text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
