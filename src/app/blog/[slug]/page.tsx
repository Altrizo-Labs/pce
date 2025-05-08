"use client";

export const runtime = 'edge';
import { useParams } from "next/navigation";
import { useGhostPost } from "@/hooks/useGhostPost";
import PostContent from "@/components/blog/post-content";
import { useEffect } from "react";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  console.log("Params:", params);
  const slug = params?.slug as string;
  console.log("Slug:", slug);
  const { data: post, isLoading, error } = useGhostPost(slug);
  console.log("Post data:", post);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Handle error state
  if (error || !post) {
    return (
      <div className="mx-4 pt-20 lg:pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Post not found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <a
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-4 pt-20 lg:pt-24 pb-16">
      <PostContent post={post} />
    </div>
  );
}
