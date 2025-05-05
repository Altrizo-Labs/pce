"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx'; // Import clsx for conditional classes

const drivesData = [
  {
    id: 1,
    title: "Relentless Innovation",
    titleExpanded: ["Relentless", "Innovation"],
    text: "We continuously push boundaries to create forward-thinking solutions that redefine how institutions connect with students.",
    image: "/images/work.jpg",
  },
  {
    id: 2,
    title: "Empathy In Every Interaction",
    titleExpanded: ["Empathy", "In Every Interaction"],
    text: "Understanding the needs of students and institutions is central to our approach, ensuring solutions are truly supportive.",
    image: "/images/work.jpg",
  },
  {
    id: 3,
    title: "Integrity At Our Core",
    titleExpanded: ["Integrity", "At Our Core"],
    text: "We operate with transparency and honesty, building trust through every partnership and product decision.",
    image: "/images/work.jpg",
  },
  {
    id: 4,
    title: "Driven By Purposeful Impact",
    titleExpanded: ["Driven By", "Purposeful Impact"],
    text: "Our goal is to make a meaningful difference in education, empowering institutions and students to achieve more.",
    image: "/images/work.jpg",
  },
];

interface DriveItemProps {
  item: typeof drivesData[0];
  index: number;
  isActive: boolean;
  // Modify setActiveIndex to handle adding/removing from an array
  setActiveIndex: (index: number, action: 'add' | 'toggle') => void;
  isMobile: boolean;
}

const DriveItem: React.FC<DriveItemProps> = ({ item, index, isActive, setActiveIndex, isMobile }) => {
  const { ref, inView } = useInView({
    threshold: 0.6, // Adjust threshold back for fixed height
    triggerOnce: false,
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (inView && !isMobile) {
      timeoutRef.current = setTimeout(() => {
        setActiveIndex(index, 'add');
      }, 250);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inView, index, setActiveIndex, isMobile]);

  const handleInteraction = () => {
    setActiveIndex(index, 'toggle');
  };


  return (
    <div
      ref={ref}
      key={item.id}
      onClick={handleInteraction}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer transition min-h-[100px]"
    >
      {/* Header */}
      {!isActive && (
        <div className="px-6 py-8 flex items-center justify-between">
          <h3 className="text-[#1E3A8A] font-semibold text-base md:text-lg">
            {item.title}
          </h3>
        </div>
      )}

      {/* Expandable Content */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Apply fixed height conditionally */}
            <div className={clsx(
              // Adjust grid layout for mobile when image is hidden
              isMobile ? "grid grid-cols-1" : "grid md:grid-cols-[1.5fr_4.5fr]",
              // Use fixed height on lg screens, fallback to min-height
              isActive ? "lg:h-[530px] md:h-[450px] min-h-[350px]" : "min-h-[350px]"
            )}>
              {/* Left column: Title + Text */}
              {/* Keep justify-center */}
              <div className="flex flex-col justify-between px-8 py-6">
                <div className="text-[#1E3A8A] font-semibold text-base md:text-lg leading-tight mb-4">
                  {/* Conditionally render title based on isMobile */}
                  {isMobile ? (
                    <span className="block">{item.title}</span>
                  ) : (
                    <span className="block">
                      {item.titleExpanded[0]}
                      <br />
                      {item.titleExpanded[1]}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Right column: Image - Conditionally render based on isMobile */}
              {/* Keep h-full */}
              {!isMobile && (
                <div className="relative rounded-2xl overflow-hidden w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WhatDrivesUs: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const handleSetActiveIndex = (index: number, action: 'add' | 'toggle') => {
    setActiveIndices(prevIndices => {
      const indexExists = prevIndices.includes(index);

      if (action === 'add') {
        return indexExists ? prevIndices : [...prevIndices, index];
      } else if (action === 'toggle') {
        return indexExists
          ? prevIndices.filter(i => i !== index)
          : [...prevIndices, index];
      }
      return prevIndices;
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#181D27] mb-10">
          What Drives Us Forward
        </h2>

        <div className="space-y-4">
          {drivesData.map((item, index) => (
            <DriveItem
              key={item.id}
              item={item}
              index={index}
              isActive={activeIndices.includes(index)}
              setActiveIndex={handleSetActiveIndex}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default WhatDrivesUs;
