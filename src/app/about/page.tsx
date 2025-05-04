import CTASection from "@/components/CTASection";
import HeroBanner from "@/components/HeroBanner";
import WhatDrivesUs from "@/components/about/WhatDrivesUs"; // Import the new component
import AboutUsSection from "@/components/about/about-us";
import TeamSection from "@/components/about/team-section";

export default function AboutPage() {
  return (
    <div className="mx-4 pt-24">
      <HeroBanner
        video="/test.mp4"
        description="Driving the Next Wave of Student Engagement and Enrollment Through AI Innovation"
      />
      <AboutUsSection />
      <WhatDrivesUs /> {/* Add the WhatDrivesUs section */}
      <CTASection
        title="Discover the Ideas, Innovations, and Insights Shaping the Future of Education and Student Engagement"
        description="From AI breakthroughs to transformative strategies in higher ed, our blog keeps you informed, inspired, and ahead of the curve."
        buttonText="Browse Insights"
        buttonLink="#careers"
        imagePosition="right"
      />
      <TeamSection />
    </div>
  );
}
