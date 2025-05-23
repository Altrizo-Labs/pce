"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { 
  Calculator, 
  ClipboardList, 
  Building2, 
  FileCheck, 
  BarChart3,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const services = [
  {
    id: 1,
    title: "Quantity Surveying",
    description: "Comprehensive cost management and quantity surveying services for construction projects, ensuring accurate cost estimation and budget control.",
    icon: Calculator,
  },
  {
    id: 2,
    title: "Cost Engineering",
    description: "Expert cost engineering solutions that optimize project budgets while maintaining quality standards and project objectives.",
    icon: BarChart3,
  },
  {
    id: 3,
    title: "Project Management",
    description: "End-to-end project management services ensuring successful delivery of construction projects on time and within budget.",
    icon: ClipboardList,
  },
  {
    id: 4,
    title: "Value Engineering",
    description: "Professional assistance in preparing and defending construction claims, ensuring fair resolution of disputes.",
    icon: FileCheck,
  },
  {
    id: 5,
    title: "Design and Supervision",
    description: "Advanced BIM services for enhanced project visualization, coordination, and cost management.",
    icon: Building2,
  },
  {
    id: 6,
    title: "Contract Administration",
    description: "Comprehensive financial advisory services to support project financing and investment decisions.",
    icon: BarChart3,
  },
  {
    id: 7,
    title: "Design and Build",
    description: "Expert project management services ensuring successful delivery of construction projects on time and within budget.",
    icon: Building2,
  },
  {
    id: 8,
    title: "Dispute Resolution",
    description: "Comprehensive real estate consulting services to support investment decisions and project feasibility.",
    icon: FileCheck,
  }
];

export default function ServicesShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 font-lato">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering excellence in construction cost management and engineering services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="p-3 rounded-xl bg-primary/10 text-primary mb-4"
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3
                className="text-xl font-semibold text-gray-900 mb-2"
              >
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
