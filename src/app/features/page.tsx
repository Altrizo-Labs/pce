import CTASection from "@/components/CTASection";
import FeaturesGrid from "@/components/features/FeaturesGrid";
import Pricing from "@/components/features/pricing";
import HeroBanner from "@/components/HeroBanner";

export default function FeaturesPage() {
  return (
    <div className="pt-32 mx-4">
      <HeroBanner
        video="/test.mp4"
        description="Transforming Student Recruitment With Intelligent Conversations and Powerful Insights"
      />
      <FeaturesGrid />
      <CTASection
      title="Get to Know the Team Behind EduSight and Our Vision for Transforming Education"
      description="Learn more about our mission, values, and how we're revolutionizing student engagement with AI-powered solutions."
      buttonText="Explore Our Story"
      buttonLink="#careers"
      imagePosition="right"
    />
    <Pricing />
    </div>
  );
}
