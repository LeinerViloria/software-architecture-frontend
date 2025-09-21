'use client';

import { Category } from '@/types/roadmap';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface CategoryGridProps {
  categories: Category[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export function CategoryGrid(
  { categories, selectedCategory, setSelectedCategory }: Readonly<CategoryGridProps>
) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Áreas de Conocimiento</h2>
        {selectedCategory && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Limpiar filtro
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {categories.map((category) => {
          const categoryTopics = category.topics || [];
          const availableCount = categoryTopics.filter(t => t.status === 'available').length;
          const IconComponent = category.icon;
          const isSelected = selectedCategory === category.id;
          
          return (
            <Card 
              key={category.id} 
              className={`cursor-pointer transition-all duration-300 hover:shadow-md border-2 ${
                isSelected 
                  ? `${category.borderColor} ${category.bgColor}` 
                  : 'border-transparent hover:border-gray-300'
              }`}
              onClick={() => setSelectedCategory(isSelected ? null : category.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex space-x-1">
                    {availableCount > 0 && (
                      <Badge variant="default" className="text-xs bg-green-500">
                        {availableCount}
                      </Badge>
                    )}
                    {categoryTopics.length - availableCount > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        +{categoryTopics.length - availableCount}
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className={`text-sm ${isSelected ? category.textColor : ''}`}>
                  {category.name}
                </CardTitle>
                <CardDescription className="text-xs">
                  {category.description}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
