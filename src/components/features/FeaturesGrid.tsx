"use client";

import React from "react";

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
    <section className="relative py-12 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-16">
          Built to Support, Scale, and Succeed
        </h2>

        {/* Custom Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6 auto-rows-[446px]">
          {/* 1st row - Left (705px) ~ 7/12 */}
          <div className="col-span-12 md:col-span-7 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-6 h-1/2">
              <h3 className="text-lg font-semibold text-gray-900">
                {features[0].title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {features[0].description}
              </p>
            </div>
            <div className="h-1/2 bg-gray-200" />
          </div>

          {/* 1st row - Right (470px) ~ 5/12 */}
          <div className="col-span-12 md:col-span-5 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-6 h-1/2">
              <h3 className="text-lg font-semibold text-gray-900">
                {features[1].title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {features[1].description}
              </p>
            </div>
            <div className="h-1/2 bg-gray-200" />
          </div>

          {/* 2nd row - Left (470px) ~ 5/12 */}
          <div className="col-span-12 md:col-span-5 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-6 h-1/2">
              <h3 className="text-lg font-semibold text-gray-900">
                {features[2].title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {features[2].description}
              </p>
            </div>
            <div className="h-1/2 bg-gray-200" />
          </div>

          {/* 2nd row - Right (705px) ~ 7/12 */}
          <div className="col-span-12 md:col-span-7 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-6 h-1/2">
              <h3 className="text-lg font-semibold text-gray-900">
                {features[3].title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {features[3].description}
              </p>
            </div>
            <div className="h-1/2 bg-gray-200" />
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default FeaturesBentoGrid;