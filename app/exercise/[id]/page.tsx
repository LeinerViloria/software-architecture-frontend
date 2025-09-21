import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Code2, BookOpen, Target, Lightbulb, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const exercises = {
  'singleton': {
    id: 'singleton',
    name: 'Singleton',
    description: 'Garantiza una única instancia de una clase y proporciona acceso global a ella.',
    category: 'design-patterns',
    categoryName: 'Patrones de Diseño',
    concepts: ['Instancia única', 'Acceso global', 'Control de instanciación'],
    objective: 'Implementar el patrón Singleton para gestionar una conexión a base de datos, asegurando que solo exista una instancia en toda la aplicación.',
    requirements: [
      'Crear una clase DatabaseConnection que implemente el patrón Singleton',
      'Asegurar que solo se pueda crear una instancia de la clase',
      'Proporcionar un método estático para obtener la instancia',
      'Implementar lazy initialization (creación bajo demanda)',
      'Manejar la concurrencia en entornos multi-hilo'
    ],
    hints: [
      'Utiliza un constructor privado para evitar instanciación externa',
      'Implementa un método estático getInstance()',
      'Considera el uso de variables estáticas para almacenar la instancia',
      'Piensa en la inicialización perezosa vs. inicialización temprana'
    ],
    examples: [
      {
        title: 'Estructura básica',
        code: `class Singleton {
  private static instance: Singleton;
  
  private constructor() {
    // Constructor privado
  }
  
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}`
      }
    ]
  },
  'factory-method': {
    id: 'factory-method',
    name: 'Factory Method',
    description: 'Crea objetos sin especificar la clase exacta a crear.',
    category: 'design-patterns',
    categoryName: 'Patrones de Diseño',
    concepts: ['Creación de objetos', 'Polimorfismo', 'Desacoplamiento'],
    objective: 'Implementar el patrón Factory Method para crear diferentes tipos de vehículos (Auto, Moto, Camión) sin especificar la clase exacta.',
    requirements: [
      'Crear una interfaz Vehicle con métodos comunes',
      'Implementar clases concretas para cada tipo de vehículo',
      'Crear una clase abstracta VehicleFactory con el método factory',
      'Implementar factories concretas para cada tipo de vehículo',
      'Demostrar el uso del patrón con ejemplos prácticos'
    ],
    hints: [
      'Define una interfaz común para todos los productos',
      'Usa clases abstractas para el creator',
      'Cada factory concreta decide qué clase instanciar',
      'El cliente trabaja con interfaces, no con clases concretas'
    ],
    examples: [
      {
        title: 'Estructura del Factory Method',
        code: `interface Vehicle {
  start(): void;
  stop(): void;
}

abstract class VehicleFactory {
  abstract createVehicle(): Vehicle;
  
  public operateVehicle(): void {
    const vehicle = this.createVehicle();
    vehicle.start();
    // ... operaciones
    vehicle.stop();
  }
}`
      }
    ]
  },
  'observer': {
    id: 'observer',
    name: 'Observer',
    description: 'Define dependencias uno-a-muchos entre objetos.',
    category: 'design-patterns',
    categoryName: 'Patrones de Diseño',
    concepts: ['Notificaciones', 'Desacoplamiento', 'Suscriptores'],
    objective: 'Implementar el patrón Observer para un sistema de notificaciones donde múltiples usuarios pueden suscribirse a actualizaciones de noticias.',
    requirements: [
      'Crear una interfaz Observer con método update()',
      'Implementar una clase Subject que mantenga lista de observers',
      'Crear métodos para suscribir/desuscribir observers',
      'Implementar el mecanismo de notificación a todos los observers',
      'Crear observers concretos que reaccionen a las notificaciones'
    ],
    hints: [
      'Mantén una lista de observers en el subject',
      'Implementa métodos attach() y detach()',
      'El método notify() debe llamar update() en todos los observers',
      'Los observers deben poder acceder al estado del subject'
    ],
    examples: [
      {
        title: 'Estructura básica del Observer',
        code: `interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];
  
  attach(observer: Observer): void {
    this.observers.push(observer);
  }
  
  notify(data: any): void {
    this.observers.forEach(observer => observer.update(data));
  }
}`
      }
    ]
  },
  'strategy': {
    id: 'strategy',
    name: 'Strategy',
    description: 'Define una familia de algoritmos e intercambia entre ellos.',
    category: 'design-patterns',
    categoryName: 'Patrones de Diseño',
    concepts: ['Algoritmos', 'Intercambio', 'Encapsulación'],
    objective: 'Implementar el patrón Strategy para un sistema de cálculo de descuentos donde se pueden aplicar diferentes estrategias según el tipo de cliente.',
    requirements: [
      'Crear una interfaz DiscountStrategy con método calculateDiscount()',
      'Implementar estrategias concretas (RegularCustomer, PremiumCustomer, VIPCustomer)',
      'Crear una clase Context que use las estrategias',
      'Permitir cambiar la estrategia en tiempo de ejecución',
      'Demostrar el uso con diferentes tipos de descuentos'
    ],
    hints: [
      'Encapsula cada algoritmo en una clase separada',
      'Usa composición en lugar de herencia',
      'El contexto delega el trabajo a la estrategia',
      'Las estrategias deben ser intercambiables'
    ],
    examples: [
      {
        title: 'Estructura del Strategy',
        code: `interface DiscountStrategy {
  calculateDiscount(amount: number): number;
}

class ShoppingCart {
  private strategy: DiscountStrategy;
  
  setDiscountStrategy(strategy: DiscountStrategy): void {
    this.strategy = strategy;
  }
  
  calculateTotal(amount: number): number {
    return amount - this.strategy.calculateDiscount(amount);
  }
}`
      }
    ]
  },
  'decorator': {
    id: 'decorator',
    name: 'Decorator',
    description: 'Añade funcionalidades a objetos dinámicamente sin alterar su estructura.',
    category: 'design-patterns',
    categoryName: 'Patrones de Diseño',
    concepts: ['Extensibilidad', 'Composición', 'Flexibilidad'],
    objective: 'Implementar el patrón Decorator para un sistema de bebidas donde se pueden agregar ingredientes adicionales (leche, azúcar, canela) dinámicamente.',
    requirements: [
      'Crear una interfaz Beverage con métodos cost() y description()',
      'Implementar bebidas base (Coffee, Tea, HotChocolate)',
      'Crear una clase abstracta BeverageDecorator',
      'Implementar decoradores concretos para cada ingrediente',
      'Permitir combinar múltiples decoradores'
    ],
    hints: [
      'Los decoradores deben implementar la misma interfaz que el componente',
      'Usa composición para envolver el objeto original',
      'Cada decorador añade su funcionalidad y delega al componente',
      'Los decoradores pueden apilarse unos sobre otros'
    ],
    examples: [
      {
        title: 'Estructura del Decorator',
        code: `interface Beverage {
  cost(): number;
  description(): string;
}

abstract class BeverageDecorator implements Beverage {
  protected beverage: Beverage;
  
  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }
  
  abstract cost(): number;
  abstract description(): string;
}`
      }
    ]
  }
};

