import { CategoriesGrid } from "./categories-grid";
import { ExploreTitle } from "./explore-title";
import { HeroTitle } from "./hero-title";

export function BlogHero() {
  return (
    <section className="container mx-auto px-4 py-16">
      <HeroTitle />
      <ExploreTitle />
      <CategoriesGrid />
    </section>
  );
}
