export interface GhostTag {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  feature_image: string | null;
  accent_color: string | null;
}

export interface GhostPost {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  excerpt: string;
  feature_image: string;
  featured: boolean;
  published_at: string;
  updated_at: string;
  tags: GhostTag[];
  primary_tag: GhostTag | null;
}

export interface CategoryData {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  accentColor: string;
}

export interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featureImage: string;
  publishedAt: string;
  category: {
    name: string;
    slug: string;
    color: string;
  };
}
