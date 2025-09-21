import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Code2, BookOpen, Target, Lightbulb, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { grpcExerciseService } from '@/services/grpcExerciseService';
import { Exercise } from '@/types/roadmap';

interface ExercisePageProps {
  params: {
    id: string;
  };
}

export default async function ExercisePage({ params }: Readonly<ExercisePageProps>) {
  let exercise: Exercise | null = null;

  try {
    exercise = await grpcExerciseService.getExercise(params.id);
  } catch (error) {
    console.error('Error fetching exercise:', error);
    notFound();
  }

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
            {/* Objetivo */}
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
                  {exercise.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{req}</span>
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

          <div className="space-y-6">
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
