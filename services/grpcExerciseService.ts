import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import path from 'path';
import { Exercise } from '@/types/roadmap';

const PROTO_PATH = path.join(process.cwd(), 'proto', 'exercise.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const proto: any = grpc.loadPackageDefinition(packageDefinition).roadmap;

export class GrpcExerciseService {
  private readonly client: any;

  constructor() {
    const address = process.env.NEXT_PUBLIC_GRPC_EXERCISE_SERVER;
    this.client = new proto.ExerciseService(address, grpc.credentials.createInsecure());
  }

  public getExercise(topicId: string): Promise<Exercise> {
    return new Promise((resolve, reject) => {
      this.client.GetExercise({ id: topicId }, (err: any, response: any) => {
        if (err) return reject(new Error(err.message || String(err)));

        const exercise: Exercise = {
          id: response.id,
          name: response.name,
          description: response.description,
          category: response.category,
          categoryName: response.categoryName,
          concepts: response.concepts || [],
          objective: response.objective || '',
          requirements: response.requirements || [],
          hints: response.hints || [],
          examples: response.examples?.map((ex: any) => ({
            title: ex.title,
            code: ex.code
          })) || []
        };

        resolve(exercise);
      });
    });
  }

  public close() {
    this.client?.close?.();
  }
}

export const grpcExerciseService = new GrpcExerciseService();
