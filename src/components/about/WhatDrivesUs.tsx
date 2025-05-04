"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

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

const WhatDrivesUs: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleInteraction = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? -1 : index);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#181D27] mb-10">
          What Drives Us Forward
        </h2>

        <div className="space-y-4">
          {drivesData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id}
                onClick={() => handleInteraction(index)}
                onMouseEnter={() => !isMobile && handleInteraction(index)}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm cursor-pointer transition"
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
                      {/* Custom 1.5 / 4.5 column grid */}
                      <div className="grid min-h-[350px] md:grid-cols-[1.5fr_4.5fr]">
                        {/* Left column: Title + Text */}
                        <div className="flex flex-col justify-between px-8 py-6">
                          <div className="text-[#1E3A8A] font-semibold text-base md:text-lg leading-tight mb-4">
                            <span className="block">
                              {item.titleExpanded[0]}
                              <br />
                              {item.titleExpanded[1]}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {item.text}
                          </p>
                        </div>

                        {/* Right column: Image */}
                        <div className="relative rounded-2xl overflow-hidden w-full h-full lg:h-[520px]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;
