export interface Enrollment {
  id?: number;
  userId: number;
  courseId: number;
  status?: 'ENROLLED' | 'COMPLETED';
  enrolledAt?: string; // ISO string
}
