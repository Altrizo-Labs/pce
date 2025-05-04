import { useQuery } from "@tanstack/react-query";
import ghostApi from "@/lib/axios";
import { API_ENDPOINTS, CACHE_TIMES } from "@/constants/api";
import type { GhostPostsResponse } from "@/types/ghost";

export const useGhostFeaturedPost = () => {
  return useQuery({
    queryKey: ["featuredPost"],
    queryFn: async () => {
      try {
        const response = await ghostApi.get<GhostPostsResponse>(
          API_ENDPOINTS.POSTS,
          {
            params: {
              limit: 1,
              include: "tags,authors",
              filter: "featured:true",
              order: "published_at DESC",
            },
          }
        );
        return response.data.posts[0] || null;
      } catch (error) {
        console.error("Error fetching featured post:", error);
        throw error;
      }
    },
    staleTime: CACHE_TIMES.POSTS,
    retry: 2,
  });
};
