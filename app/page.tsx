'use client';

import { useState, useMemo } from 'react';
import { 
  Code2, 
  Search,
  ChevronRight,
  Menu,
  X,
  Target,
  Layers,
  Brain,
  Filter,
  Grid3X3,
  List,
  Database,
  Cloud,
  Shield,
  Zap,
  Users,
  GitBranch,
  Server,
  Smartphone,
  BarChart3,
  Cog,
  BookOpen,
  Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface Topic {
  id: string;
  name: string;
  description: string;
  category: string;
  concepts: string[];
  status: 'available' | 'coming-soon';
}

const topics: Topic[] = [
  // Patrones de Diseño
  {
    id: 'singleton',
    name: 'Singleton',
    description: 'Garantiza una única instancia de una clase y proporciona acceso global a ella.',
    category: 'design-patterns',
    concepts: ['Instancia única', 'Acceso global', 'Control de instanciación'],
    status: 'available'
  },
  {
    id: 'factory-method',
    name: 'Factory Method',
    description: 'Crea objetos sin especificar la clase exacta a crear.',
    category: 'design-patterns',
    concepts: ['Creación de objetos', 'Polimorfismo', 'Desacoplamiento'],
    status: 'available'
  },
  {
    id: 'observer',
    name: 'Observer',
    description: 'Define dependencias uno-a-muchos entre objetos.',
    category: 'design-patterns',
    concepts: ['Notificaciones', 'Desacoplamiento', 'Suscriptores'],
    status: 'available'
  },
  {
    id: 'strategy',
    name: 'Strategy',
    description: 'Define una familia de algoritmos e intercambia entre ellos.',
    category: 'design-patterns',
    concepts: ['Algoritmos', 'Intercambio', 'Encapsulación'],
    status: 'available'
  },
  {
    id: 'decorator',
    name: 'Decorator',
    description: 'Añade funcionalidades a objetos dinámicamente sin alterar su estructura.',
    category: 'design-patterns',
    concepts: ['Extensibilidad', 'Composición', 'Flexibilidad'],
    status: 'available'
  },

  // Arquitectura de Software
  {
    id: 'clean-architecture',
    name: 'Clean Architecture',
    description: 'Arquitectura que separa las preocupaciones en capas concéntricas.',
    category: 'software-architecture',
    concepts: ['Capas', 'Dependencias', 'Testabilidad'],
    status: 'coming-soon'
  },
  {
    id: 'hexagonal-architecture',
    name: 'Hexagonal Architecture',
    description: 'Arquitectura que aísla el núcleo de la aplicación de factores externos.',
    category: 'software-architecture',
    concepts: ['Puertos', 'Adaptadores', 'Aislamiento'],
    status: 'coming-soon'
  },
  {
    id: 'microservices',
    name: 'Microservicios',
    description: 'Arquitectura que descompone aplicaciones en servicios pequeños e independientes.',
    category: 'software-architecture',
    concepts: ['Servicios independientes', 'Escalabilidad', 'Distribución'],
    status: 'coming-soon'
  },
  {
    id: 'event-driven',
    name: 'Event-Driven Architecture',
    description: 'Arquitectura basada en la producción, detección y reacción a eventos.',
    category: 'software-architecture',
    concepts: ['Eventos', 'Asíncrono', 'Desacoplamiento'],
    status: 'coming-soon'
  },

  // Bases de Datos
  {
    id: 'database-design',
    name: 'Diseño de Base de Datos',
    description: 'Principios y técnicas para diseñar bases de datos eficientes.',
    category: 'databases',
    concepts: ['Normalización', 'Índices', 'Relaciones'],
    status: 'coming-soon'
  },
  {
    id: 'nosql-patterns',
    name: 'Patrones NoSQL',
    description: 'Patrones de diseño específicos para bases de datos NoSQL.',
    category: 'databases',
    concepts: ['Documentos', 'Agregados', 'Desnormalización'],
    status: 'coming-soon'
  },
  {
    id: 'caching-strategies',
    name: 'Estrategias de Cache',
    description: 'Técnicas para implementar sistemas de cache efectivos.',
    category: 'databases',
    concepts: ['Cache-aside', 'Write-through', 'Invalidación'],
    status: 'coming-soon'
  },

  // Cloud & DevOps
  {
    id: 'cloud-patterns',
    name: 'Patrones Cloud',
    description: 'Patrones de diseño específicos para aplicaciones en la nube.',
    category: 'cloud-devops',
    concepts: ['Escalabilidad', 'Resilencia', 'Distribución'],
    status: 'coming-soon'
  },
  {
    id: 'containerization',
    name: 'Containerización',
    description: 'Principios y prácticas de containerización con Docker y Kubernetes.',
    category: 'cloud-devops',
    concepts: ['Docker', 'Kubernetes', 'Orquestación'],
    status: 'coming-soon'
  },
  {
    id: 'ci-cd-pipelines',
    name: 'CI/CD Pipelines',
    description: 'Diseño e implementación de pipelines de integración y despliegue continuo.',
    category: 'cloud-devops',
    concepts: ['Automatización', 'Testing', 'Deployment'],
    status: 'coming-soon'
  },

  // Seguridad
  {
    id: 'security-patterns',
    name: 'Patrones de Seguridad',
    description: 'Patrones para implementar seguridad en aplicaciones.',
    category: 'security',
    concepts: ['Autenticación', 'Autorización', 'Encriptación'],
    status: 'coming-soon'
  },
  {
    id: 'oauth-implementation',
    name: 'Implementación OAuth',
    description: 'Implementación correcta de protocolos de autenticación OAuth.',
    category: 'security',
    concepts: ['OAuth 2.0', 'JWT', 'Tokens'],
    status: 'coming-soon'
  },

  // Performance
  {
    id: 'performance-optimization',
    name: 'Optimización de Performance',
    description: 'Técnicas para optimizar el rendimiento de aplicaciones.',
    category: 'performance',
    concepts: ['Profiling', 'Caching', 'Lazy Loading'],
    status: 'coming-soon'
  },
  {
    id: 'load-balancing',
    name: 'Load Balancing',
    description: 'Estrategias para distribuir carga entre múltiples servidores.',
    category: 'performance',
    concepts: ['Round Robin', 'Weighted', 'Health Checks'],
    status: 'coming-soon'
  },

  // Liderazgo Técnico
  {
    id: 'technical-leadership',
    name: 'Liderazgo Técnico',
    description: 'Habilidades de liderazgo para arquitectos de software.',
    category: 'leadership',
    concepts: ['Mentoring', 'Decisiones técnicas', 'Comunicación'],
    status: 'coming-soon'
  },
  {
    id: 'architecture-reviews',
    name: 'Revisiones de Arquitectura',
    description: 'Metodologías para revisar y evaluar arquitecturas de software.',
    category: 'leadership',
    concepts: ['Evaluación', 'Feedback', 'Mejora continua'],
    status: 'coming-soon'
  },

  // Metodologías
  {
    id: 'domain-driven-design',
    name: 'Domain-Driven Design',
    description: 'Enfoque de diseño de software centrado en el dominio del negocio.',
    category: 'methodologies',
    concepts: ['Bounded Context', 'Aggregates', 'Domain Model'],
    status: 'coming-soon'
  },
  {
    id: 'test-driven-development',
    name: 'Test-Driven Development',
    description: 'Metodología de desarrollo guiada por pruebas.',
    category: 'methodologies',
    concepts: ['Red-Green-Refactor', 'Unit Tests', 'Test First'],
    status: 'coming-soon'
  },

  // Sistemas Distribuidos
  {
    id: 'distributed-systems',
    name: 'Sistemas Distribuidos',
    description: 'Principios y patrones para sistemas distribuidos.',
    category: 'distributed-systems',
    concepts: ['Consistencia', 'Particionado', 'Tolerancia a fallos'],
    status: 'coming-soon'
  },
  {
    id: 'message-queues',
    name: 'Colas de Mensajes',
    description: 'Implementación y uso de sistemas de mensajería.',
    category: 'distributed-systems',
    concepts: ['Pub/Sub', 'Message Brokers', 'Async Processing'],
    status: 'coming-soon'
  },

  // Mobile & Frontend
  {
    id: 'mobile-architecture',
    name: 'Arquitectura Mobile',
    description: 'Patrones de arquitectura específicos para aplicaciones móviles.',
    category: 'mobile-frontend',
    concepts: ['MVVM', 'Clean Architecture', 'State Management'],
    status: 'coming-soon'
  },
  {
    id: 'frontend-architecture',
    name: 'Arquitectura Frontend',
    description: 'Patrones y principios para arquitecturas frontend escalables.',
    category: 'mobile-frontend',
    concepts: ['Component Architecture', 'State Management', 'Module Federation'],
    status: 'coming-soon'
  }
];

const categories = [
  {
    id: 'design-patterns',
    name: 'Patrones de Diseño',
    description: 'Soluciones reutilizables a problemas comunes',
    icon: Target,
    color: 'bg-blue-500',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'software-architecture',
    name: 'Arquitectura de Software',
    description: 'Estructuras y patrones arquitectónicos',
    icon: Layers,
    color: 'bg-purple-500',
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'databases',
    name: 'Bases de Datos',
    description: 'Diseño y optimización de datos',
    icon: Database,
    color: 'bg-green-500',
    textColor: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    description: 'Infraestructura y despliegue en la nube',
    icon: Cloud,
    color: 'bg-cyan-500',
    textColor: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200'
  },
  {
    id: 'security',
    name: 'Seguridad',
    description: 'Patrones y prácticas de seguridad',
    icon: Shield,
    color: 'bg-red-500',
    textColor: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    id: 'performance',
    name: 'Performance',
    description: 'Optimización y escalabilidad',
    icon: Zap,
    color: 'bg-yellow-500',
    textColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  {
    id: 'leadership',
    name: 'Liderazgo Técnico',
    description: 'Habilidades de liderazgo y gestión',
    icon: Users,
    color: 'bg-indigo-500',
    textColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'methodologies',
    name: 'Metodologías',
    description: 'Enfoques y metodologías de desarrollo',
    icon: GitBranch,
    color: 'bg-pink-500',
    textColor: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200'
  },
  {
    id: 'distributed-systems',
    name: 'Sistemas Distribuidos',
    description: 'Arquitecturas distribuidas y microservicios',
    icon: Server,
    color: 'bg-orange-500',
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'mobile-frontend',
    name: 'Mobile & Frontend',
    description: 'Arquitecturas para aplicaciones cliente',
    icon: Smartphone,
    color: 'bg-teal-500',
    textColor: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200'
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredTopics = useMemo(() => {
    let filtered = topics;
    
    if (selectedCategory) {
      filtered = filtered.filter(topic => topic.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(topic => 
        topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.concepts.some(concept => 
          concept.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    return filtered;
  }, [selectedCategory, searchTerm]);

  const getCategoryInfo = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId);
  };

  const availableTopics = filteredTopics.filter(topic => topic.status === 'available');
  const comingSoonTopics = filteredTopics.filter(topic => topic.status === 'coming-soon');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden mr-2"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              <Code2 className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Arquitecto de Software</h1>
                <p className="text-sm text-gray-600 hidden sm:block">Roadmap completo para dominar la arquitectura de software</p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Buscar temas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center border rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="h-8 w-8 p-0"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="h-8 w-8 p-0"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Mobile Search */}
          <div className="sm:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar temas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
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
              const categoryTopics = topics.filter(t => t.category === category.id);
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
        {availableTopics.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <BookOpen className="h-5 w-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Disponibles ({availableTopics.length})</h3>
            </div>
            
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }>
              {availableTopics.map((topic) => {
                const categoryInfo = getCategoryInfo(topic.category);
                
                if (viewMode === 'list') {
                  return (
                    <Card key={topic.id} className="group hover:shadow-md transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className={`p-1.5 rounded ${categoryInfo?.color}`}>
                                {categoryInfo && <categoryInfo.icon className="h-4 w-4 text-white" />}
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {topic.name}
                              </h3>
                              <Badge variant="outline" className="text-xs">
                                {categoryInfo?.name}
                              </Badge>
                              <Badge variant="default" className="text-xs bg-green-500">
                                Disponible
                              </Badge>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">{topic.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {topic.concepts.slice(0, 3).map((concept, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {concept}
                                </Badge>
                              ))}
                              {topic.concepts.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{topic.concepts.length - 3}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors ml-4" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                }

                return (
                  <Card key={topic.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg ${categoryInfo?.color}`}>
                          {categoryInfo && <categoryInfo.icon className="h-5 w-5 text-white" />}
                        </div>
                        <Badge variant="default" className="text-xs bg-green-500">
                          Disponible
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {topic.name}
                      </CardTitle>
                      <CardDescription>{topic.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-1">
                          {topic.concepts.slice(0, 2).map((concept, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {concept}
                            </Badge>
                          ))}
                          {topic.concepts.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{topic.concepts.length - 2} más
                            </Badge>
                          )}
                        </div>
                        <Button className="w-full group-hover:bg-blue-600 transition-colors">
                          Abrir Ejercicio
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Coming Soon Topics */}
        {comingSoonTopics.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-5 w-5 text-amber-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Próximamente ({comingSoonTopics.length})</h3>
            </div>
            
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }>
              {comingSoonTopics.map((topic) => {
                const categoryInfo = getCategoryInfo(topic.category);
                
                if (viewMode === 'list') {
                  return (
                    <Card key={topic.id} className="opacity-75 border-dashed">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className={`p-1.5 rounded ${categoryInfo?.color} opacity-60`}>
                                {categoryInfo && <categoryInfo.icon className="h-4 w-4 text-white" />}
                              </div>
                              <h3 className="text-lg font-semibold text-gray-600">
                                {topic.name}
                              </h3>
                              <Badge variant="outline" className="text-xs">
                                {categoryInfo?.name}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                Próximamente
                              </Badge>
                            </div>
                            <p className="text-gray-500 text-sm mb-3">{topic.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {topic.concepts.slice(0, 3).map((concept, index) => (
                                <Badge key={index} variant="outline" className="text-xs opacity-60">
                                  {concept}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                }

                return (
                  <Card key={topic.id} className="opacity-75 border-dashed">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg ${categoryInfo?.color} opacity-60`}>
                          {categoryInfo && <categoryInfo.icon className="h-5 w-5 text-white" />}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          Próximamente
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-gray-600">
                        {topic.name}
                      </CardTitle>
                      <CardDescription className="text-gray-500">{topic.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-1">
                          {topic.concepts.slice(0, 2).map((concept, index) => (
                            <Badge key={index} variant="outline" className="text-xs opacity-60">
                              {concept}
                            </Badge>
                          ))}
                          {topic.concepts.length > 2 && (
                            <Badge variant="outline" className="text-xs opacity-60">
                              +{topic.concepts.length - 2} más
                            </Badge>
                          )}
                        </div>
                        <Button disabled className="w-full">
                          Próximamente
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

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
    </div>
  );
}