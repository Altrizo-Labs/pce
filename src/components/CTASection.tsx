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
    <section className="relative bg-[linear-gradient(116deg,#1E3A8A,rgba(30,58,138,0.75),#1E3A8A)] text-white rounded-[32px] px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 min-h-[480px] md:min-h-[420px] lg:min-h-[460px] xl:min-h-[500px] overflow-hidden my-8 md:my-10 lg:my-12">
      <div
        className={clsx(
          "absolute z-0 bg-[url('/images/cta-vector.svg')] bg-cover bg-no-repeat",
          // Mobile: image from top
          "inset-x-0 -top-28 w-full h-[500px] bg-top",
          // MD and larger: restore side image
          "md:inset-y-0 md:inset-x-auto md:top-auto md:h-full",
          "md:w-[500px] lg:w-[600px] xl:w-[700px]",
          imagePosition === "left"
            ? "md:-left-60 lg:-left-60 xl:-left-72 md:bg-left"
            : "md:-right-60 lg:-right-60 xl:-right-72 md:bg-right"
        )}
      />

      {/* Content container: using flex to align text - Simplified alignment */}
      <div
        className={clsx(
          "relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center pt-40 md:pt-0",
          // Align text opposite to image position
          imagePosition === "left"
            ? "md:justify-end md:text-left text-left"
            : "md:justify-start md:text-left"
        )}
      >
        {/* Added flex flex-col to enable vertical centering with justify-center */}
        {/* Adjusted width for responsiveness */}
        <div
          className={clsx(
            "w-full flex flex-col items-start mt-24 md:mt-0 md:items-start justify-center",
            imagePosition === "left"
              ? "md:w-[60%] lg:w-[70%]"
              : "md:w-[60%] lg:w-[70%]"
          )}
        >
          {/* Added max-w-3xl to the title, adjusted font sizes, and re-added line-height */}
          <h2 className="text-2xl text-left md:text-3xl lg:text-[45px] font-bold leading-snug md:leading-tight lg:leading-tight mb-3 md:mb-4 font-lato">
            {title}
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-white/75 mb-6 md:mb-8 lg:mb-10 font-ibm-plex-sans max-w-md lg:max-w-xl">
            {description}
          </p>
          <Link href={buttonLink} legacyBehavior>
            {/* Add group class to the link, adjusted padding */}
            <a className="group inline-flex items-center gap-2 bg-white text-[#0B2A8C] font-lato font-semibold px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-gray-100 transition">
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
