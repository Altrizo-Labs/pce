"use client";
import { useCategories } from "@/hooks/use-categories";
import { CategoryCard } from "./category-card";

export function CategoriesGrid() {
  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-xl bg-gray-200 animate-pulse h-64" />
        ))}
      </div>
    );
  }

  if (error || !categories) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Failed to load categories</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
