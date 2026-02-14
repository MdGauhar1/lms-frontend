import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.page.html'
})
export class RegisterPage {

  username = '';
  password = '';
  role = 'ROLE_USER';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  register() {
    this.http.post(
      'http://localhost:8080/auth/register',
      {
        username: this.username,
        password: this.password,
        role: this.role
      }
    ).subscribe(() => {
      alert('Registered successfully');
      this.router.navigateByUrl('/login');
    });
  }






  showPassword = false;
passwordStrength = 0;
strengthLabel = 'Weak';

checkStrength() {
  const val = this.password || '';
  let score = 0;

  if (val.length > 5) score += 30;
  if (/[A-Z]/.test(val)) score += 20;
  if (/[0-9]/.test(val)) score += 20;
  if (/[^A-Za-z0-9]/.test(val)) score += 30;

  this.passwordStrength = score;

  if (score < 40) this.strengthLabel = 'Weak';
  else if (score < 70) this.strengthLabel = 'Medium';
  else this.strengthLabel = 'Strong';
}

}




