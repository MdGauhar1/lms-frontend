import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardApiService } from '../services/dashboard-api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit {

  userId = 1;

  enrollments: any[] = [];
  progress: any[] = [];
  certificates: any[] = [];

  constructor(private api: DashboardApiService) {}

  ngOnInit(): void {

    this.api.getEnrollments(this.userId)
      .subscribe(res => this.enrollments = res);

    this.api.getProgress(this.userId)
      .subscribe(res => this.progress = res);

    this.api.getCertificates(this.userId)
      .subscribe(res => this.certificates = res);
  }
}
