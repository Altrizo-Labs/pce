import React from "react";
import { Metadata } from 'next';
import ServicesList from "@/components/services/ServicesList"; // Import ServicesList
import HeroBanner from "@/components/HeroBanner"; // Import HeroBanner
import ServicesShowcase from "@/components/services/ServicesShowcase";

export const metadata: Metadata = {
  title: "Services | Projects Cost Engineering (PCE) - Quantity Surveying & Cost Management",
  description: "Explore the comprehensive pre-contract and post-contract quantity surveying and cost engineering services offered by Projects Cost Engineering (PCE).",
  keywords: "Quantity Surveying Services, Cost Engineering Services, Pre-Contract QS, Post-Contract QS, Cost Management, Project Cost Control, PCE Services, Construction Estimating",
};

const ServicesPage: React.FC = () => {
  return (
    <div className="mx-4 pt-20 lg:pt-24">
      <HeroBanner
        image="/images/avif/service-project-management-design.avif"
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
