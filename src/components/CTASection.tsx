import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from 'lucide-react'; // Import ArrowRight

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
  imagePosition = "right", // Re-add default value
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/80 to-[#1E3A8A]/50 text-white rounded-[32px] px-6 md:px-12 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">
        {/* Text Column: Order changes based on imagePosition */}
        <div className={clsx("order-2", imagePosition === 'left' ? 'md:order-2' : 'md:order-1')}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-sm md:text-base text-[#CBD5E1] mb-8 max-w-lg">{description}</p>
          <Link href={buttonLink} legacyBehavior>
            <a className="inline-flex items-center gap-2 bg-white text-[#0B2A8C] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
              {buttonText}
              <ArrowRight color="#FCCF37" size={20} /> {/* Replace span with ArrowRight icon */}
            </a>
          </Link>
        </div>

        {/* Image Column: Order changes based on imagePosition */}
        <div className={clsx("order-1", imagePosition === 'left' ? 'md:order-1' : 'md:order-2')}>
          <div className="w-full h-full">
            {/* Decorative background using wireframe grid */}
            <div className="w-full h-full">
              <div
                className={clsx(
                  "aspect-[16/9] w-full bg-[url('/images/wireframe.png')] bg-contain bg-no-repeat ",
                  imagePosition === 'left' ? 'bg-left' : 'bg-right'
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;