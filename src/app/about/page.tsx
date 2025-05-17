import WhatDrivesUs from "@/components/about/WhatDrivesUs";
import AboutUsSection from "@/components/about/about-us";
import TeamSection from "@/components/about/team-section";
import DirectorProfile from "@/components/about/DirectorProfile"; // Import DirectorProfile
import PartnershipSection from "@/components/about/PartnershipSection"; // Import PartnershipSection
import CTASection from "@/components/CTASection"; // Import CTASection

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
