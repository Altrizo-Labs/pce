import { Metadata } from 'next';
import WhatDrivesUs from "@/components/about/WhatDrivesUs";
import AboutUsSection from "@/components/about/about-us";
import TeamSection from "@/components/about/team-section";
import DirectorProfile from "@/components/about/DirectorProfile"; // Import DirectorProfile
import PartnershipSection from "@/components/about/PartnershipSection"; // Import PartnershipSection
import CTASection from "@/components/CTASection"; // Import CTASection

export const metadata: Metadata = {
  title: "About Us | Projects Cost Engineering (PCE) - Our Story & Expertise",
  description: "Learn about Projects Cost Engineering (PCE), our experienced team, our partnership with DSO, and our commitment to international standards in quantity surveying and cost engineering.",
  keywords: "About PCE, PCE Team, Director Profile, Daan Shaaban Office DSO, International Standards, Quantity Surveying Experts, Cost Engineering Sri Lanka",
};

export default function AboutPage() {
  return (
    <div className="mx-4 pt-20 lg:pt-24">
      <AboutUsSection />
      <DirectorProfile />
      <PartnershipSection />
      {/* <WhatDrivesUs /> */}
      <TeamSection />
      <CTASection
        title="Partner with PCE for Your Next Project"
        description="Discover how our expertise, experience, and commitment to international standards can bring value to your construction projects. Let's build the future together."
        buttonText="Get in Touch"
        buttonLink="/contact"
        imagePosition="left"
      />
    </div>
  );
}
