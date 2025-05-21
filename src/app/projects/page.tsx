import React from 'react';
import { Metadata } from 'next';
import ProjectHighlights from '@/components/projects/ProjectHighlights'; // Import ProjectHighlights
import HeroBanner from "@/components/HeroBanner"; // Import HeroBanner

export const metadata: Metadata = {
  title: "Projects | Projects Cost Engineering (PCE) - Our Portfolio",
  description: "View the portfolio of completed projects by Projects Cost Engineering (PCE) in Oman, showcasing our expertise in infrastructure, buildings, and more. Over 100 projects delivered.",
  keywords: "PCE Projects, Oman Construction Projects, Infrastructure Projects Oman, Building Projects Oman, Leisure Theme Projects, Landscaping Projects, Quantity Surveying Portfolio, Cost Engineering Case Studies",
};

const ProjectsPage: React.FC = () => {
  return (
    <div className="mx-4 pt-20 lg:pt-24">
      <HeroBanner
        image="/images/avif/project-urban-construction.avif"
        description="Showcasing Our Proven Track Record in Delivering Excellence Across Diverse Project Sectors."
        title="Discuss Your Project" // This is the button text
        link="/contact"
      />
    
      <ProjectHighlights />
    </div>
  );
};

export default ProjectsPage;
