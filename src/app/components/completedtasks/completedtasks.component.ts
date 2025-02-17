import { CommonModule } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-completedtasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './completedtasks.component.html',
  styleUrl: './completedtasks.component.css'
})
export class CompletedtasksComponent {
  @Input() completedTodos: string[] = [];
}
