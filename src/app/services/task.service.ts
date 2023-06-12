import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTasks(): Observable<Task[]> {     // task as an observable
    const tasks = of(TASKS) // this is observable,so we can't do direct return
    return tasks
  }
  constructor() { }
}
