import { CategoryData } from "@/types/ghost";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CategoryIcon } from "./category-icon";

interface CategoryCardProps {
  category: CategoryData;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className={`block rounded-xl p-8 w-[580px] transition-transform hover:scale-[1.02]`}
      style={{
        background: `${category.accentColor}`,
      }}
    >
      <div className="flex flex-col h-full">
        <div className="rounded-full w-16 h-16 flex items-center justify-center mb-6">
          <CategoryIcon name={category.icon} className="text-white" />
        </div>

        <h3 className="text-white text-[32px] font-bold mb-2">
          {category.name}
        </h3>

        <p className="text-white/90 text-xl mb-6 flex-grow">
          {category.description}
        </p>

        <div className="flex justify-end">
          <ArrowRight className="text-yellow-300 w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}
