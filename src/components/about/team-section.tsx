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

// TypeScript interfaces
interface TeamMember {
  id: number;
  name: string;
  position: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    { id: 1, name: "Name", position: "Position" },
    { id: 2, name: "Name", position: "Position" },
    { id: 3, name: "Name", position: "Position" },
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");
  const [mounted, setMounted] = useState<boolean>(false);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-5 md:py-12 px-4 max-w-7xl mx-auto">
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
              <TeamMemberCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </section>
  );
}
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="flex flex-col group relative p-4 transition-all duration-300">
      {/* Image wrapper with hover SVGs */}
      <div className="relative p-4 rounded-[24px] overflow-hidden">
        <Image
          src="/images/business_person.png"
          alt={member.name}
          width={312}
          height={349}
          className="w-full h-auto rounded-[24px]"
        />

        {/* Top left corner */}
        <div className="absolute top-1 left-1 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0"
          >
            <path
              d="M2 38C2 0 20 3 38 2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Top right corner */}
        <div className="absolute top-1 right-1 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0"
          >
            <path
              d="M2 2C19 2 40 0 38 38"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Bottom left corner */}
        <div className="absolute bottom-1 left-1 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0"
          >
            <path
              d="M38 38C19 38 0 30 2 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Bottom right corner */}
        <div className="absolute bottom-1 right-1 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0"
          >
            <path
              d="M38 2C38 19 35 38 2 38"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Text content */}
      <div className="text-center lg:text-left px-4 mt-4 mb-4 lg:mb-0">
        <h3 className="mt-4 font-semibold text-xl">{member.name}</h3>
        <p className="text-gray-500">{member.position}</p>
      </div>
    </div>
  );
};
