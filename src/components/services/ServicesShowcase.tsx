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
    image: "/images/work.jpg",
    features: [
      "Bill of Quantities Preparation",
      "Cost Planning & Control",
      "Tender Documentation",
      "Contract Administration"
    ]
  },
  {
    id: 2,
    title: "Cost Engineering",
    description: "Expert cost engineering solutions that optimize project budgets while maintaining quality standards and project objectives.",
    icon: BarChart3,
    image: "/images/work.jpg",
    features: [
      "Cost Estimation & Analysis",
      "Value Engineering",
      "Life Cycle Costing",
      "Risk Assessment"
    ]
  },
  {
    id: 3,
    title: "Project Management",
    description: "End-to-end project management services ensuring successful delivery of construction projects on time and within budget.",
    icon: ClipboardList,
    image: "/images/work.jpg",
    features: [
      "Project Planning & Scheduling",
      "Resource Management",
      "Quality Control",
      "Progress Monitoring"
    ]
  },
  {
    id: 4,
    title: "Construction Claims",
    description: "Professional assistance in preparing and defending construction claims, ensuring fair resolution of disputes.",
    icon: FileCheck,
    image: "/images/work.jpg",
    features: [
      "Delay Analysis",
      "Claims Preparation",
      "Dispute Resolution",
      "Expert Witness Services"
    ]
  },
  {
    id: 5,
    title: "Building Information Modeling",
    description: "Advanced BIM services for enhanced project visualization, coordination, and cost management.",
    icon: Building2,
    image: "/images/work.jpg",
    features: [
      "3D Modeling & Visualization",
      "Clash Detection",
      "Quantity Take-off",
      "Construction Sequencing"
    ]
  }
];

export default function ServicesShowcase() {
  const [activeService, setActiveService] = useState(services[0]);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    setActiveService(services[currentIndex]);
  }, [currentIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextService();
    }
    if (isRightSwipe) {
      prevService();
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Desktop Services List */}
          <div className="hidden lg:block space-y-4">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
                className={`relative group cursor-pointer ${
                  activeService.id === service.id ? "z-10" : ""
                }`}
                onClick={() => setActiveService(service)}
              >
                <div
                  className={`p-6 rounded-2xl transition-all duration-300 ${
                    activeService.id === service.id
                      ? "bg-white shadow-xl scale-105"
                      : "bg-white/50 hover:bg-white/80 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl transition-colors duration-300 ${
                        activeService.id === service.id
                          ? "bg-primary/10 text-primary"
                          : "bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary"
                      }`}
                    >
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                          activeService.id === service.id
                            ? "text-primary"
                            : "text-gray-900 group-hover:text-primary"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeService.id === service.id
                          ? "text-primary rotate-90"
                          : "text-gray-400 group-hover:text-primary group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation - Above Card */}
          {isMobile && (
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={prevService}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={nextService}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          )}

          {/* Active Service Details */}
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
            ref={containerRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
              <div className="relative h-72 flex-shrink-0">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {activeService.title}
                  </h3>
                  <p className="text-white/90">
                    {activeService.description}
                  </p>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Features
                </h4>
                <ul className="space-y-3 flex-1">
                  {activeService.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile Progress Indicators */}
            {isMobile && (
              <div className="flex justify-center gap-2 mt-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-gray-300"
                    }`}
                    aria-label={`Go to service ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 