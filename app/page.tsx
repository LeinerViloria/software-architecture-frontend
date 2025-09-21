'use client';

import { useState, useMemo } from 'react';
import { topics } from '@/data/topics';
import { categoriesWithTopics } from '@/data/categories_and_topics';
import { Header } from '@/components/roadmap/Header';
import { CategoryGrid } from '@/components/roadmap/CategoryGrid';
import { TopicResults } from '@/components/roadmap/TopicResults';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // 🔍 Filtro de temas por categoría y búsqueda
  const filteredTopics = useMemo(() => {
    let filtered = topics;
    if (selectedCategory) {
      filtered = filtered.filter((t) => t.category === selectedCategory);
    }
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.name.toLowerCase().includes(lowerSearch) ||
          t.description.toLowerCase().includes(lowerSearch) ||
          t.concepts.some((c) => c.toLowerCase().includes(lowerSearch))
      );
    }
    return filtered;
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* 🔝 Header con búsqueda y toggle de vista */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 🔖 Filtros de categorías */}
        <CategoryGrid
          categories={categoriesWithTopics}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* 📚 Lista de temas */}
        <TopicResults topics={topics} viewMode={viewMode} />
      </main>
    </div>
  );
}
