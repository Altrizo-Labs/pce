import { GhostTag, GhostPost } from "@/types/ghost";
import axios from "axios";

const GHOST_API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;
const GHOST_CONTENT_API_KEY = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY;

const ghostApi = axios.create({
  baseURL: GHOST_API_URL,
  params: {
    key: GHOST_CONTENT_API_KEY,
  },
});

export const getTags = async (): Promise<GhostTag[]> => {
  const response = await ghostApi.get("/tags", {
    params: {
      limit: "all",
      include: "count.posts",
    },
  });

  return response.data.tags;
};

export const getPosts = async (
  page = 1,
  limit = 9
): Promise<{
  posts: GhostPost[];
  meta: {
    pagination: {
      pages: number;
      total: number;
      page: number;
      limit: number;
      next: number | null;
      prev: number | null;
    };
  };
}> => {
  const response = await ghostApi.get("/posts", {
    params: {
      limit,
      page,
      include: "tags",
      fields:
        "id,uuid,title,slug,html,excerpt,feature_image,featured,published_at,updated_at",
    },
  });

  return response.data;
};
