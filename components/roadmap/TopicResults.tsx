// components/TopicResults.tsx
'use client';

import { BookOpen, ChevronRight, Lightbulb, Search } from 'lucide-react';
import { Topic, ViewMode } from '@/types/roadmap';
import { categories } from '@/data/categories';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

interface TopicResultsProps {
  topics: Topic[];
  viewMode: ViewMode;
  searchTerm?: string;
  selectedCategory?: string | null;
}

export const TopicResults: React.FC<TopicResultsProps> = ({
  topics,
  viewMode,
  searchTerm,
  selectedCategory
}) => {
  // Filtrado dinámico por categoría y búsqueda
  const filteredTopics = topics.filter(topic => {
    const matchesCategory = selectedCategory ? topic.category === selectedCategory : true;
    const matchesSearch = searchTerm
      ? topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.concepts.some(concept => concept.toLowerCase().includes(searchTerm.toLowerCase()))
      : true;

    return matchesCategory && matchesSearch;
  });

  const availableTopics = filteredTopics.filter(t => t.status === 'available');
  const comingSoonTopics = filteredTopics.filter(t => t.status === 'coming-soon');

  const getCategoryInfo = (categoryId: string) => categories.find(c => c.id === categoryId);

  const renderTopicCard = (topic: Topic) => {
    const categoryInfo = getCategoryInfo(topic.category);
    const isAvailable = topic.status === 'available';

    return (
      <Card
        key={topic.id}
        className={`group transition-all duration-300 cursor-pointer ${!isAvailable ? 'opacity-75 border-dashed' : 'hover:shadow-lg'}`}
      >
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <div className={`p-2 rounded-lg ${categoryInfo?.color} ${!isAvailable ? 'opacity-60' : ''}`}>
              {categoryInfo && <categoryInfo.icon className="h-5 w-5 text-white" />}
            </div>
            {isAvailable ? (
              <Badge variant="default" className="text-xs bg-green-500">Disponible</Badge>
            ) : (
              <Badge variant="secondary" className="text-xs">Próximamente</Badge>
            )}
          </div>
          <CardTitle className={`text-lg ${!isAvailable ? 'text-gray-600' : 'group-hover:text-blue-600 transition-colors'}`}>
            {topic.name}
          </CardTitle>
          <CardDescription className={`text-sm ${!isAvailable ? 'text-gray-500' : ''}`}>
            {topic.description}
          </CardDescription>
        </CardHeader>

        {isAvailable && (
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-1">
                {topic.concepts.slice(0, 2).map((concept, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">{concept}</Badge>
                ))}
                {topic.concepts.length > 2 && (
                  <Badge variant="secondary" className="text-xs">+{topic.concepts.length - 2} más</Badge>
                )}
              </div>
              <Button className="w-full group-hover:bg-blue-600 transition-colors">
                Abrir Ejercicio
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        )}

        {!isAvailable && (
          <CardContent>
            <Button disabled className="w-full">Próximamente</Button>
          </CardContent>
        )}
      </Card>
    );
  };

  const renderTopicSection = (title: string, topics: Topic[], icon: JSX.Element) => {
    if (!topics.length) return null;
    return (
      <div className="mb-8">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-lg font-semibold text-gray-900">{title} ({topics.length})</h3>
        </div>
        <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {topics.map(renderTopicCard)}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {selectedCategory 
              ? `${getCategoryInfo(selectedCategory)?.name} (${filteredTopics.length})`
              : `Roadmap Completo (${filteredTopics.length})`
            }
          </h2>
          {searchTerm && (
            <p className="text-sm text-gray-600 mt-1">
              Resultados para "{searchTerm}"
            </p>
          )}
        </div>
      </div>

      {/* Available Topics */}
      {renderTopicSection('Disponibles', availableTopics, <BookOpen className="h-5 w-5 text-green-600 mr-2" />)}

      {/* Coming Soon Topics */}
      {renderTopicSection('Próximamente', comingSoonTopics, <Lightbulb className="h-5 w-5 text-amber-600 mr-2" />)}

      {/* No Results */}
      {filteredTopics.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron temas</h3>
            <p className="text-gray-600">
              Intenta con otros términos de búsqueda o cambia los filtros.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
