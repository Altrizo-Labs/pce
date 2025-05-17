"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const WhyChooseUsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const reasons = [
    {
      title: "25+ Years of Experience",
      description: "Benefit from our extensive experience in Quantity Surveying and Cost Engineering, ensuring reliable and expert solutions.",
      image: "/images/experience.jpg",
      stats: "25+",
      statLabel: "Years of Excellence"
    },
    {
      title: "Adherence to International Standards",
      description: "We operate under strict international business standards and practices, guaranteeing quality and professionalism.",
      image: "/images/standards.jpg",
      stats: "100%",
      statLabel: "Quality Assurance"
    },
    {
      title: "Proven Track Record in Oman",
      description: "We have successfully completed over 100 projects in Oman across diverse sectors, demonstrating our capabilities and expertise.",
      image: "/images/oman.jpg",
      stats: "100+",
      statLabel: "Projects Completed"
    },
    {
      title: "Expert Team",
      description: "Our team comprises qualified and experienced professionals dedicated to delivering exceptional results.",
      image: "/images/team.jpg",
      stats: "50+",
      statLabel: "Expert Professionals"
    },
  ];

  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-[45px] font-lato font-bold text-[#181D27] mb-4">
            Why Choose Projects Cost Engineering?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images */}
          <div className="relative h-[600px] lg:sticky lg:top-20 overflow-hidden rounded-2xl">
            <motion.div
              style={{ y, opacity }}
              className="absolute inset-0"
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className="object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-5xl font-bold mb-2"
                      >
                        {reason.stats}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg font-medium"
                      >
                        {reason.statLabel}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-24">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-8 top-0 w-1 h-full bg-primary/20 rounded-full" />
                <div className="pl-8">
                  <h3 className="text-2xl font-lato font-semibold text-[#181D27] mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 font-ibm-plex-sans leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
