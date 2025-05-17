import React from "react";
import ServicesList from "@/components/services/ServicesList"; // Import ServicesList
import HeroBanner from "@/components/HeroBanner"; // Import HeroBanner
import FeatureHero from "../../../public/images/bg.svg"; // Import the image
import ServicesShowcase from "@/components/services/ServicesShowcase";

const ServicesPage: React.FC = () => {
  return (
    <div className="mx-4 pt-20 lg:pt-24">
      <HeroBanner
        image={FeatureHero}
        description="Comprehensive Quantity Surveying and Cost Engineering Solutions Tailored to Your Project Needs."
        title="Get a Quote" // This is the button text
        link="/contact"
      />
      <ServicesShowcase />
      <ServicesList />
    </div>
  );
};

export default ServicesPage;
