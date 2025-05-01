"use client";

import { useBlogPosts } from "@/hooks/use-blog-posts";
import { useSearchParams } from "next/navigation";
import { BlogPostCard } from "./blog-post-card";
import { Pagination } from "./pagination";

export function BlogPostsGrid() {
  const searchParams = useSearchParams();
  const page = Number.parseInt(searchParams.get("page") || "1", 10);
  const { data, isLoading, error } = useBlogPosts(page);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl overflow-hidden shadow-sm h-96"
          >
            <div className="h-56 bg-gray-200 animate-pulse" />
            <div className="p-6 space-y-4">
              <div className="h-8 w-36 bg-gray-200 animate-pulse rounded-full" />
              <div className="h-8 w-full bg-gray-200 animate-pulse" />
              <div className="h-5 w-32 bg-gray-200 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Failed to load blog posts</p>
      </div>
    );
  }

  const { posts, pagination } = data;

  console.log("BlogPostsGrid", posts, pagination);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      {pagination.pages > 1 && (
        <Pagination
          currentPage={pagination.page}
          totalPages={pagination.pages}
          basePath="/blog"
        />
      )}
    </>
  );
}
