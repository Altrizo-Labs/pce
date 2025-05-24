"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RippleButton from "../RippleButton";
import { CheckCircle } from "lucide-react";

interface ProjectHighlightsProps {
  limit?: number; // Number of projects to show (if provided)
  showViewMore?: boolean; // Show the View More button
}

const ProjectHighlights: React.FC<ProjectHighlightsProps> = ({
  limit,
  showViewMore,
}) => {
  // Updated project data
  const allProjects = [
    {
      id: 1,
      name: "Armed Forces Hospital, Al Khoudh",
      description:
        "Extension to the existing Armed Forces Hospital by constructing a new building comprising a basement level, a ground floor, 5 additional floors and service compound etc.",
      sector: "Healthcare",
      image: "/images/projects/Arm Force Hospital.avif",
      tag: "Oman",
      client: "Ministry of Defence",
      completionDate: "2019",
    },
    {
      id: 2,
      name: "Cheltenham College, Al Bandar, Muscat",
      description:
        "A premium world-class public institution, providing very best British curriculum educational facilities.",
      sector: "Educational",
      image: "/images/projects/Chelrenham College.avif",
      tag: "Oman",
      client: "Ministry of Defence",
      completionDate: "2022",
    },
    {
      id: 3,
      name: "Downe House School, Al Bandar, Muscat",
      description:
        "First campus outside Europe, a first premium British all-girls school.",
      sector: "Educational",
      image: "/images/projects/Downe House School.avif",
      tag: "Oman",
      client: "Ministry of Defence",
      completionDate: "2020",
    },
    {
      id: 4,
      name: "Four Star Hotel, Nizwa",
      description:
        "Hotel Building (G1 + 5 Floors), Chalets 30 Nos (1, 2 & 3 Bedrooms), Staff Accommodation (G1 + 3 Floors), Ancillary Building.",
      sector: "Hospitality",
      image: "/images/projects/Four Star Hotel.avif",
      tag: "Oman",
      client: "Social Protection Fund",
      completionDate: "2025",
    },
    {
      id: 5,
      name: "Military College, Bait Al Falaj",
      description: "Academy of Strategic and Defence Studies.",
      sector: "Educational",
      image: "/images/projects/Military College.avif",
      tag: "Oman",
      client: "Ministry of Defence",
      completionDate: "2013",
    },
    {
      id: 6,
      name: "Panorama Mall, Al Ghubra",
      description:
        "Exclusive place for shopping and dinining comprising middle to luxury retail brands, F&B, food court outlets, cafes and restaurants.",
      sector: "Commercial",
      image: "/images/projects/Panaroma Mall.avif",
      tag: "Oman",
      client: "Hamat Holding",
      completionDate: "2015",
    },
    {
      id: 7,
      name: "Qurum Mosque",
      description:
        "A gleaming , majestic mosque with vast prayer halls for 1500 prayers.",
      sector: "Religious",
      image: "/images/projects/Qurum-Mosque.avif",
      tag: "Oman",
      client: "Ministry of Awqaf & Religious Affairs",
      completionDate: "2010",
    },
    {
      id: 8,
      name: "Royal Opera House, Azaiba",
      description:
        "The Opera House complex consists of concert theatre, auditorium, formal landscaped gardens, cultural market with retail, luxury restaurants and an art centre for musical, theatrical and operatic productions.",
      sector: "Cultural",
      image: "/images/projects/ROHM.avif",
      tag: "Oman",
      client: "Diwan of Royal Court",
      completionDate: "2016",
    },
    {
      id: 9,
      name: "VVIP Hospital, Al Khoudh",
      description:
        "Expansion of the existing Armed Forces Hospital by constructing a new building comprising a basement level, a ground floor, 5 additional floors and service compound etc.",
      sector: "Healthcare",
      image: "/images/projects/VVIP Hospital.avif",
      tag: "Oman",
      client: "Ministry of Defence",
      completionDate: "2020",
    },
    {
      id: 10,
      name: "Oman Investment Authority Head Office, Azaiba",
      description:
        "The brand new building comprise internal finishes, fittings, furnishing and equipment.",
      sector: "Commercial",
      image: "/images/projects/Oman Investment Authority.avif",
      tag: "Oman",
      client: "Oman Investment Authority",
      completionDate: "2024",
    },
  ];

  const [filter, setFilter] = useState("All");

  // Hide filter if limit is set (home page), show if not (projects page)
  const showFilter = !limit;

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.sector === filter);

  // Apply limit if provided
  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  const sectors = [
    "All",
    ...Array.from(new Set(allProjects.map((project) => project.sector))),
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-[45px] font-lato font-bold text-[#181D27] text-center mb-12 md:mb-16">
          Completed Over 100 Projects in Oman
        </h2>
        {/* Project filtering */}
        {showFilter && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setFilter(sector)}
                className={`px-6 py-2 rounded-full font-lato text-sm font-semibold transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  filter === sector
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative w-full h-72 group">
                {" "}
                {/* Added group for potential hover effects on watermark */}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                {/* Floating Text Watermark - Conditional */}
                {project.tag === "Oman" && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center p-2 pointer-events-none"
                    animate={{
                      y: ["0%", "2%", "0%", "-2%", "0%"], // Subtle vertical float
                    }}
                    transition={{
                      duration: 4, // Duration of one full float cycle
                      ease: "easeInOut",
                      repeat: Infinity, // Repeat indefinitely
                      repeatType: "loop",
                    }}
                  >
                    <div className="flex items-center space-x-1.5 bg-black/40 backdrop-blur-sm p-1.5 rounded-md shadow-lg">
                      <CheckCircle className="h-4 w-4 text-green-400 opacity-80" />
                      <span className="text-xs font-semibold text-white opacity-80">
                        Our Team Worked in Oman Projects
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold font-ibm-plex-sans px-3 py-1 rounded-full mb-3 self-start">
                  {project.sector}
                </span>
                <h3 className="text-xl font-lato font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm font-ibm-plex-sans mb-2 flex-grow">
                  {project.description}
                </p>
                <p className="text-gray-500 text-xs font-ibm-plex-sans">
                  Client: {project.client}
                </p>
                <p className="text-gray-500 text-xs font-ibm-plex-sans">
                  Completion: {project.completionDate}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {showViewMore && (
          <div className="flex justify-center mt-10">
            <RippleButton
              text="View More Projects"
              url="/projects"
              className="bg-primary text-white font-lato font-semibold rounded-full shadow-md"
              useYellowHover={true}
              yellowArrow={true}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectHighlights;
