"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import RippleButton from "../RippleButton";
import laptop from "../../../public/images/laptop.png";

export default function Hero() {
  return (
    <div className="rounded-t-[32px] h-fit bg-gradient-to-b from-primary from-10% via-primary/20 to-100% to-transparent p-5 lg:p-10 relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 relative z-10">
        {/* Title Animation */}
        <motion.p
          className="text-[#F3F4F6] flex-[0.55] text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight sm:leading-tight md:leading-tight lg:leading-[65px] font-lato font-bold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Smart Education <br className="hidden lg:block" /> Driven by
          Innovation Shaping Student Success
        </motion.p>

        <div className="flex-[0.42] flex flex-col justify-between">
          {/* Description Animation */}
          <motion.p
            className="text-xs sm:text-sm md:text-[16px] font-ibm-plex-sans text-[#F3F4F6] lg:w-[85%] mb-8 leading-normal md:leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            AI-powered solutions to enhance student engagement, streamline
            administration, and personalize learning—helping institutions stay
            ahead in today&#39;s fast-paced education landscape.
          </motion.p>

          {/* Button Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <RippleButton
              text="Book a Demo"
              className="bg-white mb-3 rounded-full font-lato text-primary font-bold w-auto whitespace-nowrap text-black text-sm md:text-[16px] z-50"
              url="/contact" 
              yellowIcon
            />
          </motion.div>
        </div>
      </div>

      {/* Image Animation */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src={laptop}
          alt="Laptop Image"
          className="scale-150 lg:scale-125 -mb-[50%] mt-24 lg:mt-44"
          priority
        />
      </motion.div>
    </div>
  );
}
