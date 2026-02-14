import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../../../shared/models/lesson.model';
import { Observable } from 'rxjs';



// lesson-api.service.ts
@Injectable({ providedIn: 'root' })
export class LessonApiService {

  constructor(private http: HttpClient) {}

  getLessonsByCourse(courseId: number) {
    return this.http.get<Lesson[]>(
      `/courses/${courseId}/lessons`
    );
  }
}

