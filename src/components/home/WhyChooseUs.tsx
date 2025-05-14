"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const KeyServicesSnapshot: React.FC = () => {
  const services = [
    {
      title: "Quantity Surveying",
      description:
        "Providing expert cost management and financial control services for construction projects.",
    },

    {
      title: "Cost Engineering",
      description:
        "Applying scientific principles and techniques to cost estimation, cost control, and project profitability.",
    },
    {
      title: "Project Management",
      description:
        "Overseeing and managing all aspects of a project from initiation to completion.",
    },
    {
      title: "Contract Administration",
      description:
        "Managing the contractual relationships and obligations between parties in a construction project.",
    },
     {
      title: "Value Engineering",
      description:
        "Analyzing project designs to optimize costs without compromising quality or function.",
    },
     {
      title: "Dispute Resolution",
      description:
        "Providing expert analysis and support for resolving construction disputes.",
    },
  ];

  return (
    <section className="py-12 lg:py-16 lg:max-w-6xl mx-auto font-ibm-plex-sans overflow-x-hidden">
      <div className="container w-full items-center mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[45px] justify-center font-lato font-bold text-[#181D27] text-center mb-12 md:mb-16"
        >
          Our Key Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-start gap-4 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-3 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <Image
                  src="/images/Vector.svg" // Placeholder icon
                  alt="Service icon"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-xl font-lato font-semibold text-[#060B13] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#363D4F] text-sm font-ibm-plex-sans">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServicesSnapshot;
