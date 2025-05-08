import BrandLogosMarquee from "@/components/BrandLogosMarquee";
import CTASection from "@/components/CTASection";
import HeroBanner from "@/components/HeroBanner";
import WhatDrivesUs from "@/components/about/WhatDrivesUs";
import AboutUsSection from "@/components/about/about-us";
import TeamSection from "@/components/about/team-section";

export default function AboutPage() {
  return (
    <div className="mx-4 pt-20 lg:pt-24">
      <HeroBanner
        video="/test.mp4"
        description="Driving the Next Wave of Student Engagement and Enrollment Through AI Innovation"
      />
      <AboutUsSection />
      <CTASection
        title="Discover the Ideas, Innovations, and Insights Shaping the Future of Education and Student Engagement"
        description="From AI breakthroughs to transformative strategies in higher ed, our blog keeps you informed, inspired, and ahead of the curve."
        buttonText="Browse Insights"
        buttonLink="#careers"
        imagePosition="right"
      />
      <BrandLogosMarquee
        title="Trusted by Leading Educational Institutions"
        description="Partnering with universities and educational organizations that are redefining student engagement through technology."
        rows={2}
      />
      <WhatDrivesUs />
      <TeamSection />
    </div>
  );
}
