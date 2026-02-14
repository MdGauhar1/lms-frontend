import { Component, Input, OnInit } from '@angular/core';
import { ProgressApiService } from '../services/progress-api.service';
import { SHARED_IMPORTS } from '../../../shared/shared.imports';
import { Progress } from '../../../shared/models/progress.model';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [SHARED_IMPORTS],
  template: `
    <div *ngIf="loading">Loading progress...</div>

    <div *ngIf="!loading && progress.length === 0">
      No progress yet 📘
    </div>

    <ul *ngIf="progress.length">
      <li *ngFor="let p of progress">
        Lesson {{ p.lessonId }} :
        <span [style.color]="p.completed ? 'green' : 'red'">
          {{ p.completed ? 'Completed ✅' : 'Pending ❌' }}
        </span>
      </li>
    </ul>
  `
})
export class ProgressPage implements OnInit {

  @Input() userId!: number;
  @Input() courseId!: number;

  progress: Progress[] = [];
  loading = true;

  constructor(private api: ProgressApiService) {}

  ngOnInit() {
    this.api.getProgress(this.userId, this.courseId)
      .subscribe(res => {
        this.progress = res;
        this.loading = false;
      });
  }
}
