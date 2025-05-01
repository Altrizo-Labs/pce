"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { BlogPostData } from "@/types/ghost";
import { formatDate } from "@/utils/format-date";
import { CategoryBadge } from "./category-badge";

interface BlogPostCardProps {
  post: BlogPostData;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col bg-white py-8 px-4 stroke-[#E9EAEB] rounded-[20px] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg border border-[#E9EAEB] ${
        isHovered ? "h-auto" : "h-[420px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-56 w-full overflow-hidden rounded-[16px]">
          <Image
            src={post.featureImage || "/placeholder.svg?height=400&width=600"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="flex pt-4 flex-col flex-grow">
        <div className="mb-4">
          <CategoryBadge
            name={post.category.name}
            slug={post.category.slug}
            color={post.category.color}
          />
        </div>

        <Link href={`/blog/${post.slug}`} className="block mb-2">
          <h3 className="text-[28px] font-medium text-[#181D27]">
            {post.title}
          </h3>
        </Link>

        <div className="text-gray-500 text-[16px] font-medium mb-2">{formatDate(post.publishedAt)}</div>

        <div
          className={`transition-all duration-300 ${
            isHovered ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          } flex flex-col justify-between`}
        >
          <p className="text-[#535862] text-[14px] mb-4">{post.excerpt}</p>

          <div className="flex justify-end mt-2">
            <ArrowRight className="text-yellow-400 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
