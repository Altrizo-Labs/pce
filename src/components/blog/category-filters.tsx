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
    <div className="mb-12 relative">
      {/* Outer container with padding */}
      <div className="px-4 md:px-10">
        {/* Custom scrollbar styling for mobile */}
        <style jsx global>{`
          @media (max-width: 768px) {
            .custom-scrollbar::-webkit-scrollbar {
              height: 6px;
              display: block;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #888;
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #555;
            }
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: #888 #f1f1f1;
            }
          }
        `}</style>

        {/* Scroll container with visible scrollbar on mobile */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 pb-4 overflow-x-auto -mx-4 md:-mx-10 relative custom-scrollbar"
          style={{
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          {isLoading
            ? // Loading state
              Array(5)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="whitespace-nowrap px-6 py-4 rounded-md text-center min-w-[180px] md:min-w-[210px] min-h-[60px] md:min-h-[68px] bg-gray-100 animate-pulse"
                  ></div>
                ))
            : // Actual categories
              categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => onFilterChange(category.slug)}
                  className={`
                    whitespace-nowrap px-4 md:px-6 py-3 md:py-4 rounded-lg text-center font-ibm-plex-sans font-medium min-w-[160px] md:min-w-[210px] min-h-[56px] md:min-h-[68px] transition-colors
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
        
        {/* Add padding below to accommodate visible scrollbar on mobile */}
        <div className="h-2 md:h-0"></div>
      </div>
    </div>
  );
}