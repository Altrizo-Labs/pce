import React from 'react';
import ServicesList from '@/components/services/ServicesList'; // Import ServicesList
import HeroBanner from "@/components/HeroBanner"; // Import HeroBanner
import FeatureHero from "../../../public/images/bg.svg"; // Import the image

const ServicesPage: React.FC = () => {
  return (
    <div className="mx-4 pt-20 lg:pt-24">
      <HeroBanner
        image={FeatureHero}
        description="Comprehensive Quantity Surveying and Cost Engineering Solutions Tailored to Your Project Needs."
        title="Get a Quote" // This is the button text
        link="/contact"
      />
      {/* The h1 title is removed as HeroBanner will provide the visual intro */}
      <div className="my-8 md:my-12"> {/* Added margin for spacing */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#181D27]">
          Our Core Services
        </h2>
        <ServicesList />
      </div>
    </div>
  );
};

export default ServicesPage;
