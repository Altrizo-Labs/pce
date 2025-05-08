import { useQuery } from "@tanstack/react-query";
import ghostApi from "@/lib/axios";
import { API_ENDPOINTS, CACHE_TIMES } from "@/constants/api";
import type { GhostPostsResponse } from "@/types/ghost";

export const useGhostPost = (slug: string) => {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      try {
        const response = await ghostApi.get<GhostPostsResponse>(
          API_ENDPOINTS.POST + slug,
          {
            params: {
              include: "tags,authors",
            },
          }
        );
        return response.data.posts[0] || null;
      } catch (error) {
        console.error("Error fetching post:", error);
        throw error;
      }
    },
    staleTime: CACHE_TIMES.POSTS,
    retry: 2,
    enabled: !!slug,
  });
};
