import { Topic } from "@/types/roadmap";

export const topics: Topic[] = [
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