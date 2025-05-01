import { getPosts } from "@/lib/ghost-api";
import { BlogPostData } from "@/types/ghost";
import { useQuery } from "@tanstack/react-query";

// Map of category slugs to their respective colors
// const categoryColorMap: Record<string, string> = {
//   "ai-in-education": "bg-[#7F56D9]",
//   "student-engagement": "bg-[#17B26A]",
//   "edtech-trends": "bg-[#5D97EB]",
//   "institutional-success": "bg-[#3DADFF]",
// };

const categoryColorMap: Record<string, string> = {
  fables: "#7F56D9",
  "getting-started": "#17B26A",
  speeches: "#5D97EB",
  fiction: "#3DADFF",
};

export function useBlogPosts(page = 1, limit = 9) {
  return useQuery({
    queryKey: ["posts", page, limit],
    queryFn: async (): Promise<{
      posts: BlogPostData[];
      pagination: {
        pages: number;
        total: number;
        page: number;
        limit: number;
        next: number | null;
        prev: number | null;
      };
    }> => {
      const { posts, meta } = await getPosts(page, limit);

      // Transform Ghost posts to our BlogPostData format
      const transformedPosts = posts.map((post) => {
        const primaryTag = post.primary_tag ||
          post.tags[0] || { name: "Uncategorized", slug: "uncategorized" };

        // Truncate the excerpt if it's longer than 150 characters
        const truncatedExcerpt = post.excerpt && post.excerpt.length > 150
          ? post.excerpt.substring(0, 150) + "..."
          : post.excerpt;

        return {
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: truncatedExcerpt, // Use the truncated excerpt
          featureImage: post.feature_image,
          publishedAt: post.published_at,
          category: {
            name: primaryTag.name,
            slug: primaryTag.slug,
            color: categoryColorMap[primaryTag.slug] || "bg-gray-200", // Default color if slug not found
          },
        };
      });

      return {
        posts: transformedPosts,
        pagination: meta.pagination,
      };
    },
  });
}
