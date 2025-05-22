"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { Award, ShieldCheck, BarChart3, Users } from "lucide-react";

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

const ScrollReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".card-section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 15%",
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.2, max: 0.5 },
          ease: "power1.inOut",
        },
        end: () =>
          `+=${containerRef.current!.offsetWidth * (sections.length - 1)}`,
      },
    });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center text-3xl md:text-5xl mb-12">
        <h1 className="lato text-center font-bold text-primary">
          Why Choose Us
        </h1>
      </div>
      <div ref={containerRef} className="flex overflow-hidden">
        {content.map((item, index) => (
          <div key={index} className="card-section min-w-full px-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 border border-primary/20 min-h-[520px] md:min-h-[600px] flex flex-col">
              <div className="relative h-48 md:h-full mb-6 md:mb-8 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex flex-col items-start mb-6"> {/* Adjusted parent mb if needed, but focusing on elements below for now */}
                  <span className="inline-flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-full bg-primary/10 text-primary mb-4 md:mb-5 shadow">
                    <item.icon className="w-6 md:w-7 h-6 md:h-7" />
                  </span>
                  <h2 className="text-xl md:text-2xl lato mb-4 md:mb-5 font-bold text-primary">
                    {item.title}
                  </h2>
                </div>
                <p className="text-base md:text-lg ibm-plex-sans font-medium text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(ScrollReveal), {
  ssr: false,
});
