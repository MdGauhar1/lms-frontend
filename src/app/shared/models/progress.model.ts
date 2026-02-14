export interface Progress {
  id: number;
  userId: number;
  courseId: number;
  lessonId: number;
  completed: boolean;
  completedAt: string;
}
