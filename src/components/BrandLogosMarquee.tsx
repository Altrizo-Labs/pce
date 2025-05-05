import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import fs from "fs";
import path from "path";

const clientsFolder = path.join(process.cwd(), "public/images/clients");
const clientLogos = fs
  .readdirSync(clientsFolder)
  .filter((file) => file.endsWith(".svg"))
  .map((file) => `/images/clients/${file}`);

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
    // Added overflow-hidden to contain the full-width marquee
    <div className="py-10 overflow-hidden">
      {/* Wrapper to keep title/description centered */}
      <div className="mx-auto text-center mb-10">
        {/* Updated title styles: Lato Bold 45px */}
        {title && <h2 className="font-lato font-bold text-[45px] mb-2">{title}</h2>}
        {/* Updated description styles: IBM Plex Sans Regular 20px */}
        {description && (
          <p className="font-ibm-plex-sans text-[20px] text-gray-600">{description}</p>
        )}
      </div>
      {/* Container for marquees, made full-width */}
      <div className="space-y-6 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        {[...Array(rows)].map((_, rowIndex) => (
          <Marquee
            key={rowIndex}
            gradient={false}
            speed={40}
            direction={rowIndex % 2 === 1 ? "right" : "left"}
            className="flex items-center space-x-6 py-9"
          >
            {clientLogos.map((logo, idx) => (
              <Image
                key={idx}
                src={logo}
                alt={`Logo ${idx}`}
                width={100}
                height={50}
                className="object-contain h-12 w-auto mx-12"
              />
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
};

export default BrandLogosMarquee;
