'use client';

import { useState, useMemo } from 'react';
import { topics } from '@/data/topics';
import { categories } from '@/data/categories';
import { Header } from '@/components/roadmap/Header';
import { CategoryGrid } from '@/components/roadmap/CategoryGrid';
import { TopicList } from '@/components/roadmap/TopicList';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 🔖 Filtros de categorías */}
        <CategoryGrid
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* 📚 Lista de temas */}
        <TopicList topics={filteredTopics} viewMode={viewMode} />
      </main>
    </div>
  );
}
