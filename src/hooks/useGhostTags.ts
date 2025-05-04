import { useQuery } from "@tanstack/react-query";
import ghostApi from "@/lib/axios";
import { API_ENDPOINTS, CACHE_TIMES, PAGINATION } from "@/constants/api";
import type { GhostTagsResponse } from "@/types/ghost";

export const useGhostTags = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      try {
        const response = await ghostApi.get<GhostTagsResponse>(
          API_ENDPOINTS.TAGS,
          {
            params: {
              limit: PAGINATION.ALL,
              include: "count.posts",
              order: "count.posts DESC",
              filter: "visibility:public",
            },
          }
        );
        // Filter out tags with no posts
        return {
          ...response.data,
          tags: response.data.tags.filter((tag) => (tag.count?.posts || 0) > 0),
        };
      } catch (error) {
        console.error("Error fetching tags:", error);
        throw error;
      }
    },
    staleTime: CACHE_TIMES.TAGS,
    retry: 2,
  });
};
