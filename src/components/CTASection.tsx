import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react"; // Import ArrowRight

type CTASectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imagePosition?: "left" | "right";
};

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imagePosition = "right", // Default value
}) => {
  return (
    <section className="relative bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/80 to-[#1E3A8A]/50 text-white rounded-[32px] px-6 md:px-12 py-20 min-h-[460px] xl:min-h-[500px] overflow-hidden">
      <div
        className={clsx(
          "absolute z-0 bg-[url('/images/cta-vector.png')] bg-cover bg-no-repeat", // Changed bg-contain to bg-cover

          // Increased width to scale image further
          "inset-y-0 w-[750px] md:w-[700px]",
          imagePosition === "left" ? "-left-48  bg-left" : "right-0 bg-right"
        )}
      />

      {/* Content container: using flex to align text - Simplified alignment */}
      <div
        className={clsx(
          "relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center",
          // Align text opposite to image position
          imagePosition === "left" ? "justify-end" : "justify-start"
        )}
      >
        <div className="w-full md:w-[60%] lg:w-[65%] items-start justify-center">
          {/* Added max-w-3xl to the title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-lato max-w-[45rem]">
            {title}
          </h2>
          <p className="text-sm md:text-base text-white/75 mb-8 font-ibm-plex-sans max-w-xl">
            {description}
          </p>
          <Link href={buttonLink} legacyBehavior>
            {/* Add group class to the link */}
            <a className="group inline-flex items-center gap-2 bg-white text-[#0B2A8C] font-lato font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
              {buttonText}
              {/* Add transition and hover transform classes to the icon */}
              <ArrowRight
                color="#FCCF37"
                size={20}
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              />{" "}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
