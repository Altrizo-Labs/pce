"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RippleButton from "./RippleButton"; // Import RippleButton

type CTASectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imagePosition?: "left" | "right";
};

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imagePosition = "right",
}) => {
  return (
    <motion.section
      className="relative bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-white rounded-[32px] px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 overflow-hidden my-5 md:my-10 lg:my-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center">
        <div className="w-full flex flex-col items-start justify-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl text-left md:text-3xl lg:text-[45px] font-bold leading-snug md:leading-tight lg:leading-tight mb-3 md:mb-4 font-lato">
              {title}
            </h2>
            <p className="text-xs md:text-sm lg:text-base text-white/90 mb-6 md:mb-8 lg:mb-10 font-ibm-plex-sans max-w-md lg:max-w-xl">
              {description}
            </p>
            <RippleButton
              text={buttonText}
              url={buttonLink}
              className="bg-white text-primary font-lato font-semibold rounded-full shadow-lg hover:shadow-xl"
              textStyles="group-hover:text-primary" // Keep text primary on hover if not overridden by yellow
              useYellowHover={true}
              icon={<ArrowRight
                className="text-primary transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                size={20}
              />}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
