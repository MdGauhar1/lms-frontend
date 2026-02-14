import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="auth-container">
      <h1>LMS Portal</h1>

      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .auth-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #f5f5f5;
    }
  `]
})
export class AuthLayoutComponent {}
