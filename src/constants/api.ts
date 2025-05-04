// Ghost API endpoints
export const API_ENDPOINTS = {
  POSTS: "/ghost/api/content/posts/",
  TAGS: "/ghost/api/content/tags/",
  AUTHORS: "/ghost/api/content/authors/",
  SETTINGS: "/ghost/api/content/settings/",
};

// Default pagination limits
export const PAGINATION = {
  POSTS_PER_PAGE: 9,
  ALL: "all",
};

// Cache times (in milliseconds)
export const CACHE_TIMES = {
  POSTS: 1000 * 60 * 5, // 5 minutes
  TAGS: 1000 * 60 * 60, // 1 hour
  SETTINGS: 1000 * 60 * 60 * 24, // 24 hours
};
