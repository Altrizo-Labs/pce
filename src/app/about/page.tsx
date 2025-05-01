import CTASection from "@/components/CTASection";
import HeroBanner from "@/components/HeroBanner";

export default function AboutPage() {
  return (
    <div className="pt-32 mx-4">
      <HeroBanner video="/test.mp4" description="Driving the Next Wave of Student Engagement and Enrollment Through AI Innovation" />
      <CTASection
      title="Discover the Ideas, Innovations, and Insights Shaping the Future of Education and Student Engagement"
      description="From AI breakthroughs to transformative strategies in higher ed, our blog keeps you informed, inspired, and ahead of the curve."
      buttonText="Browse Insights"
      buttonLink="#careers"
      imagePosition="right"
    />
    </div>
  );
}