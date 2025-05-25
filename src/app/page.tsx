import { Metadata } from 'next';
import CompanyOverview from "@/components/home/company-overview";
import Hero from "@/components/home/hero";
import InfiniteMovingText from "@/components/home/InfiniteMovingText"; // Import the new component
import KeyServicesSnapshot from "@/components/home/WhyChooseUs"; // Adapted WhyChooseUs for Key Services
import ProjectHighlights from "@/components/projects/ProjectHighlights"; // Import ProjectHighlights
import dynamic from 'next/dynamic';
import StickyScrollReveal from "@/components/home/StickyScrollReveal";
import ScrollReveal from "@/components/home/MobileScrollReveal";

const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });

export const metadata: Metadata = {
  title: "Home | Projects Cost Engineering (PCE) - Expert Quantity Surveying & Cost Engineering",
  description: "Projects Cost Engineering (PCE) offers expert quantity surveying, cost engineering, and project management services in Sri Lanka and Oman. 25+ years of experience.",
  keywords: "Quantity Surveying Sri Lanka, Cost Engineering Oman, Project Management, Construction Cost, PCE, Projects Cost Engineering, Pre-Contract Services, Post-Contract Services",
};

export default function Home() {
  return (
    <main className="mx-4 pt-20 lg:pt-24">
      <Hero />
      <InfiniteMovingText />
      <CompanyOverview />
      <KeyServicesSnapshot />
      <ProjectHighlights limit={3} showViewMore />
      <div className="hidden lg:block">
          <StickyScrollReveal />
        </div>
        <div className="block lg:hidden">
          <ScrollReveal />
        </div> 
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
