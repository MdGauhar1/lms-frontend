import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonApiService } from '../services/lesson-api.service';
import { ProgressApiService } from '../../progress/services/progress-api.service';

import { Lesson } from '../../../shared/models/lesson.model';

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-3">

      <div
        *ngFor="let lesson of lessons"
        class="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">

        <div>
          <p class="font-medium text-gray-800">
            {{ lesson.lessonOrder }}. {{ lesson.title }}
          </p>
        </div>

        <div class="flex gap-3 items-center">

          <!-- WATCH BUTTON -->
          <a
            [href]="lesson.videoUrl"
            target="_blank"
            class="text-blue-600 text-sm hover:underline">
            ▶ Watch
          </a>

          <!-- COMPLETE BUTTON -->
          <button
            (click)="completeLesson(lesson.id!)"
            [disabled]="completedLessons.has(lesson.id!)"
            class="px-3 py-1 text-sm rounded text-white transition"
            [ngClass]="{
              'bg-green-600 hover:bg-green-700': !completedLessons.has(lesson.id!),
              'bg-gray-400 cursor-not-allowed': completedLessons.has(lesson.id!)
            }">

            {{ completedLessons.has(lesson.id!) ? '✔ Completed' : '✓ Complete' }}

          </button>

        </div>

      </div>

      <p *ngIf="lessons.length === 0" class="text-gray-500">
        No lessons available
      </p>

    </div>
  `
})
export class LessonListPage implements OnInit {

  @Input({ required: true }) courseId!: number;

  lessons: Lesson[] = [];
  userId = 1; // TEMP until auth integration

  // ✅ store completed lessons locally
  completedLessons = new Set<number>();

  constructor(
    private lessonApi: LessonApiService,
    private progressApi: ProgressApiService
  ) {}

  ngOnInit(): void {
    if (!this.courseId) return;

    this.lessonApi
      .getLessonsByCourse(this.courseId)
      .subscribe({
        next: res => {
          this.lessons = res;
        },
        error: err => console.error('Lesson load failed', err)
      });
  }

  completeLesson(lessonId: number) {

    // prevent duplicate click
    if (this.completedLessons.has(lessonId)) return;

    this.progressApi
      .markLessonComplete(this.userId, this.courseId, lessonId)
      .subscribe({
        next: () => {
          // ✅ update UI instantly
          this.completedLessons.add(lessonId);
        },
        error: err => {
          console.error('Progress update failed', err);
          alert('Failed to mark lesson ❌');
        }
      });
  }
}
















// import { Component, Input, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { LessonApiService } from '../services/lesson-api.service';
// import { ProgressApiService } from '../../progress/services/progress-api.service';

// import { Lesson } from '../../../shared/models/lesson.model';

// @Component({
//   selector: 'app-lesson-list',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <div class="space-y-3">

//       <div
//         *ngFor="let lesson of lessons"
//         class="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">

//         <div>
//           <p class="font-medium text-gray-800">
//             {{ lesson.lessonOrder }}. {{ lesson.title }}
//           </p>
//         </div>

//         <div class="flex gap-3 items-center">
//           <a
//             [href]="lesson.videoUrl"
//             target="_blank"
//             class="text-blue-600 text-sm hover:underline">
//             ▶ Watch
//           </a>

//           <button
//             (click)="completeLesson(lesson.id!)"
//             class="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
//             ✓ Complete
//           </button>
//         </div>

//       </div>

//       <p *ngIf="lessons.length === 0" class="text-gray-500">
//         No lessons available
//       </p>

//     </div>
//   `
// })
// export class LessonListPage implements OnInit {

//   @Input({ required: true }) courseId!: number;

//   lessons: Lesson[] = [];
//   userId = 1; // TEMP (later from auth)

//   constructor(
//     private lessonApi: LessonApiService,
//     private progressApi: ProgressApiService
//   ) {}

//   ngOnInit(): void {
//     if (!this.courseId) return;

//     this.lessonApi
//       .getLessonsByCourse(this.courseId)
//       .subscribe({
//         next: res => this.lessons = res,
//         error: err => console.error('Lesson load failed', err)
//       });
//   }

//   completeLesson(lessonId: number) {
//     this.progressApi
//       .markLessonComplete(this.userId, this.courseId, lessonId)
//       .subscribe({
//         next: () => alert('Lesson marked complete ✅'),
//         error: () => alert('Failed to mark lesson ❌')
//       });
//   }
// }
