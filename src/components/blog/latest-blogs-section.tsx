import { BlogPostsGrid } from "./blog-posts.grid";

export function LatestBlogsSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-[45px] font-bold text-[#181D27] mb-10">Latest Blogs</h2>
      <BlogPostsGrid />
    </section>
  );
}
