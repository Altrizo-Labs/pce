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
    <section className="relative bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/80 to-[#1E3A8A]/50 text-white rounded-[32px] px-6 md:px-12 py-20 min-h-[480px] overflow-hidden">
      <div
        className={clsx(
          "absolute z-0 bg-[url('/images/wireframe.png')] bg-contain bg-no-repeat",

          "inset-y-0 w-[600px] md:w-[550px]", // Changed inset-0 to inset-y-0
          imagePosition === "left" ? "-left-20  bg-left" : "-right-20  bg-right"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-lato">
            {title}
          </h2>
          <p className="text-sm md:text-base text-white/75 mb-8 font-ibm-plex-sans max-w-xl">
            {description}
          </p>
          <Link href={buttonLink} legacyBehavior>
            <a className="inline-flex items-center gap-2 bg-white text-[#0B2A8C] font-lato font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
              {buttonText}
              <ArrowRight color="#FCCF37" size={20} />{" "}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
