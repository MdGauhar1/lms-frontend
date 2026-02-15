// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CertificateApiService } from '../services/certificate-api.service';
// import { Certificate } from '../../../shared/models/certificate.model';

// @Component({
//   selector: 'app-certificates',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">

//       <!-- PAGE TITLE -->
//       <div class="max-w-7xl mx-auto mb-10">
//         <h2 class="text-4xl font-extrabold tracking-tight">
//           🎓 My Certificates
//         </h2>
//         <p class="text-gray-400 mt-1">
//           Download and view certificates you’ve earned
//         </p>
//       </div>

//       <!-- EMPTY STATE -->
//       <div
//         *ngIf="certificates.length === 0"
//         class="max-w-7xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center text-gray-400"
//       >
//         No certificates issued yet
//       </div>

//       <!-- CERTIFICATE LIST -->
//       <div
//         *ngIf="certificates.length > 0"
//         class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//       >
//         <div
//           *ngFor="let c of certificates"
//           class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:border-white/20 hover:scale-[1.03] transition-all duration-300"
//         >
//           <div class="flex items-center justify-between mb-4">
//             <span class="text-sm font-medium text-blue-400">
//               Course #{{ c.courseId }}
//             </span>

//             <span class="text-xs text-gray-400">
//               {{ c.issuedAt | date:'mediumDate' }}
//             </span>
//           </div>

//           <div class="flex items-center gap-3 mt-4">
//             <a
//               [href]="c.certificateUrl"
//               target="_blank"
//               class="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-black text-sm font-semibold rounded-lg hover:bg-amber-400 transition"
//             >
//               📄 View Certificate
//             </a>
//           </div>
//         </div>
//       </div>

//     </div>
//   `
// })
// export class CertificatesPage implements OnInit {

//   certificates: Certificate[] = [];
//   userId = 1; // TEMP (later from auth)

//   constructor(private api: CertificateApiService) {}

//   ngOnInit(): void {
//     this.api
//       .getCertificatesByUser(this.userId)
//       .subscribe(res => this.certificates = res);
//   }
// }








import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateApiService } from '../services/certificate-api.service';
import { Certificate } from '../../../shared/models/certificate.model';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">

      <div class="max-w-7xl mx-auto mb-10">
        <h2 class="text-4xl font-extrabold tracking-tight">
          🎓 My Certificates
        </h2>
        <p class="text-gray-400 mt-1">
          Download and view certificates you’ve earned
        </p>
      </div>

      <div
        *ngIf="certificates.length === 0"
        class="max-w-7xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center text-gray-400"
      >
        No certificates issued yet
      </div>

      <div
        *ngIf="certificates.length > 0"
        class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          *ngFor="let c of certificates"
          class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:border-white/20 hover:scale-[1.03] transition-all duration-300"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-blue-400">
              Course #{{ c.courseId }}
            </span>

            <span class="text-xs text-gray-400">
              {{ c.issuedAt | date:'mediumDate' }}
            </span>
          </div>

          <div class="flex items-center gap-3 mt-4">
            <button
              (click)="viewCertificate(c.id)"
              class="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-black text-sm font-semibold rounded-lg hover:bg-amber-400 transition"
            >
              📄 View Certificate
            </button>
          </div>
        </div>
      </div>

    </div>
  `
})
export class CertificatesPage implements OnInit {

  certificates: Certificate[] = [];
  userId = 1; // later replace with JWT user id

  constructor(private api: CertificateApiService) {}

  ngOnInit(): void {
    this.api
      .getCertificatesByUser(this.userId)
      .subscribe(res => this.certificates = res);
  }

  viewCertificate(id: number) {
    this.api.downloadCertificate(id).subscribe(blob => {

      const fileURL = URL.createObjectURL(blob);

      window.open(fileURL);

    });
  }
}