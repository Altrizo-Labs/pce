"use client";
import React, { useEffect, useRef, useState } from "react"; // Added useState
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Award, ShieldCheck, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";

export const content = [
  {
    image: "/images/avif/whychooseus-experience-planning.avif",
    title: "25+ Years of Experience",
    description: "Benefit from our extensive experience in Quantity Surveying and Cost Engineering, ensuring reliable and expert solutions.",
    icon: Award,
  },
  {
    image: "/images/avif/whychooseus-standards-financials.avif",
    title: "Adherence to International Standards",
    description: "We operate under strict international business standards and practices, guaranteeing quality and professionalism.",
    icon: ShieldCheck,
  },
  {
    image: "/images/avif/whychooseus-experience-planning.avif",
    title: "Proven Track Record in Oman",
    description: "We have successfully completed over 100 projects in Oman across diverse sectors, demonstrating our capabilities and expertise.",
    icon: BarChart3,
  },
  {
    image: "/images/avif/whychooseus-qualified-team.avif",
    title: "Expert Team",
    description: "Our team comprises qualified and experienced professionals dedicated to delivering exceptional results.",
    icon: Users,
  },
];

gsap.registerPlugin(ScrollTrigger);

function StickyScrollReveal() {
  const containerRef = useRef(null);
  // imageRef is not strictly needed for src update anymore but can be kept if used for other GSAP animations on the Image itself
  const imageRef = useRef<HTMLImageElement>(null); 
  const [currentImageSrc, setCurrentImageSrc] = useState(content[0].image); // State for current image src

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".content-section");
    // const imageElement = imageRef.current; // Not directly manipulating src anymore

    const updateImage = (index: number) => {
      // Optional: fade out/in animation if desired, though Next/Image might handle this smoothly
      const imageWrapper = imageRef.current?.parentElement; // Get the parent for opacity animation
      if (imageWrapper) {
        gsap.to(imageWrapper, { // Animate the wrapper or the Image component if ref points to it
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            setCurrentImageSrc(content[index].image);
            gsap.to(imageWrapper, { opacity: 1, duration: 0.2, delay: 0.05 });
          },
        });
      } else {
        setCurrentImageSrc(content[index].image); // Fallback if no wrapper for animation
      }
    };

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => updateImage(index),
        onEnterBack: () => updateImage(index),
        toggleActions: "play none none reverse",
      });

      gsap.fromTo(
        section.querySelectorAll(".text-content > *"),
        { opacity: 20, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto py-20 px-2 md:px-8 ">
      {/* Section Heading */}
      <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[45px] justify-center font-lato font-bold text-[#181D27] text-center mb-12 md:mb-16"
        >
          Why Choose Us
        </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12">
        {/* Sticky Image Section */}
        <div className="sticky top-24 lg:top-[20%] h-[420px] flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
            <Image
              ref={imageRef} // Keep ref if other direct GSAP manipulations on Image are done
              src={currentImageSrc} // Use state variable for src
              alt="Why Choose Us"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Scrolling Content Section */}
        <div ref={containerRef} className="space-y-16">
          {content.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="content-section min-h-[420px] flex items-center"
              >
                <div className="text-content w-full h-[420px] flex flex-col justify-center p-8">
                  <div className="flex flex-col items-start mb-6">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 shadow">
                      <Icon className="w-8 h-8" />
                    </span>
                    <h2 className="text-xl md:text-2xl lato font-bold text-primary mb-4">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-sm md:text-base ibm-plex-sans font-medium text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default dynamic(() => Promise.resolve(StickyScrollReveal), {
  ssr: false,
});
