import { Injectable } from '@angular/core';
import { addTask, dummayTask } from '../Models';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
      active: '1'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
      active: '1'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
      active: '1'
    }
  ];

  constructor() {
    const task = localStorage.getItem("tasks");
    if (task) {
      this.dummyTasks = JSON.parse(task);
    }
  }

  private saveTask() {
    localStorage.setItem("tasks", JSON.stringify(this.dummyTasks));
  }

  getUserTasks(userId: string): dummayTask[] {
    return this.dummyTasks = this.dummyTasks.filter(x => x.userId !== userId);
  }

  addTask(task: addTask, userId: string): void {
    this.dummyTasks.push({
      active: "1",
      dueDate: task.DueDate,
      summary: task.Summary,
      title: task.Title,
      userId: userId,
      id: new Date().getTime().toString()
    });
    this.saveTask();
  }

  removeTask(taskId: string): void {
    this.dummyTasks = this.dummyTasks.filter(x => x.id !== taskId);
    this.saveTask();
  }
}
