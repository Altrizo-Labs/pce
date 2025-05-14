"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      title: "25+ Years of Experience",
      description: "Benefit from our extensive experience in Quantity Surveying and Cost Engineering, ensuring reliable and expert solutions.",
    },
    {
      title: "Adherence to International Standards",
      description: "We operate under strict international business standards and practices, guaranteeing quality and professionalism.",
    },
    {
      title: "Proven Track Record in Oman",
      description: "We have successfully completed over 100 projects in Oman across diverse sectors, demonstrating our capabilities and expertise.",
    },
    {
      title: "Expert Team",
      description: "Our team comprises qualified and experienced professionals dedicated to delivering exceptional results.",
    },
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[40px] font-lato font-bold text-[#181D27] text-center mb-12"
        >
          Why Choose Projects Cost Engineering?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-lato font-semibold text-[#181D27] mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-700 font-ibm-plex-sans text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
