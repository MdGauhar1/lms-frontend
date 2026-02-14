import { Component, OnInit } from '@angular/core';
import { CourseApiService } from '../services/course-api.service';
import { Course } from '../../../shared/models/course.model';
import { SHARED_IMPORTS } from '../../../shared/shared.imports';
import { EnrollPage } from '../../enrollment/pages/enroll.page';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [SHARED_IMPORTS, EnrollPage],
  templateUrl: './course-list.page.html'
})
export class CourseListPage implements OnInit {

  courses: Course[] = [];

  constructor(private api: CourseApiService) {}

  ngOnInit(): void {
    this.api.getCourses()
      .subscribe(res => this.courses = res);
  }
}
