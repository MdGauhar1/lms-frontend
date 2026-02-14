import { Routes } from '@angular/router';
import { ProgressPage } from './pages/progress.page';

export const PROGRESS_ROUTES: Routes = [
  {
    path: 'progress/:userId/:courseId',
    component: ProgressPage
  }
];
