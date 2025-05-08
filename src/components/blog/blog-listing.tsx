"use client";
import { useState, useEffect } from "react";
import { useGhostPosts } from "@/hooks/useGhostPosts";
import { useGhostTags } from "@/hooks/useGhostTags";
import CategoryFilters from "./category-filters";
import EmptyState from "./empty-state";
import ErrorMessage from "./error-message";
import Pagination from "./pagination";
import PostCard from "./post-card";
import PostCardSkeleton from "./post-card.skeleton";

export default function BlogListing() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("");

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // Fetch tags from Ghost API
  const {
    data: tagsData,
    isLoading: isTagsLoading,
    error: tagsError,
    refetch: refetchTags,
  } = useGhostTags();

  // Fetch posts based on selected tag and page
  const {
    data: postsData,
    isLoading: isPostsLoading,
    error: postsError,
    refetch: refetchPosts,
  } = useGhostPosts({
    page: currentPage,
    tag: activeFilter,
  });

  // Handle filter change
  const handleFilterChange = (slug: string) => {
    setActiveFilter(slug);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of the blog grid
    const blogGrid = document.querySelector(".grid");
    if (blogGrid) {
      blogGrid.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reset filters
  const handleResetFilters = () => {
    setActiveFilter("");
    setCurrentPage(1);
  };

  // Retry loading posts
  const handleRetryPosts = () => {
    refetchPosts();
  };

  // Retry loading tags
  const handleRetryTags = () => {
    refetchTags();
  };

  // Get pagination data
  const pagination = postsData?.meta?.pagination || {
    page: 1,
    pages: 1,
    next: null,
    prev: null,
  };

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-[45px] font-lato font-bold text-[#181D27] mb-10">
          Latest Blogs
        </h2>

        {/* Tags Error State */}
        {tagsError ? (
          <div className="mb-12">
            <ErrorMessage
              title="Failed to load categories"
              message="We couldn't load the blog categories. Please try again later."
              onRetry={handleRetryTags}
            />
          </div>
        ) : (
          /* Category Filters */
          <CategoryFilters
            tags={tagsData?.tags || []}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            isLoading={isTagsLoading}
          />
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isPostsLoading ? (
            // Loading skeleton
            Array(9)
              .fill(0)
              .map((_, index) => <PostCardSkeleton key={index} />)
          ) : postsError ? (
            // Error state
            <ErrorMessage
              title="Failed to load posts"
              message="We couldn't load the blog posts. Please try again later."
              onRetry={handleRetryPosts}
            />
          ) : postsData?.posts && postsData.posts.length > 0 ? (
            // Posts grid
            postsData.posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            // No posts found
            <EmptyState
              title="No posts found"
              message={
                activeFilter
                  ? `We couldn't find any posts in the "${
                      tagsData?.tags.find((t) => t.slug === activeFilter)
                        ?.name || "selected"
                    }" category.`
                  : "We couldn't find any posts. Please check back later."
              }
              onReset={handleResetFilters}
              activeFilter={activeFilter}
            />
          )}
        </div>

        {/* Pagination - Only show if there are posts and multiple pages */}
        {postsData?.posts &&
          postsData.posts.length > 0 &&
          pagination.pages > 1 && (
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.pages}
              onPageChange={handlePageChange}
              nextPage={pagination.next}
            />
          )}
      </div>
    </section>
  );
}
