'use client';

import { Category } from '@/types/roadmap';
import { Button } from '@/components/ui/button';

interface CategoryGridProps {
  categories: Category[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export function CategoryGrid({ categories, selectedCategory, setSelectedCategory }: CategoryGridProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={selectedCategory === null ? 'default' : 'outline'}
        onClick={() => setSelectedCategory(null)}
        className="rounded-full"
      >
        Todas
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? 'default' : 'outline'}
          onClick={() => setSelectedCategory(category.id)}
          className="flex items-center gap-2 rounded-full"
        >
          <category.icon className={`h-4 w-4 ${category.textColor}`} />
          {category.name}
        </Button>
      ))}
    </div>
  );
}
