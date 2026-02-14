import { Routes } from '@angular/router';
import { EnrollPage } from './pages/enroll.page';

export const ENROLLMENT_ROUTES: Routes = [
  {
    path: 'enroll/:courseId',
    component: EnrollPage
  }
];
