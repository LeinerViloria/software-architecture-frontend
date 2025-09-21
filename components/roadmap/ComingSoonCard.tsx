import { Topic } from '@/types/roadmap';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

interface ComingSoonCardProps {
  topic: Topic;
  viewMode: 'grid' | 'list';
}

export function ComingSoonCard({ topic, viewMode }: ComingSoonCardProps) {
  return (
    <Card
      className={`transition-all border-dashed border-2 border-gray-300 bg-gray-50 ${
        viewMode === 'list' ? 'flex flex-col sm:flex-row items-start sm:items-center gap-4' : ''
      }`}
    >
      <CardHeader className={viewMode === 'list' ? 'p-4 sm:p-6' : 'p-6'}>
        <CardTitle className="text-lg font-semibold flex items-center gap-2 text-gray-600">
          <Clock className="h-5 w-5 text-gray-500" />
          {topic.name}
        </CardTitle>
        <p className="text-sm text-gray-500">{topic.description}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex flex-wrap gap-2">
        {topic.concepts.map((concept, idx) => (
          <Badge key={idx} variant="outline" className="text-gray-500 border-gray-300">
            {concept}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
