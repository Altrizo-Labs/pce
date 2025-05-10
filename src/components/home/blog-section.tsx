"use client";

import { useGhostPosts } from "@/hooks/useGhostPosts";
import PostCard from "@/components/blog/post-card";
import PostCardSkeleton from "@/components/blog/post-card.skeleton";
import RippleButton from "../RippleButton";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState, useRef, useEffect } from "react";

export default function BlogSection() {
  // Fetch the latest 4 posts
  const { data, isLoading, error } = useGhostPosts({
    limit: 4,
  });

  const isMobile = useMediaQuery("(max-width: 767px)");
  const posts = data?.posts || [];
  const [hasStartedSwiping, setHasStartedSwiping] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to handle user interaction with the scroll container
  const handleScroll = () => {
    if (!hasStartedSwiping) {
      setHasStartedSwiping(true);
    }
  };

  // Function to handle touch start on mobile
  const handleTouchStart = () => {
    if (!hasStartedSwiping) {
      setHasStartedSwiping(true);
    }
  };

  // Reset swiping state when component unmounts or mobile state changes
  useEffect(() => {
    setHasStartedSwiping(false);
  }, [isMobile]);

  return (
    <section className="py-16 md:py-24">
      <div className="container sm:h-[700px] h-[800px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#181D27] mb-3 font-lato">
              From the Edusight Blog
            </h2>
            <p className="text-lg text-gray-600 font-ibm-plex-sans">
              Insights, trends, and ideas shaping the future of education.
            </p>
          </div>
          {!isMobile && (
            <RippleButton
              text="View More"
              className="bg-white border border-primary rounded-full text-primary font-bold font-lato w-auto py-2 lg:py-3 md:px-6 lg:px-6 whitespace-nowrap text-black text-sm md:text-base z-50"
              url="/blog"
              yellowIcon
            />
          )}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <PostCardSkeleton key={index} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              Failed to load blog posts. Please try again later.
            </p>
          </div>
        ) : posts.length > 0 ? (
          <>
            {isMobile ? (
              <div className="relative">
                {!hasStartedSwiping && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
                    <div className="bg-primary p-2 rounded-full shadow-lg swipe-arrow-container border border-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-swipe-hint"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                )}
                <div
                  ref={scrollContainerRef}
                  className="overflow-x-auto pb-6 -mx-4 px-4"
                  onScroll={handleScroll}
                  onTouchStart={handleTouchStart}
                >
                  <div className="flex gap-4" style={{ width: "max-content" }}>
                    {posts.map((post) => (
                      <div
                        key={post.id}
                        style={{
                          width: "85vw",
                          maxWidth: "320px",
                          flex: "0 0 auto",
                        }}
                      >
                        <PostCard post={post} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}
            {isMobile && (
              <div className="flex justify-center mt-6">
                <RippleButton
                  text="View More"
                  className="bg-white border border-primary rounded-full text-primary font-bold font-lato w-auto py-2 px-6 whitespace-nowrap text-black text-sm z-50"
                  url="/blog"
                  yellowIcon
                />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">No blog posts found.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes swipeHint {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-swipe-hint {
          animation: swipeHint 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
