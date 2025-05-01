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
      <Pricing />
      <FeaturesGrid />
    </div>
  );
}
