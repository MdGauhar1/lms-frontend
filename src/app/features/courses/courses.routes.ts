import { Routes } from '@angular/router';
import { CourseListPage } from './pages/course-list.page';
import { CourseDetailPage } from './pages/course-detail.page';
import { roleGuard } from '../../core/guards/role.guard';

export const COURSES_ROUTES: Routes = [
  {
    path: '',
    component: CourseListPage,
    canActivate: [roleGuard],
    data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] }
  },
  {
    path: ':id',
    component: CourseDetailPage,
    canActivate: [roleGuard],
    data: { roles: ['ROLE_USER'] }
  }
];










// import { Routes } from '@angular/router';
// import { CourseListPage } from './pages/course-list.page';
// import { CourseDetailPage } from './pages/course-detail.page';

// export const COURSES_ROUTES: Routes = [
//   {
//     path: '',
//     component: CourseListPage
//   },
//   {
//     path: ':id',
//     component: CourseDetailPage   // 👈 THIS FILE
//   }
// ];
