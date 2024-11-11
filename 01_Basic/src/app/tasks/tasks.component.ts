import { Component, Input } from '@angular/core';
import { dummayTask, obj } from '../Models';
import { dummyTasks } from '../dummyTasks';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) detailsOfSelectedUser!: obj
  dummyTasks: dummayTask[] = dummyTasks;
  addTaskClicked: boolean = false;

  constructor(private taskService: TasksService) { };

  // this method is used to get the tasks based on user ID
  onSelectionOfTask(selectedTask: dummayTask): void {
    // this.dummyTasks = this.dummyTasks.filter(x => x.id !== selectedTask.id);
    this.taskService.getUserTasks(selectedTask.userId)
  }

  onAddTask(): void {
    this.addTaskClicked = true;
  }

  onCloseTask(): void {
    this.addTaskClicked = false;
  }

  // addTaskInDummyTasks(data: addTask): void {
  //   this.dummyTasks.push({
  //     active: "1",
  //     dueDate: data.DueDate,
  //     summary: data.Summary,
  //     title: data.Title,
  //     userId: this.detailsOfSelectedUser.id,
  //     id: new Date().getTime().toString()
  //   });
  //   this.addTaskClicked = false;
  // }
}
