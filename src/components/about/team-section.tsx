"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function TeamSection() {
  const teamMembers = [
    { id: 1, name: "Name", position: "Position" },
    { id: 2, name: "Name", position: "Position" },
    { id: 3, name: "Name", position: "Position" },
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-lato font-bold mb-4">
          Meet the Minds Behind Edusight
        </h2>
        <p className="max-w-3xl mx-auto font-ibm-plex-sans text-gray-600">
          A passionate team of educators, innovators, and technologists working
          together to shape the future of education through AI.
        </p>
      </div>

      {mounted && isMobile ? (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="team-swiper"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="flex flex-col items-center mb-8">
                <div className="relative rounded-[24px] overflow-hidden">
                  <Image
                    src="/images/business_person.png"
                    alt={member.name}
                    width={312}
                    height={349}
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-left mt-4">
                  <h3 className="mt-4 font-semibold text-xl">{member.name}</h3>
                  <p className="text-gray-500">{member.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col">
              <div className="relative rounded-[24px] overflow-hidden">
                <Image
                  src="/images/business_person.png"
                  alt={member.name}
                  width={312}
                  height={349}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-left mt-4">
                <h3 className="mt-4 font-semibold text-xl">{member.name}</h3>
                <p className="text-gray-500">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
