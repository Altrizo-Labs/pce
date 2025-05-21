import CompanyOverview from "@/components/home/company-overview";
import Hero from "@/components/home/hero";
import InfiniteMovingText from "@/components/home/InfiniteMovingText"; // Import the new component
import KeyServicesSnapshot from "@/components/home/WhyChooseUs"; // Adapted WhyChooseUs for Key Services
import ProjectHighlights from "@/components/projects/ProjectHighlights"; // Import ProjectHighlights
import Testimonials from "@/components/home/Testimonials"; // Import Testimonials
import CTASection from "@/components/CTASection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection"; // Import WhyChooseUsSection
import StickyScrollReveal from "@/components/home/StickyScrollReveal";
import ScrollReveal from "@/components/home/MobileScrollReveal";

export default function Home() {
  return (
    <main className="mx-4 pt-20 lg:pt-24">
      <Hero />
      <InfiniteMovingText />
      <CompanyOverview />
      <KeyServicesSnapshot />
      <ProjectHighlights limit={3} showViewMore />
      {/* <WhyChooseUsSection /> */}
      <div className="hidden lg:block">
          <StickyScrollReveal />
        </div>
        <div className="block lg:hidden">
          <ScrollReveal />
        </div> 
      {/* <Testimonials /> */}
      <CTASection
        title="Ready to Discuss Your Project?"
        description="Contact us today to learn how Projects Cost Engineering (Pvt) Ltd can provide expert Quantity Surveying and Cost Engineering solutions for your next project."
        buttonText="Contact Us"
        buttonLink="/contact"
        imagePosition="right"
      />
    </main>
  );
}
