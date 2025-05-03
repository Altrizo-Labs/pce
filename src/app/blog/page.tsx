import { Suspense } from "react";
import { BlogHero } from "@/components/blog/blog-hero";
import { LatestBlogsSection } from "@/components/blog/latest-blogs-section";

export default function Blog() {
  return (
    <div className="mx-4 pt-24">
      <BlogHero />
      <Suspense
        fallback={
          <div className="container mx-auto px-4 py-20">
            Loading latest blogs...
          </div>
        }
      >
        <LatestBlogsSection />
      </Suspense>
    </div>
  );
}
