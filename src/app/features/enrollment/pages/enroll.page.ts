import { Component, Input } from '@angular/core';
import { EnrollmentApiService } from '../services/enrollment-api.service';
import { SHARED_IMPORTS } from '../../../shared/shared.imports';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: SHARED_IMPORTS,
  template: `
    <button
      class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
      (click)="enroll()"
      [disabled]="loading || success"
    >
      {{ success ? 'Enrolled' : loading ? 'Enrolling...' : 'Enroll' }}
    </button>

    <p *ngIf="success" class="text-green-600 mt-2">
      Enrolled successfully ✅
    </p>
  `
})
export class EnrollPage {

  @Input() courseId!: number;

  userId = 1;        // TEMP (later from auth)
  loading = false;
  success = false;

  constructor(private api: EnrollmentApiService) {}

  enroll(): void {
    if (!this.courseId) {
      alert('Invalid course');
      return;
    }

    this.loading = true;

    this.api.enroll(this.userId, this.courseId).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
      },
      error: () => {
        alert('Enrollment failed');
        this.loading = false;
      }
    });
  }
}
