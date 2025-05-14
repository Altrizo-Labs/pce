import React from 'react';
import ProjectHighlights from '@/components/projects/ProjectHighlights'; // Import ProjectHighlights
import HeroBanner from "@/components/HeroBanner"; // Import HeroBanner
import FeatureHero from "../../../public/images/bg.svg"; // Import the image

const ProjectsPage: React.FC = () => {
  return (
    <div className="mx-4 pt-20 lg:pt-24">
      <HeroBanner
        image={FeatureHero}
        description="Showcasing Our Proven Track Record in Delivering Excellence Across Diverse Project Sectors."
        title="Discuss Your Project" // This is the button text
        link="/contact"
      />
      {/* The h1 title is removed as HeroBanner will provide the visual intro */}
      <div className="text-center my-8 md:my-12"> {/* Added margin for spacing */}
        <p className="text-2xl font-lato font-bold text-[#181D27]">Completed Over 100 Projects in Oman</p>
      </div>
      <ProjectHighlights />
    </div>
  );
};

export default ProjectsPage;
