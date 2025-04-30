import CompanyOverview from "@/components/home/company-overview";
import Hero from "@/components/home/hero";
import Testimonials from "@/components/home/Testimonials"; // Import Testimonials
import TransformEducationSection from "@/components/home/TransformEducationSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return <main className="mx-4 pt-32">
    <Hero />
    <CompanyOverview />
    <WhyChooseUs />
    <TransformEducationSection />
    <Testimonials />

  </main>;
}
