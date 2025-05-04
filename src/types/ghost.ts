// Ghost API response types
export interface GhostPost {
    id: string
    uuid: string
    title: string
    slug: string
    html: string
    excerpt: string
    feature_image: string
    featured: boolean
    published_at: string
    tags: GhostTag[]
    primary_author: GhostAuthor
    primary_tag?: GhostTag
  }
  
  export interface GhostTag {
    id: string
    name: string
    slug: string
    description?: string
    feature_image?: string
    visibility?: string
    meta_title?: string
    meta_description?: string
    count?: {
      posts: number
    }
  }
  
  export interface GhostAuthor {
    id: string
    name: string
    slug: string
    profile_image: string
  }
  
  export interface GhostApiResponse<T> {
    data: {
      [key: string]: T[]
    }
    meta: {
      pagination: {
        page: number
        limit: number
        pages: number
        total: number
        next: number | null
        prev: number | null
      }
    }
  }
  
  export interface GhostPostsResponse extends GhostApiResponse<GhostPost> {
    posts: GhostPost[]
  }
  
  export interface GhostTagsResponse extends GhostApiResponse<GhostTag> {
    tags: GhostTag[]
  }
  