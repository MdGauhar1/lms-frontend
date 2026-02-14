import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Progress } from '../../../shared/models/progress.model';

@Injectable({ providedIn: 'root' })
export class ProgressApiService {

  constructor(private http: HttpClient) {}

  // ✅ MARK LESSON COMPLETE (FIXED)
  markLessonComplete(
    userId: number,
    courseId: number,
    lessonId: number
  ): Observable<string> {

    const params = new HttpParams()
      .set('userId', userId.toString())
      .set('courseId', courseId.toString())
      .set('lessonId', lessonId.toString());

    return this.http.post(
      '/progress/lesson-complete',
      null,
      {
        params,
        responseType: 'text'   // 🔥 THIS LINE FIXES EVERYTHING
      }
    );
  }

  // ✅ GET COURSE PROGRESS
  getProgress(
    userId: number,
    courseId: number
  ): Observable<Progress[]> {
    return this.http.get<Progress[]>(
      `/progress/${userId}/${courseId}`
    );
  }
}
