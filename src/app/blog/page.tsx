import BlogListing from "@/components/blog/blog-listing";
import FeaturedPost from "@/components/blog/featured-post";

export default function Blog() {
  return (
    <div className="mx-4 pt-20 lg:pt-24">
      <FeaturedPost />
      <BlogListing />
    </div>
  );
}
