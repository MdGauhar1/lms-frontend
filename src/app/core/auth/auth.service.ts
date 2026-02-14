// src/app/core/auth/auth.service.ts
import { Injectable } from '@angular/core';



@Injectable({ providedIn: 'root' })
export class AuthService {

  setAuth(token: string, role: string, userId: number) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('userId', userId.toString());
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  logout() {
    localStorage.clear();
    location.href = '/login';
  }
}