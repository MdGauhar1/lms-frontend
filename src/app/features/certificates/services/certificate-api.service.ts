// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Certificate } from '../../../shared/models/certificate.model';

// @Injectable({ providedIn: 'root' })
// export class CertificateApiService {

//   constructor(private http: HttpClient) {}

//   getCertificatesByUser(userId: number): Observable<Certificate[]> {
//     return this.http.get<Certificate[]>(
//       `/certificates/user/${userId}`
//     );
//   }
// }







import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificate } from '../../../shared/models/certificate.model';

@Injectable({ providedIn: 'root' })
export class CertificateApiService {

  constructor(private http: HttpClient) {}

  getCertificatesByUser(userId: number): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(
      `/certificates/user/${userId}`
    );
  }

  downloadCertificate(id: number) {
    return this.http.get(
      `/certificates/download/${id}`,
      { responseType: 'blob' }
    );
  }
}