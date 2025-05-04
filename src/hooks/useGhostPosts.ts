import { useQuery } from "@tanstack/react-query";
import ghostApi from "@/lib/axios";

import type { GhostPostsResponse } from "@/types/ghost";
import { API_ENDPOINTS, CACHE_TIMES, PAGINATION } from "@/constants/api";

interface UseGhostPostsProps {
  page?: number;
  tag?: string;
  limit?: number;
}

export const useGhostPosts = ({
  page = 1,
  tag = "",
  limit = PAGINATION.POSTS_PER_PAGE,
}: UseGhostPostsProps = {}) => {
  return useQuery({
    queryKey: ["posts", page, tag, limit],
    queryFn: async () => {
      try {
        const response = await ghostApi.get<GhostPostsResponse>(
          API_ENDPOINTS.POSTS,
          {
            params: {
              limit,
              page,
              include: "tags,authors",
              filter: tag ? `tag:${tag}` : "",
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
      }
    },
    staleTime: CACHE_TIMES.POSTS,
    retry: 2,
  });
};
