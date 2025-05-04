"use client";

import { useRef } from "react";
import type { GhostTag } from "@/types/ghost";

interface CategoryFiltersProps {
  tags: GhostTag[];
  activeFilter: string;
  onFilterChange: (slug: string) => void;
  isLoading: boolean;
}

export default function CategoryFilters({
  tags,
  activeFilter,
  onFilterChange,
  isLoading,
}: CategoryFiltersProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Prepare categories from fetched tags
  const categories = [
    { name: "View all", slug: "" },
    ...tags.map((tag) => ({ name: tag.name, slug: tag.slug })),
  ];

  return (
    <div className="mb-12 relative overflow-hidden">
      {/* Outer container with padding */}
      <div className="px-10">
        {" "}
        {/* 40px padding on both sides */}
        {/* Scroll container with negative margins to extend beyond padding */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 pb-4 overflow-x-auto scrollbar-hide -mx-10"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingLeft: "60px",
            paddingRight: "60px",
          }}
        >
          {isLoading
            ? // Loading state
              Array(5)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="whitespace-nowrap px-6 py-4 rounded-md text-center min-w-[210px] min-h-[68px] bg-gray-100 animate-pulse"
                  ></div>
                ))
            : // Actual categories
              categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => onFilterChange(category.slug)}
                  className={`
                    whitespace-nowrap px-6 py-4 rounded-lg text-center font-ibm-plex-sans font-medium min-w-[210px] min-h-[68px] transition-colors font-medium
                    ${
                      (category.slug === "" && activeFilter === "") ||
                      category.slug === activeFilter
                        ? "bg-[#1E3A8A] text-white"
                        : "bg-white text-black border border-[#1E3A8A]"
                    }
                  `}
                >
                  {category.name}
                </button>
              ))}

          {/* Add an extra invisible spacer at the end to ensure proper padding when scrolled all the way */}
          <div className="min-w-[40px] h-1"></div>
        </div>
      </div>
    </div>
  );
}