interface ExercisePageProps {
  params: {
    id: string;
  };
}

export default function ExercisePage({ params }: ExercisePageProps) {
  const exercise = exercises[params.id as keyof typeof exercises];

  if (!exercise) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <Button variant="ghost" size="sm" className="mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Dashboard
                </Button>
              </Link>
              <Code2 className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">{exercise.name}</h1>
                <p className="text-sm text-gray-600">{exercise.categoryName}</p>
              </div>
            </div>
            
            <Badge variant="default" className="bg-blue-500">
              Ejercicio Práctico
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Descripción del Ejercicio */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  <CardTitle>Objetivo del Ejercicio</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {exercise.objective}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Requerimientos */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <CardTitle>Requerimientos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exercise.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Área de Trabajo */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Code2 className="h-5 w-5 text-purple-600" />
                  <CardTitle>Área de Trabajo</CardTitle>
                </div>
                <CardDescription>
                  Aquí puedes implementar tu solución. Puedes usar cualquier lenguaje de programación.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Code2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Comienza tu implementación
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Puedes crear archivos, usar un IDE externo, o implementar directamente aquí.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Code2 className="h-4 w-4 mr-2" />
                      Crear Archivo
                    </Button>
                    <Button variant="outline">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Ver Ejemplos
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Conceptos Clave */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Conceptos Clave</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {exercise.concepts.map((concept, index) => (
                    <Badge key={index} variant="secondary">
                      {concept}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pistas */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-yellow-600" />
                  <CardTitle className="text-lg">Pistas</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exercise.hints.map((hint, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-700">{hint}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Ejemplos de Código */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Code2 className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Ejemplos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {exercise.examples.map((example, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h4 className="font-medium text-gray-900 mb-2">{example.title}</h4>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(exercises).map((id) => ({
    id,
  }));
}