import CompanyOverview from "@/components/home/company-overview";
import Hero from "@/components/home/hero";
import TransformEducationSection from "@/components/home/TransformEducationSection";

export default function Home() {
  return <main className="mx-4 pt-32">
    <Hero />
    <CompanyOverview />
    <TransformEducationSection />
  </main>;
}
