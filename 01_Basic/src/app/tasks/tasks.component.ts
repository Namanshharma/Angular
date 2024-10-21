import { Component, Input } from '@angular/core';
import { addTask, dummayTask, obj } from '../Models';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummyTasks';
import { AddNewTaskComponent } from "./add-new-task/add-new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddNewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) detailsOfSelectedUser!: obj
  dummyTasks: dummayTask[] = dummyTasks;
  addTaskClicked: boolean = false;

  onSelectionOfTask(selectedTask: dummayTask): void {
    this.dummyTasks = this.dummyTasks.filter(x => x.id !== selectedTask.id);
  }

  onAddTask(): void {
    this.addTaskClicked = true;
  }

  onCancelTask(): void {
    this.addTaskClicked = false;
  }

  addTaskInDummyTasks(data: addTask): void {
    this.dummyTasks.push({
      active: "1",
      dueDate: data.DueDate,
      summary: data.Summary,
      title: data.Title,
      userId: this.detailsOfSelectedUser.id,
      id: new Date().getTime().toString()
    });
    this.addTaskClicked = false;
  }
}
