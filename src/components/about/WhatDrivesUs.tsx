"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { drivesData } from "@/data/data";

interface DriveItemProps {
  item: (typeof drivesData)[0];
  index: number;
  isActive: boolean;
  setActiveIndex: (index: number) => void;
  isMobile: boolean;
}

const DriveItem: React.FC<DriveItemProps> = ({
  item,
  index,
  isActive,
  setActiveIndex,
  isMobile,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Adjusted scroll trigger settings to detect visibility more precisely
  const inView = useInView(ref, {
    margin: "-20% 0px -20% 0px", // -20% margin top and bottom for opening and closing
    amount: 0.5, // Detect when 50% of the item is in view
  });

  useEffect(() => {
    if (!isMobile && inView) {
      // When scrolling to a card, set it as active and close all subsequent cards
      setActiveIndex(index);
    }
  }, [inView, index, isMobile, setActiveIndex]);

  return (
    <motion.div
      ref={ref}
      // animate={{ scale: inView && !isMobile ? 1.03 : 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-b from-primary/10 via-transparent to-transparent rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition cursor-pointer"
    >
      {/* Header */}
      <button
        onClick={() => {
          if (isMobile) {
            // On mobile, clicking a card opens it and closes all cards after it
            setActiveIndex(isActive ? -1 : index);
          }
        }}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <h3 className="text-[#1E3A8A] font-bold text-base md:text-3xl">
          {isActive && !isMobile ? (
            <>
              {item.titleExpanded[0]}
              <br />
              {item.titleExpanded[1]}
            </>
          ) : (
            item.title
          )}
        </h3>
        {/* Mobile Chevron */}
        {isMobile && (
          <motion.span
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="text-blue-700 w-5 h-5" />
          </motion.span>
        )}
      </button>

      {/* Expandable Content */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden -mt-[120px] min-h-28"
          >
            <div
              className={clsx(
                isMobile ? "grid grid-cols-1" : "grid md:grid-cols-[1.5fr_4.5fr]",
                "min-h-[250px] md:h-[450px] lg:h-[530px]"
              )}
            >
              {/* Text Column */}
              <div className="flex flex-col justify-end px-6 py-6">
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Image Column (Desktop only) */}
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
    </motion.div>
  );
};

const WhatDrivesUs: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const [activeIndex, setActiveIndex] = useState<number>(0); // Start with first item active

  // Modified setActiveIndex function that closes all subsequent cards
  const handleSetActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  // Only set initial active item for desktop
  useEffect(() => {
    if (!isMobile) {
      setActiveIndex(0);
    }
  }, [isMobile]);

  return (
    <section className="py-8 md:py-24 bg-white" id="whatdrivesus">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-[45px] font-bold text-[#181D27] mb-10">
          What Drives Us Forward
        </h2>
        <div className="space-y-4">
          {drivesData.map((item, index) => (
            <DriveItem
              key={item.id}
              item={item}
              index={index}
              isActive={index <= activeIndex} // This ensures only current and previous cards are open
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
