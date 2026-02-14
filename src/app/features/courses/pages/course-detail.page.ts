import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CourseApiService } from '../services/course-api.service';
import { Course } from '../../../shared/models/course.model';

import { EnrollPage } from '../../enrollment/pages/enroll.page';
import { ProgressPage } from '../../progress/pages/progress.page';
import { LessonListPage } from './lesson-list.page';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    CommonModule,
    EnrollPage,
    ProgressPage,
    LessonListPage,
  ],
  templateUrl: './course-detail.page.html'
})
export class CourseDetailPage implements OnInit {

  course!: Course;
  userId = 1; // TEMP (later from auth)

  constructor(
    private route: ActivatedRoute,
    private courseApi: CourseApiService
  ) {}

  ngOnInit(): void {
    const courseId = Number(this.route.snapshot.paramMap.get('id'));

    this.courseApi
      .getCourseById(courseId)
      .subscribe(res => {
        this.course = res;
      });
  }
}
