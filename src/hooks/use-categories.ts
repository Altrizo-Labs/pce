import { getTags } from "@/lib/ghost-api";
import { CategoryData } from "@/types/ghost";
import { useQuery } from "@tanstack/react-query";

// Map of category slugs to their respective icons and colors
const categoryMappings: Record<string, { icon: string; color: string }> = {
  "speeches": {
    icon: "robot",
    color: "#9D8EC2",
  },
  "fiction": {
    icon: "users",
    color: "#8ECBAD",
  },
  "getting-started": {
    icon: "trending-up",
    color: "#8EB5E5",
  },
  "fables": {
    icon: "trophy",
    color: "#7CBFD9",
  },
};

// Get the slugs of the categories we care about
const knownCategorySlugs = Object.keys(categoryMappings);

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<CategoryData[]> => {
      const tags = await getTags();
      
      // Filter tags to include only those defined in categoryMappings
      // and transform them into the CategoryData format
      return tags
        .filter((tag) => knownCategorySlugs.includes(tag.slug))
        .map((tag) => {
          const mapping = categoryMappings[tag.slug];
          // The filter ensures mapping exists, so no need for default fallbacks here
          return {
            id: tag.id,
            name: tag.name,
            slug: tag.slug,
            description: tag.description || "",
            icon: mapping.icon,
            accentColor: mapping.color,
          };
        });
    },
  });
}