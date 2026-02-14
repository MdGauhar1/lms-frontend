import { Component } from '@angular/core';
import {
  Router,
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomePage } from '../features/home/home.page';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomePage
  ],
  template: `
    <!-- NAVBAR -->
    <header class="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav class="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <!-- LOGO -->
        <div class="flex items-center gap-4 cursor-pointer">
          <a routerLink="/home">
          <div
            class="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600
                    flex items-center justify-center text-white font-bold text-lg shadow-md">
          LMS
          </div>

          <!-- <span class="text-xl font-semibold text-gray-900 tracking-tight">
            Learning Platform
          </span> -->
          </a>
        </div>

        <!-- NAV LINKS -->
        <div class="flex items-center gap-10">

          <!-- LOGGED IN -->
          <ng-container *ngIf="isLoggedIn(); else guestLinks">

            <a
              routerLink="/dashboard"
              routerLinkActive="text-blue-600 after:scale-x-100"
              class="nav-link">
              Dashboard
            </a>

            <a
              routerLink="/courses"
              routerLinkActive="text-blue-600 after:scale-x-100"
              class="nav-link">
              Courses
            </a>

            <a
              routerLink="/certificates"
              routerLinkActive="text-blue-600 after:scale-x-100"
              class="nav-link">
              Certificates
            </a>

            <button
              (click)="logout()"
              class="ml-4 px-5 py-2.5 rounded-xl text-sm font-semibold
                     bg-gray-900 text-white hover:bg-gray-800 transition">
              Logout
            </button>

          </ng-container>

          <!-- GUEST -->
          <ng-template #guestLinks>

            <a
              routerLink="/login"
              class="px-5 py-3 rounded-xl text-base font-semibold
                     text-gray-700 border border-blue-700
                     hover:bg-gray-100 transition">
              Login
            </a>

            <a
              routerLink="/register"
              class="px-5 py-3 rounded-xl text-base font-semibold
                     bg-blue-600 text-white shadow-sm
                     hover:bg-blue-700 transition">
              Register
            </a>

          </ng-template>

        </div>
      </nav>
    </header>

    <!-- MAIN CONTENT -->
    <main class="bg-white min-h-screen">
      <section class="max-w-7xl mx-auto px-6 pt-4 pb-10 space-y-8">

        <!-- HOME (ONLY ON /) -->
        <app-home *ngIf="showHome()"></app-home>

        <!-- ROUTED PAGES -->
        <router-outlet></router-outlet>

      </section>
    </main>




    <!-- ULTRA PREMIUM ENTERPRISE MEGA FOOTER -->
<footer class="relative bg-white mt-32 overflow-hidden">

  <!-- PREMIUM GLOW -->
  <div class="absolute bottom-[-180px] right-[-180px] w-[600px] h-[600px]
              bg-gradient-to-tr from-blue-300 via-purple-300 to-transparent
              opacity-20 blur-3xl rounded-full pointer-events-none"></div>

  <!-- PREMIUM GRADIENT DIVIDER -->
  <div class="h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

  <!-- MAIN MEGA GRID -->
  <div class="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-16">

    <!-- BRAND -->
    <div class="lg:col-span-2">
      <div class="flex items-center gap-4 mb-6">
        <div class="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600
                    flex items-center justify-center text-white font-bold text-lg shadow-md">
          LMS
        </div>
        <span class="text-2xl font-semibold text-gray-900 tracking-tight">
          Learning Platform
        </span>
      </div>

      <p class="text-gray-600 text-sm leading-relaxed max-w-md">
        Industry-grade learning platform delivering real-world projects,
        structured programs, and job-ready skills for developers,
        professionals, and future innovators.
      </p>

      <!-- SOCIAL -->
      <div class="flex gap-4 mt-8">
        <a class="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-200
                  hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300">
          <i class="ri-facebook-fill text-gray-600"></i>
        </a>
        <a class="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-200
                  hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300">
          <i class="ri-twitter-x-line text-gray-600"></i>
        </a>
        <a class="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-200
                  hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300">
          <i class="ri-linkedin-fill text-gray-600"></i>
        </a>
        <a class="h-10 w-10 flex items-center justify-center rounded-xl border border-gray-200
                  hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300">
          <i class="ri-github-fill text-gray-600"></i>
        </a>
      </div>
    </div>

    <!-- PRODUCT -->
    <div>
      <h4 class="text-sm font-semibold text-gray-900 mb-6">Product</h4>
      <ul class="space-y-3 text-sm text-gray-600">
        <li><a routerLink="/home" class="group relative inline-block">
          All Courses
          <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500
                       transition-all duration-300 group-hover:w-full"></span>
        </a></li>
        <li><a routerLink="/home" class="group relative inline-block">
          Dashboard
          <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500
                       transition-all duration-300 group-hover:w-full"></span>
        </a></li>
        <li><a routerLink="/home" class="group relative inline-block">
          Certificates
          <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500
                       transition-all duration-300 group-hover:w-full"></span>
        </a></li>
        <li><a href="#" class="group relative inline-block">Pricing
          <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500
                       transition-all duration-300 group-hover:w-full"></span>
        </a></li>
      </ul>
    </div>

    <!-- COMPANY -->
    <div>
      <h4 class="text-sm font-semibold text-gray-900 mb-6">Company</h4>
      <ul class="space-y-3 text-sm text-gray-600">
        <li><a href="#" class="group relative inline-block">About
          <span class="footer-underline"></span>
        </a></li>
        <li><a href="#" class="group relative inline-block">Careers
          <span class="footer-underline"></span>
        </a></li>
        <li><a href="#" class="group relative inline-block">Blog
          <span class="footer-underline"></span>
        </a></li>
        <li><a href="#" class="group relative inline-block">Press
          <span class="footer-underline"></span>
        </a></li>
      </ul>
    </div>

    <!-- RESOURCES (MEGA FOOTER STYLE) -->
    <div>
      <h4 class="text-sm font-semibold text-gray-900 mb-6">Resources</h4>
      <ul class="space-y-3 text-sm text-gray-600">
        <li><a href="#" class="footer-link">Help Center</a></li>
        <li><a href="#" class="footer-link">Developers API</a></li>
        <li><a href="#" class="footer-link">Community</a></li>
        <li><a href="#" class="footer-link">Status</a></li>
      </ul>
    </div>

    <!-- NEWSLETTER -->
    <div>
      <h4 class="text-sm font-semibold text-gray-900 mb-6">Stay Updated</h4>
      <form class="flex flex-col gap-4">
        <input type="email" placeholder="Enter your email"
          class="px-4 py-3 rounded-xl border border-gray-200
                 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"/>

        <button class="bg-gradient-to-r from-blue-600 to-purple-600
                       hover:opacity-90 text-white py-3 rounded-xl
                       text-sm font-semibold shadow-md transition">
          Subscribe →
        </button>
      </form>
    </div>

  </div>

  <!-- BOTTOM BAR -->
  <div class="border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row
                items-center justify-between gap-4 text-sm text-gray-500">

      <p>© 2026 Learning Platform. All rights reserved.</p>

      <div class="flex gap-6">
        <a href="#" class="footer-link">Privacy</a>
        <a href="#" class="footer-link">Terms</a>
        <a href="#" class="footer-link">Security</a>
        <a href="#" class="footer-link">Accessibility</a>
      </div>
    </div>
  </div>

  <!-- FLOATING BACK TO TOP BUTTON -->
  <button onclick="window.scrollTo({top:0,behavior:'smooth'})"
    class="fixed bottom-8 right-8 h-12 w-12 rounded-full
           bg-gradient-to-r from-blue-600 to-purple-600
           text-white shadow-lg flex items-center justify-center
           hover:scale-110 transition-transform duration-300 z-50">
    ↑
  </button>

</footer>

<!-- SMALL HELPER CLASSES -->
<style>
.footer-link{position:relative;display:inline-block}
.footer-link::after{
content:"";position:absolute;left:0;bottom:-2px;height:2px;width:0;
background:linear-gradient(to right,#3b82f6,#a855f7);
transition:0.3s}
.footer-link:hover::after{width:100%}
.footer-underline{
position:absolute;left:0;bottom:-2px;height:2px;width:0;
background:linear-gradient(to right,#3b82f6,#a855f7);
transition:0.3s}
.group:hover .footer-underline{width:100%}
</style>









  `
})
export class MainLayoutComponent {

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  showHome(): boolean {
    return this.router.url === '/';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}



























// import { Component } from '@angular/core';
// import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { HomePage } from '../features/home/home.page';

// @Component({
//   selector: 'app-main-layout',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterOutlet,
//     RouterLink,
//     RouterLinkActive,
//     HomePage
//   ],
//   template: `
//     <!-- TOP NAVBAR -->
//     <header class="sticky top-0 z-50 bg-white shadow-md">
//       <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         <!-- LOGO -->
//         <div class="flex items-center gap-3">
//           <div class="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
//             LMS
//           </div>
//           <span class="text-xl font-semibold text-gray-800">
//             Learning Platform
//           </span>
//         </div>

//         <!-- LINKS -->



//         <!-- LINKS -->
// <div class="flex items-center gap-6">

//   <!-- Common links (only when logged in) -->
//   <ng-container *ngIf="isLoggedIn(); else guestLinks">

//     <a
//       routerLink="/dashboard"
//       routerLinkActive="text-blue-600 border-b-2 border-blue-600"
//       class="pb-1 text-gray-600 font-medium hover:text-blue-600 transition">
//       Dashboard
//     </a>

//     <a
//       routerLink="/courses"
//       routerLinkActive="text-blue-600 border-b-2 border-blue-600"
//       class="pb-1 text-gray-600 font-medium hover:text-blue-600 transition">
//       Courses
//     </a>

//     <a
//       routerLink="/certificates"
//       routerLinkActive="text-blue-600 border-b-2 border-blue-600"
//       class="pb-1 text-gray-600 font-medium hover:text-blue-600 transition">
//       Certificates
//     </a>

//     <!-- Logout -->
//     <button
//       (click)="logout()"
//       class="ml-4 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">
//       Logout
//     </button>

//   </ng-container>

//   <!-- Guest links -->
//   <ng-template #guestLinks>
//     <a
//       routerLink="/login"
//       class="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50">
//       Login
//     </a>

//     <a
//       routerLink="/register"
//       class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
//       Register
//     </a>
//   </ng-template>

// </div>

//       </nav>
//     </header>

//     <!-- PAGE CONTENT -->
//     <main class="bg-gray-50 min-h-screen">
//       <section class="max-w-7xl mx-auto px-6 py-6">
//          <!-- 🏠 HOME ALWAYS VISIBLE -->
//          <app-home></app-home>
//         <router-outlet></router-outlet>
//       </section>
//     </main>
//   `
// })


// export class MainLayoutComponent {

//   isLoggedIn(): boolean {
//     return !!localStorage.getItem('token');
//   }

//   logout() {
//     localStorage.clear();
//     location.href = '/login';
//   }
// }
