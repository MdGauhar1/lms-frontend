import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardApiService {

  constructor(private http: HttpClient) {}

  getEnrollments(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`/enrollments/user/${userId}`);
  }

  getProgress(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`/progress/user/${userId}`);
  }

  getCertificates(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`/certificates/user/${userId}`);
  }
}
