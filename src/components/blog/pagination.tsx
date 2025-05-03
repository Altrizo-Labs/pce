import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  // Only show up to 5 page links
  const pageNumbers = [];
  const maxPagesToShow = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={`${basePath}${page === 1 ? "" : `?page=${page}`}`}
          className={`inline-flex items-center justify-center w-8 h-8 text-sm ${
            currentPage === page
              ? "font-bold text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="inline-flex items-center justify-center w-8 h-8 text-yellow-400"
        >
          <ArrowRight className="w-5 h-5" />
        </Link>
      )}
    </div>
  );
}
