import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="empty">
      {{ message }}
    </div>
  `,
  styles: [`
    .empty {
      padding: 20px;
      text-align: center;
      color: gray;
      font-style: italic;
    }
  `]
})
export class EmptyStateComponent {
  @Input() message = 'No data available';
}
