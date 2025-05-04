"use client";

import { AlertTriangle } from "lucide-react";

interface ErrorMessageProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export default function ErrorMessage({
  title = "Something went wrong",
  message = "We couldn't load the posts. Please try again later.",
  onRetry,
}: ErrorMessageProps) {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-red-50 rounded-full p-4 mb-4">
        <AlertTriangle className="h-8 w-8 text-red-500" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-[#2A6F7B] text-white rounded-md hover:bg-[#225962] transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
