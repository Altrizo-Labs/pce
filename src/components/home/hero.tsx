"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import RippleButton from "../RippleButton";

export default function Hero() {
  return (
    <div className="py-10">

      {/* Content Container */}
      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-ibm-plex-sans font-medium">
                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                Leading Engineering Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-lato font-bold text-gray-900 leading-tight"
            >
              Building Tomorrow's
              <span className="block text-primary mt-2">Infrastructure Today</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg font-lato text-gray-600 max-w-2xl"
            >
              With 25+ years of expertise in Quantity Surveying and Cost Engineering, we deliver precision-driven solutions that shape the future of construction in the Middle East.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <RippleButton
                text="Explore Our Services"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-ibm-plex-sans font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                url="/services"
                useYellowHover={true}
              />
              <RippleButton
                text="View Our Projects"
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-ibm-plex-sans font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
                url="/projects"
                useYellowHover={true}
              />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div>
                <div className="text-3xl font-lato font-bold text-primary">25+</div>
                <div className="text-sm font-ibm-plex-sans text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-lato font-bold text-primary">100+</div>
                <div className="text-sm font-ibm-plex-sans text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-lato font-bold text-primary">10+</div>
                <div className="text-sm font-ibm-plex-sans text-gray-600">Services</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/avif/whychooseus-qualified-team.avif"
              alt="Engineering Excellence"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
