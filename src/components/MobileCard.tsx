"use client";

import React from "react";
import Image from "next/image";
import { CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export interface MobileCardProps {
  image: string; // Path to the image
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}
import RippleButton from "./RippleButton";

const MobileCard: React.FC<MobileCardProps> = ({
  image,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-auto lg:h-[70vh] xl:h-[80vh] 2xl:h-[60vh] relative">
      <div className=" relative rounded-md">
        <Image
          src={image}
          alt={title}
          height={500}
          width={600}
          className="rounded-lg object-cover"
          priority
        />
      </div>

      {/* Title & Description Section */}
      <div className="text-content text-start text-white rounded-lg max-w-2xl">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl geist-gtflexa">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs md:text-lg geist-satoshi">{description}</p>
          <RippleButton
            text={buttonText}
            url={buttonLink}
            className="w-[60%] bg-secondary border text-sm geist-satoshi border-primary py-3 px-4 whitespace-nowrap my-5"
            hoverColor="bg-primary"
            icon={true}
          />
        </CardContent>
      </div>
    </div>
  );
};

export default MobileCard;