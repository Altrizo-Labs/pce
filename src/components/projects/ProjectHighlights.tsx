"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RippleButton from '../RippleButton'; // Import RippleButton
import { HardHat } from 'lucide-react'; // Import a construction icon

interface ProjectHighlightsProps {
  limit?: number; // Number of projects to show (if provided)
  showViewMore?: boolean; // Show the View More button
}

const ProjectHighlights: React.FC<ProjectHighlightsProps> = ({ limit, showViewMore }) => {
  // Updated project data
  const allProjects = [
    {
      id: 1,
      name: 'Arm Force Hospital',
      description: 'A state-of-the-art healthcare facility developed for the Arm Forces, focusing on advanced medical services.',
      sector: 'Healthcare',
      image: '/images/projects/Arm Force Hospital.avif',
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
    {
      id: 2,
      name: 'Chelrenham College',
      description: 'Development of the prestigious Chelrenham College campus, emphasizing modern educational infrastructure.',
      sector: 'Educational',
      image: '/images/projects/Chelrenham College.avif',
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
    {
      id: 3,
      name: 'Downe House School',
      description: 'Construction of the Downe House School, providing an exceptional learning environment for students.',
      sector: 'Educational',
      image: '/images/projects/Downe House School.avif',
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
    {
      id: 4,
      name: 'Four Star Hotel',
      description: 'A luxurious Four Star Hotel project, designed to offer premium hospitality and guest experiences.',
      sector: 'Hospitality',
      image: '/images/projects/Four Star Hotel.avif',
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
    {
      id: 5,
      name: 'Military College',
      description: 'Establishment of a comprehensive Military College, equipped with specialized training facilities.',
      sector: 'Educational',
      image: '/images/projects/Military College.avif',
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
    {
      id: 6,
      name: 'Panaroma Mall',
      description: 'The Panaroma Mall project, a major retail and entertainment destination offering diverse shopping options.',
      sector: 'Commercial',
      image: '/images/projects/Panaroma Mall.avif',
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
    {
      id: 7,
      name: 'QURUM MOSQUE',
      description: 'The esteemed QURUM MOSQUE project, a significant religious and community landmark.',
      sector: 'Religious',
      image: '/images/projects/QURUM MOSQUE.avif',
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
    {
      id: 8,
      name: 'ROHM',
      description: 'The iconic Royal Opera House Muscat (ROHM) project, a center for arts, culture, and performance.',
      sector: 'Cultural',
      image: '/images/projects/ROHM.avif',
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
    {
      id: 9,
      name: 'VVIP Hospital',
      description: 'A premier VVIP Hospital, providing exclusive and high-quality healthcare services.',
      sector: 'Healthcare',
      image: '/images/projects/VVIP Hospital.avif',
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
  ];

  const [filter, setFilter] = useState('All');

  // Hide filter if limit is set (home page), show if not (projects page)
  const showFilter = !limit;

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(project => project.sector === filter);

  // Apply limit if provided
  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const sectors = ['All', ...Array.from(new Set(allProjects.map(project => project.sector)))];

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
            {sectors.map(sector => (
              <button
                key={sector}
                onClick={() => setFilter(sector)}
                className={`px-6 py-2 rounded-full font-lato text-sm font-semibold transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/50 ${filter === sector ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
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
              <div className="relative w-full h-52 group"> {/* Added group for potential hover effects on watermark */}
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                {/* Floating Text Watermark */}
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
                  <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm p-2 rounded-md">
                    <HardHat className="h-5 w-5 text-white opacity-50" />
                    <span className="text-sm font-bold text-white opacity-50 transform -rotate-6">
                      PCE
                    </span>
                  </div>
                </motion.div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span 
                  className="inline-block bg-primary/10 text-primary text-xs font-semibold font-ibm-plex-sans px-3 py-1 rounded-full mb-3 self-start"
                >
                  {project.sector}
                </span>
                <h3 className="text-xl font-lato font-semibold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm font-ibm-plex-sans mb-4 flex-grow">{project.description}</p> 
                <p className="text-gray-500 text-xs font-ibm-plex-sans">Value: {project.projectValue}</p>
                <p className="text-gray-500 text-xs font-ibm-plex-sans">Challenges: {project.challenges}</p>
                <p className="text-gray-500 text-xs font-ibm-plex-sans">PCE Services: {project.pceServicesProvided}</p>
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
              yellowArrow={true} // Add yellow arrow icon
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectHighlights;
