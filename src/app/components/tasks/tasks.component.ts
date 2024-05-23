import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { NgFor } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent, NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksService: TaskService) {}

  deleteTask(task: Task) {
    this.tasksService.deleteTask(task).subscribe();
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
