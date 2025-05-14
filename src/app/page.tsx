import CompanyOverview from "@/components/home/company-overview";
import Hero from "@/components/home/hero";
import KeyServicesSnapshot from "@/components/home/WhyChooseUs"; // Adapted WhyChooseUs for Key Services
import ProjectHighlights from "@/components/projects/ProjectHighlights"; // Import ProjectHighlights
import Testimonials from "@/components/home/Testimonials"; // Import Testimonials
import CTASection from "@/components/CTASection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection"; // Import WhyChooseUsSection

export default function Home() {
  return (
    <main className="mx-4 pt-20 lg:pt-24">
      <Hero />
      <CompanyOverview />
      <KeyServicesSnapshot />
      <ProjectHighlights limit={3} showViewMore />
      <WhyChooseUsSection /> {/* Add WhyChooseUsSection */}
      <Testimonials />
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
