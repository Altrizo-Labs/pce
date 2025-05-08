"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { GhostPost } from "@/types/ghost";

interface PostCardProps {
  post: GhostPost;
}

export default function PostCard({ post }: PostCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col bg-white py-8 px-4 stroke-[#E9EAEB] rounded-[20px] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg border border-[#E9EAEB] ${
        isHovered ? "h-auto" : "h-[500px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-56 w-full overflow-hidden rounded-[16px]">
          <Image
            src={post.feature_image || "/placeholder.svg?height=400&width=600"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="flex pt-4 flex-col flex-grow">
        <div className="mb-4">
          <span className="text-[#1E3A8A] text-xs font-medium font-ibm-plex-sans">
            {post.primary_tag?.name || post.tags?.[0]?.name || "TOPIC"}
          </span>
        </div>

        <Link href={`/blog/${post.slug}`} className="block mb-2">
          <h3 className="text-[28px] font-lato font-medium text-[#181D27]">
            {post.title}
          </h3>
        </Link>

        <div className="text-gray-500 text-[16px] font-ibm-plex-sans font-medium mb-2">
          {new Date(post.published_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>

        <div
          className={`transition-all duration-300 ${
            isHovered
              ? "max-h-[200px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          } flex flex-col justify-between`}
        >
          <p className="text-[#535862] font-ibm-plex-sans text-[14px] mb-4">
            {" "}
            {post.excerpt && post.excerpt.length > 150
              ? `${post.excerpt.substring(0, 150)}...`
              : post.excerpt}
          </p>

          <div className="flex justify-end mt-2">
            <ArrowRight className="text-yellow-400 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
