"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

const ProjectHighlights: React.FC = () => {
  // Placeholder data for projects with categories
  const allProjects = [
    {
      id: 1,
      name: 'Infrastructure Project 1',
      description: 'Brief description of Infrastructure Project 1.',
      sector: 'Infrastructure',
      image: '/images/work.jpg', // Using the work image as a placeholder
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
    {
      id: 2,
      name: 'Buildings Project 1',
      description: 'Brief description of Buildings Project 1.',
      sector: 'Buildings',
      image: '/images/work.jpg', // Using the work image as a placeholder
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
    {
      id: 3,
      name: 'Leisure Themes Project 1',
      description: 'Brief description of Leisure Themes Project 1.',
      sector: 'Leisure Themes',
      image: '/images/work.jpg', // Using the work image as a placeholder
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
     {
      id: 4,
      name: 'Landscaping Project 1',
      description: 'Brief description of Landscaping Project 1.',
      sector: 'Landscaping',
      image: '/images/work.jpg', // Using the work image as a placeholder
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
     {
      id: 5,
      name: 'Infrastructure Project 2',
      description: 'Brief description of Infrastructure Project 2.',
      sector: 'Infrastructure',
      image: '/images/work.jpg', // Using the work image as a placeholder
      projectValue: "[Project Value Placeholder]",
      challenges: "[Key Challenges & Solutions Placeholder]",
      pceServicesProvided: "[List of PCE Services Provided Placeholder]",
    },
  ];

  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(project => project.sector === filter);

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
          Completed Projects
        </h2>
        {/* Project filtering */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative w-full h-52"> {/* Fixed height for image container */}
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  layout="fill" // Use layout="fill" for responsive image within fixed container
                  objectFit="cover" // Ensures image covers the container
                  className="" // Example hover effect for image
                />
              </div>
              <div className="p-6 flex flex-col flex-grow"> {/* Added flex-grow for content to take remaining space */}
                <span 
                  className="inline-block bg-primary/10 text-primary text-xs font-semibold font-ibm-plex-sans px-3 py-1 rounded-full mb-3 self-start"
                >
                  {project.sector}
                </span>
                <h3 className="text-xl font-lato font-semibold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm font-ibm-plex-sans mb-4 flex-grow">{project.description}</p> 
                {/* Add flex-grow to description if you want it to push other elements down in flex-col */}
                <p className="text-gray-500 text-xs font-ibm-plex-sans">Value: {project.projectValue}</p>
                <p className="text-gray-500 text-xs font-ibm-plex-sans">Challenges: {project.challenges}</p>
                <p className="text-gray-500 text-xs font-ibm-plex-sans">PCE Services: {project.pceServicesProvided}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
