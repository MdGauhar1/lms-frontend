import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.page.html'
})
export class LoginPage {

  username = '';
  password = '';

  showPassword = false;


  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {
    this.http.post<any>('http://localhost:8080/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('role', res.role);
      localStorage.setItem('userId', res.userId);

      this.router.navigateByUrl('/courses');
    });
  }
}
