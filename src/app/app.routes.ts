import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout.component';

export const routes: Routes = [

  // 🏠 MAIN APP (WITH LAYOUT + HOME INSIDE LAYOUT)
  {
    path: '',
    component: MainLayoutComponent,
    children: [

      // 🔐 AUTH
      {
        path: 'login',
        loadComponent: () =>
          import('./core/auth/login.page')
            .then(m => m.LoginPage)
      },

      {
        path: 'register',
        loadComponent: () =>
          import('./core/auth/register.page')
            .then(m => m.RegisterPage)
      },

      // 📦 FEATURES
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes')
            .then(m => m.DASHBOARD_ROUTES)
      },

      {
        path: 'courses',
        loadChildren: () =>
          import('./features/courses/courses.routes')
            .then(m => m.COURSES_ROUTES)
      },

      {
        path: 'certificates',
        loadChildren: () =>
          import('./features/certificates/certificates.routes')
            .then(m => m.CERTIFICATES_ROUTES)
      },

      {
        path: 'enroll',
        loadChildren: () =>
          import('./features/enrollment/enrollment.routes')
            .then(m => m.ENROLLMENT_ROUTES)
      },

      {
        path: 'progress',
        loadChildren: () =>
          import('./features/progress/progress.routes')
            .then(m => m.PROGRESS_ROUTES)
      }
    ]
  },

  // 🛟 SAFETY FALLBACK
  { path: '**', redirectTo: '' }
];






// import { Routes } from '@angular/router';
// import { MainLayoutComponent } from './layouts/main-layout.component';

// export const routes: Routes = [

//   // 🏠 MAIN APP (WITH LAYOUT)
//   {
//     path: '',
//     component: MainLayoutComponent,
//     children: [

//       // 🔐 LOGIN (INSIDE LAYOUT)
//       {
//         path: 'login',
//         loadComponent: () =>
//           import('./core/auth/login.page')
//             .then(m => m.LoginPage)
//       },

//       {
//         path: 'register',
//         loadComponent: () =>
//            import('./core/auth/register.page')
//               .then(m => m.RegisterPage)
//       },

//       {
//         path: 'courses',
//         loadChildren: () =>
//           import('./features/courses/courses.routes')
//             .then(m => m.COURSES_ROUTES)
//       },

//       {
//         path: 'certificates',
//         loadChildren: () =>
//           import('./features/certificates/certificates.routes')
//             .then(m => m.CERTIFICATES_ROUTES)
//       },

//       {
//         path: 'enroll',
//         loadChildren: () =>
//           import('./features/enrollment/enrollment.routes')
//             .then(m => m.ENROLLMENT_ROUTES)
//       },

//       {
//         path: 'progress',
//         loadChildren: () =>
//           import('./features/progress/progress.routes')
//             .then(m => m.PROGRESS_ROUTES)
//       },

//       {
//         path: 'dashboard',
//         loadChildren: () =>
//           import('./features/dashboard/dashboard.routes')
//             .then(m => m.DASHBOARD_ROUTES)
//       },

//       // default page
//       { path: '', redirectTo: 'courses', pathMatch: 'full' }
//     ]
//   },

//   // 🛟 SAFETY FALLBACK
//   { path: '**', redirectTo: 'login' }
// ];
















