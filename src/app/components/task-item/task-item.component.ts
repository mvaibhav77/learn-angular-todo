import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task: Task = { id: 0, text: '', day: '', reminder: false };
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  faTimes = faTimes;
}
