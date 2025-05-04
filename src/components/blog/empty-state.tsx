"use client";

import { Search } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  message?: string;
  onReset?: () => void;
  activeFilter?: string;
}

export default function EmptyState({
  title = "No posts found",
  message = "We couldn't find any posts matching your criteria.",
  onReset,
  activeFilter,
}: EmptyStateProps) {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-gray-100 rounded-full p-4 mb-4">
        <Search className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md">{message}</p>
      {onReset && activeFilter && (
        <button
          onClick={onReset}
          className="px-4 py-2 bg-[#2A6F7B] text-white rounded-md hover:bg-[#225962] transition-colors"
        >
          View All Posts
        </button>
      )}
    </div>
  );
}
