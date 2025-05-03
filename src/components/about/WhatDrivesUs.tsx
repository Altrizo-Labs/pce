'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/use-media-query';

// Data for the section
const drivesData = [
  {
    id: 1,
    title: "Relentless Innovation",
    text: "We continuously push boundaries to create forward-thinking solutions that redefine how institutions connect with students.",
    image: "/images/work.jpg", 
  },
  {
    id: 2,
    title: "Empathy In Every Interaction",
    text: "Understanding the needs of students and institutions is central to our approach, ensuring solutions are truly supportive.",
    image: "/images/work.jpg", 
  },
  {
    id: 3,
    title: "Integrity At Our Core",
    text: "We operate with transparency and honesty, building trust through every partnership and product decision.",
    image: "/images/work.jpg", 
  },
  {
    id: 4,
    title: "Driven By Purposeful Impact",
    text: "Our goal is to make a meaningful difference in education, empowering institutions and students to achieve more.",
    image: "/images/work.jpg", 
  },
];

// Animation variants for Framer Motion
const contentVariants = {
  collapsed: { height: 0, opacity: 0, marginTop: 0 },
  expanded: {
    height: 'auto',
    opacity: 1,
    marginTop: '1rem', // Adjust spacing as needed
    transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
  },
};

const WhatDrivesUs: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const isMobile = useMediaQuery('(max-width: 767px)'); // Example breakpoint for mobile

  const handleToggle = (index: number) => {
    if (isMobile) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
    // Desktop interaction is handled by scroll (whileInView)
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">
          What Drives Us Forward
        </h2>
        <div className="space-y-4 max-w-7xl mx-auto">
          {drivesData.map((drive, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={drive.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                // Desktop scroll animation trigger
                initial={false} // Don't animate on initial load unless in view
                whileInView={isMobile ? {} : {
                  // Apply subtle scale or background change on view for desktop?
                  // Or rely solely on content expansion below? Let's keep it simple for now.
                }}
                viewport={{ amount: 0.3 }} // Removed once: true
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className={`w-full p-4 md:p-6 text-left flex justify-between items-center focus:outline-none ${isMobile ? 'cursor-pointer' : 'cursor-default'}`}
                  disabled={!isMobile} // Disable button on desktop
                >
                  <h3 className="text-lg md:text-xl font-semibold text-blue-900">{drive.title}</h3>
                  {isMobile && (
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-600"
                    >
                      {/* Simple Chevron Down Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </motion.span>
                  )}
                </button>

                {/* Content Area - Animate Presence for mobile, Framer Motion for desktop */}
                <AnimatePresence initial={false}>
                  {(isMobile && isExpanded) && (
                    <motion.div
                      key="content-mobile"
                      variants={contentVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className="px-4 md:px-6 pb-4 md:pb-6 overflow-hidden"
                    >
                      <div className="md:flex md:items-start md:gap-6">
                        <p className="text-gray-600 md:w-1/2">{drive.text}</p>
                        <div className="mt-4 md:mt-0 md:w-1/2 relative h-48 md:h-auto md:aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={drive.image}
                            alt={drive.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Desktop Content - Revealed by scroll */}
                {!isMobile && (
                   <motion.div
                      key="content-desktop"
                      variants={contentVariants}
                      initial="collapsed"
                      whileInView="expanded" // Expand when in view
                      viewport={{ amount: 0.3 }} // Trigger when 30% visible, collapse when out
                      className="px-4 md:px-6 pb-4 md:pb-6 overflow-hidden"
                    >
                      <div className="md:flex md:items-start md:gap-6">
                        <p className="text-gray-600 md:w-1/2">{drive.text}</p>
                        <div className="mt-4 md:mt-0 md:w-1/2 relative h-48 md:h-auto md:aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={drive.image}
                            alt={drive.title}
                            fill // Use fill for responsive images within relative container
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                    </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;
