import FeaturesGrid from "@/components/features/FeaturesGrid";
import Pricing from "@/components/features/pricing";
import HeroBanner from "@/components/HeroBanner";

export default function FeaturesPage() {
  return (
    <div className="pt-32 mx-4">
      <HeroBanner
        video=""
        description="Driving the Next Wave of Student Engagement and Enrollment Through AI Innovation"
      />
      <Pricing />
      <FeaturesGrid />
    </div>
  );
}
