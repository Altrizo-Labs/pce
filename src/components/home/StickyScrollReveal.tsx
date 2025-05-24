"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Award, ShieldCheck, BarChart3 } from "lucide-react";
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
    image: "/images/avif/service-real-estate-consulting.avif", // Note: This image is repeated, consider if unique images are intended for each point
    title: "Proven Track Record in Oman",
    description: "We have successfully completed over 100 projects in Oman across diverse sectors, demonstrating our capabilities and expertise.",
    icon: BarChart3,
  }
];

gsap.registerPlugin(ScrollTrigger);

function StickyScrollReveal() {
  const contentSectionsRef = useRef(null); // Ref for the container of text content sections
  const imageWrappersParentRef = useRef<HTMLDivElement>(null); // Ref for the parent of all image wrappers
  const imageWrapperRefs = useRef<HTMLDivElement[]>([]); // Stores individual image wrapper divs

  useEffect(() => {
    if (!imageWrappersParentRef.current) return;

    // Initialize refs for image wrappers
    imageWrapperRefs.current = gsap.utils.toArray(imageWrappersParentRef.current.children) as HTMLDivElement[];

    const sections = gsap.utils.toArray<HTMLElement>(".content-section");

    // Set initial state for images: first visible, rest hidden
    if (imageWrapperRefs.current.length > 0) {
      gsap.set(imageWrapperRefs.current[0], { opacity: 1, zIndex: 1 });
      imageWrapperRefs.current.slice(1).forEach((wrapper) => {
        gsap.set(wrapper, { opacity: 0, zIndex: 0 });
      });
    }
    
    const updateImage = (activeIndex: number) => {
      imageWrapperRefs.current.forEach((wrapper, i) => {
        gsap.to(wrapper, {
          opacity: i === activeIndex ? 1 : 0,
          zIndex: i === activeIndex ? 1 : 0, // Ensure active image is on top
          duration: 0.4, // Smooth transition
          ease: "power1.inOut"
        });
      });
    };

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center", // When the top of the section hits the center
        end: "bottom center", // When the bottom of the section leaves the center
        // markers: true, // Uncomment for debugging
        onEnter: () => updateImage(index),
        onEnterBack: () => updateImage(index), // Handles scrolling back up
      });

      // Animation for text content (remains the same)
      gsap.fromTo(
        section.querySelectorAll(".text-content > *"),
        { opacity: 0, y: 20 }, // Start from opacity 0 for a fade-in effect
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 70%", // Start animation a bit earlier
            end: "bottom 30%",
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
    <section className="relative max-w-7xl mx-auto py-10 px-3">
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
        <div className="sticky top-24 lg:top-[calc(50vh-210px)] h-[420px] flex items-center justify-center"> {/* Adjusted top for better vertical centering */}
          <div ref={imageWrappersParentRef} className="w-full h-full relative">
            {content.map((item, index) => (
              <div
                key={item.title + index} // Ensure unique key
                className="absolute inset-0 w-full h-full"
                style={{ opacity: index === 0 ? 1 : 0, zIndex: index === 0 ? 1: 0 }} // Initial state
              >
                <Image
                  src={item.image}
                  alt={item.title || "Decorative image"}
                  fill
                  className="object-cover rounded-2xl"
                  priority={index === 0} // Prioritize the first image for LCP
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Provide sizes attribute
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Content Section */}
        <div ref={contentSectionsRef} className="space-y-16"> {/* Increased space-y for better separation if needed */}
          {content.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title + index} // Ensure unique key
                className="content-section min-h-[380px] flex items-center" // Ensure section height matches image height
              >
                <div className="text-content w-full h-full flex flex-col justify-center p-6 md:p-8"> {/* Consistent padding */}
                  <div className="flex flex-col items-start mb-4 md:mb-6">
                    <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 text-primary mb-3 md:mb-4 shadow">
                      <Icon className="w-6 h-6 md:w-8 md:h-8" />
                    </span>
                    <h3 className="text-xl md:text-2xl font-lato font-bold text-primary mb-2 md:mb-3"> {/* Changed to h3 for semantics */}
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base font-ibm-plex-sans font-medium text-gray-700 leading-relaxed">
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
