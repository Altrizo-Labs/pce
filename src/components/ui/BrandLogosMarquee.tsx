import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const placeholderLogos = [
  "https://placehold.co/240x50?text=Logo1.png",
  "https://placehold.co/240x50?text=Logo2.png",
  "https://placehold.co/240x50?text=Logo3.png",
  "https://placehold.co/240x50?text=Logo4.png",
  "https://placehold.co/240x50?text=Logo5.png",
  "https://placehold.co/240x50?text=Logo6.png",
  "https://placehold.co/240x50?text=Logo7.png",
  "https://placehold.co/240x50?text=Logo8.png"
];

interface BrandLogosProps {
  rows?: number;
  title?: string;
  description?: string;
}

export const BrandLogosMarquee: React.FC<BrandLogosProps> = ({
  rows = 1,
  title,
  description,
}) => {
  return (
    <div className="py-10">
      {title && <h2 className="text-3xl font-bold text-center mb-2">{title}</h2>}
      {description && (
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">{description}</p>
      )}
      <div className="space-y-6">
        {[...Array(rows)].map((_, rowIndex) => (
          <Marquee
            key={rowIndex}
            gradient={false}
            speed={40}
            direction={rowIndex % 2 === 1 ? "right" : "left"}
            className="flex items-center space-x-6"
          >
            {placeholderLogos.map((logo, idx) => (
              <Image
                key={idx}
                src={logo}
                alt={`Logo ${idx}`}
                width={100}
                height={50}
                className="object-contain h-12 w-auto mx-4"
              />
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
};

export default BrandLogosMarquee;
