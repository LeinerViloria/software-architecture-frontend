import { Category } from "@/types/roadmap";
import {
  Target,
  Layers,
  Database,
  Cloud,
  Shield,
  Zap,
  Users,
  GitBranch,
  Server,
  Smartphone
} from 'lucide-react';

export const categories: Category[] = [
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