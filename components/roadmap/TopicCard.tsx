import { Topic } from '@/types/roadmap';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TopicCardProps {
  topic: Topic;
  viewMode: 'grid' | 'list';
}

export function TopicCard({ topic, viewMode }: TopicCardProps) {
  return (
    <Card
      className={`transition-all hover:shadow-lg ${
        viewMode === 'list' ? 'flex flex-col sm:flex-row items-start sm:items-center gap-4' : ''
      }`}
    >
      <CardHeader className={viewMode === 'list' ? 'p-4 sm:p-6' : 'p-6'}>
        <CardTitle className="text-lg font-semibold">{topic.name}</CardTitle>
        <p className="text-sm text-gray-600">{topic.description}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex flex-wrap gap-2">
        {topic.concepts.map((concept, idx) => (
          <Badge key={idx} variant="secondary">
            {concept}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
