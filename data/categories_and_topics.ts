import { categories } from "./categories";
import { topics } from "./topics";
import { Category } from "@/types/roadmap";

/**
 * Une las categorías con sus respectivos temas
 * para obtener una estructura jerárquica Category -> Topics
 */
export const categoriesWithTopics: Category[] = categories.map((category) => ({
  ...category,
  topics: topics.filter((topic) => topic.category === category.id),
}));
