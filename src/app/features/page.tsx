
import FeaturesGrid from '@/components/features/FeaturesGrid';
import Pricing from '@/components/features/pricing';


export default function FeaturesPage() {
  return (
    <div className="pt-32">
      <Pricing />
      <FeaturesGrid/>
    </div>
  );
}