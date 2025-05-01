import Link from "next/link";

interface CategoryBadgeProps {
  name: string;
  slug: string;
  color: string;
}

export function CategoryBadge({ name, slug, color }: CategoryBadgeProps) {
  return (
    <Link
      href={`/category/${slug}`}
      className="inline-block px-6 py-2 rounded-full text-[14px] font-medium text-white"
      style={{ backgroundColor: color }}
    >
      {name}
    </Link>
  );
}
