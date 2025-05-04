"use client";

import { ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  nextPage: number | null;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  nextPage,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-12">
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              currentPage === page
                ? "bg-[#ECEFF1] text-black"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
        {nextPage && (
          <button
            onClick={() => onPageChange(nextPage)}
            className="w-8 h-8 flex items-center justify-center rounded-full text-[#1E3A8A]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
