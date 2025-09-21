import { Topic } from '@/types/roadmap';
import { TopicCard } from './TopicCard';
import { ComingSoonCard } from './ComingSoonCard';

interface TopicListProps {
  topics: Topic[];
  viewMode: 'grid' | 'list';
}

export function TopicList({ topics, viewMode }: TopicListProps) {
  if (topics.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        No se encontraron temas que coincidan con tu búsqueda.
      </p>
    );
  }

  return (
    <div
      className={
        viewMode === 'grid'
          ? 'grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          : 'flex flex-col gap-4'
      }
    >
      {topics.map((topic) =>
        topic.status === 'available' ? (
          <TopicCard key={topic.id} topic={topic} viewMode={viewMode} />
        ) : (
          <ComingSoonCard key={topic.id} topic={topic} viewMode={viewMode} />
        )
      )}
    </div>
  );
}
