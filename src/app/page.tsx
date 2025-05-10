import CompanyOverview from "@/components/home/company-overview";
import Hero from "@/components/home/hero";
import Testimonials from "@/components/home/Testimonials"; // Import Testimonials
import TransformEducationSection from "@/components/home/TransformEducationSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BrandLogosMarquee from "@/components/BrandLogosMarquee";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/home/blog-section";

export default function Home() {
  return (
    <main className="mx-4 pt-20 lg:pt-24">
      <Hero />
      <CompanyOverview />
      <WhyChooseUs />
      <BrandLogosMarquee />
      <TransformEducationSection />
      <Testimonials />
      <CTASection
        title="Be Part of the Team That's Transforming Education Through the Power of Artificial Intelligence"
        description="Join us on our mission to build smarter tools for schools and universities, and make a lasting impact on the future of learning."
        buttonText="Get Started"
        buttonLink="/contact"
        imagePosition="left"
      />
      <BlogSection />
    </main>
  );
}
