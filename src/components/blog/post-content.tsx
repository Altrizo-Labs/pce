"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { formatDate } from "@/utils/format-date";
import type { GhostPost } from "@/types/ghost";

interface PostContentProps {
  post: GhostPost;
}

export default function PostContent({ post }: PostContentProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all posts
      </Link>

      {/* Post header */}
      <header className="mb-8">
        {post.primary_tag && (
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            {post.primary_tag.name}
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-[#181D27] mb-4 font-lato">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600 mb-6">
          <time dateTime={post.published_at}>
            {formatDate(post.published_at)}
          </time>
          {post.primary_author && (
            <>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                {post.primary_author.profile_image && (
                  <Image
                    src={
                      post.primary_author.profile_image || "/placeholder.svg"
                    }
                    alt={post.primary_author.name}
                    width={24}
                    height={24}
                    className="rounded-full mr-2"
                  />
                )}
                <span>{post.primary_author.name}</span>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Featured image */}
      {post.feature_image && (
        <div className="relative w-full aspect-[16/9] mb-10 rounded-lg overflow-hidden">
          <Image
            src={post.feature_image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Post content */}
      <div
        className="prose prose-lg max-w-none prose-headings:font-lato prose-headings:text-[#181D27] prose-p:text-gray-700 prose-p:font-ibm-plex-sans prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg mb-12"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
