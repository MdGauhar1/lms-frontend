import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Enrollment } from '../../../shared/models/enrollment.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EnrollmentApiService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // ===============================
  // ✅ USER - Enroll in Course
  // ===============================
  enroll(userId: number, courseId: number): Observable<Enrollment> {

    const headers = new HttpHeaders({
      'X-USER-ID': userId.toString()
    });

    return this.http.post<Enrollment>(
      `${this.baseUrl}/user/enrollments/${courseId}`,
      {},
      { headers }
    );
  }

  // ===============================
  // ✅ USER - Get My Enrollments
  // ===============================
  getUserEnrollments(userId: number): Observable<Enrollment[]> {

    const headers = new HttpHeaders({
      'X-USER-ID': userId.toString()
    });

    return this.http.get<Enrollment[]>(
      `${this.baseUrl}/user/enrollments`,
      { headers }
    );
  }

  // ===============================
  // ✅ ADMIN - Get All Enrollments
  // ===============================
  getAllEnrollments(): Observable<Enrollment[]> {

    return this.http.get<Enrollment[]>(
      `${this.baseUrl}/admin/enrollments`
    );
  }

  // ===============================
  // ✅ ADMIN - Mark Completed
  // ===============================
  markCompleted(enrollmentId: number): Observable<Enrollment> {

    return this.http.put<Enrollment>(
      `${this.baseUrl}/admin/enrollments/${enrollmentId}/complete`,
      {}
    );
  }
}


















// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Enrollment } from '../../../shared/models/enrollment.model';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class EnrollmentApiService {

//   constructor(private http: HttpClient) {}

//   // enroll(userId: number, courseId: number): Observable<Enrollment> {
//   //   return this.http.post<Enrollment>('/enrollments', {
//   //     userId,
//   //     courseId
//   //   });
//   // }

//   enroll(userId: number, courseId: number): Observable<Enrollment> {
//   return this.http.post<Enrollment>(
//     `/enrollments?userId=${userId}&courseId=${courseId}`,
//     null
//   );
//   }


//   getUserEnrollments(userId: number): Observable<Enrollment[]> {
//     return this.http.get<Enrollment[]>(`/enrollments/user/${userId}`);
//   }
// }
