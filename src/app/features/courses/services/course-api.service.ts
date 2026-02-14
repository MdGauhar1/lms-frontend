import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../../../shared/models/course.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourseApiService {

  constructor(private http: HttpClient) {}

  // ✅ GET ALL COURSES
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/courses');
  }

  // ✅ GET COURSE BY ID
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`/courses/${id}`);
  }
}
