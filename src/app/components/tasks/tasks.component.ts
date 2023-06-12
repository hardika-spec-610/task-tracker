import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = []
  constructor(private tasksService: TaskService) { }
  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => this.tasks = tasks);
  } // void this paricular fuction dosen't return anything
} 
