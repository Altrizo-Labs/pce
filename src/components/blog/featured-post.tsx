"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useGhostFeaturedPost } from "@/hooks/useGhostFeaturedPost";
import { formatDate } from "@/utils/format-date";
import { HeroTitle } from "./hero-title";

export default function FeaturedPost() {
  const { data: post, isLoading, error } = useGhostFeaturedPost();

  // If there's an error or no featured post, don't render anything
  if (error || !post) {
    return null;
  }

  // Show a placeholder while loading
  if (isLoading) {
    return (
      <div className="w-full max-w-7xl mx-auto mb-16 animate-pulse">
        <div className="h-[500px] bg-gray-200 rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto mb-16">
      <HeroTitle />
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative w-full max-w-max-[1190px] h-[500px] rounded-lg overflow-hidden">
          <Image
            src={post.feature_image || "/placeholder.svg?height=500&width=1200"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
      </Link>

      <div className="mb-8 mt-4">
        <span className="text-[#1E3A8A] text-md font-ibm-plex-sans font-medium rounded-full">
          {post.primary_tag?.name || post.tags?.[0]?.name || ""}
        </span>
      </div>

      <h2 className="text-2xl font-lato md:text-4xl font-medium text-[#181D27] mb-2">
        {post.title}
      </h2>

      <div className="text-black font-ibm-plex-sans mb-4">
        {formatDate(post.published_at)}
      </div>

      <p className="text-[#535862] font-ibm-plex-sans mb-6 max-w-3xl line-clamp-2 md:line-clamp-3">
        {post.excerpt}
      </p>

      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="flex justify-end">
          <ArrowRight className="text-[#FCCF37] w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </Link>
    </div>
  );
}
