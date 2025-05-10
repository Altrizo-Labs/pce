"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "24/7 AI Assistance",
    description:
      "Our intelligent chatbot operates around the clock, instantly responding to prospective student queries, reducing the need for constant counselor intervention, and ensuring no question ever goes unanswered.",
  },
  {
    title: "Personalized Conversations",
    description:
      "Deliver meaningful, context-aware replies that guide each student individually, creating a more personal and effective experience.",
  },
  {
    title: "Scalable & Efficient",
    description:
      "Boost counselor productivity and handle five times more student inquiries with smart automation and streamlined workflows.",
  },
  {
    title: "Actionable Analytics",
    description:
      "Our powerful dashboard provides real-time insights into student engagement, common queries, and recruitment trends, enabling institutions to continuously optimize their strategies and drive better outcomes.",
  },
];

const FeaturesBentoGrid = () => {
  return (
    <section id="features" className="relative py-12 z-10 lg:mt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl lg:text-[45px] font-bold font-lato text-gray-900 mb-16">
          Built to Support, Scale, and Succeed
        </h2>

        {/* Custom Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6 auto-rows-[446px]">
          {/* 1st row - Left (705px) ~ 7/12 */}
          <motion.div
            className="col-span-12 md:col-span-7 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          >
            <div className="p-6 h-1/3">
              <h3 className="text-lg font-semibold font-lato text-gray-900">
                {features[0].title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 font-ibm-plex-sans">
                {features[0].description}
              </p>
            </div>
            <div
              className="h-2/3 bg-no-repeat bg-bottom bg-contain"
              style={{ backgroundImage: `url('/images/24-7.svg')` }}
              aria-label={features[0].title + " illustration"}
            ></div>
          </motion.div>

          {/* 1st row - Right (470px) ~ 5/12 */}
          <motion.div
            className="col-span-12 md:col-span-5 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="p-6 h-1/3">
              <h3 className="text-lg font-semibold font-lato text-gray-900">
                {features[1].title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 font-ibm-plex-sans">
                {features[1].description}
              </p>
            </div>
            <div
              className="h-2/3 bg-no-repeat bg-bottom bg-contain"
              style={{ backgroundImage: `url('/images/conversations.svg')` }}
              aria-label={features[1].title + " illustration"}
            ></div>
          </motion.div>

          {/* 2nd row - Left (470px) ~ 5/12 */}
          <motion.div
            className="col-span-12 md:col-span-5 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="p-6 h-1/3">
              <h3 className="text-lg font-semibold font-lato text-gray-900">
                {features[2].title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 font-ibm-plex-sans">
                {features[2].description}
              </p>
            </div>
            <div
              className="h-2/3 bg-no-repeat bg-bottom bg-contain"
              style={{ backgroundImage: `url('/images/scalable-efficent2.svg')` }}
              aria-label={features[2].title + " illustration"}
            ></div>
          </motion.div>

          {/* 2nd row - Right (705px) ~ 7/12 */}
          <motion.div
            className="col-span-12 md:col-span-7 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="p-6 h-1/3">
              <h3 className="text-lg font-semibold text-gray-900 font-lato">
                {features[3].title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 font-ibm-plex-sans">
                {features[3].description}
              </p>
            </div>
            <div
              className="h-2/3 bg-no-repeat bg-bottom bg-contain"
              style={{ backgroundImage: `url('/images/analytics.svg')` }}
              aria-label={features[3].title + " illustration"}
            ></div>
          </motion.div>
        </div>
      </div>

      
    </section>
  );
};

export default FeaturesBentoGrid;
