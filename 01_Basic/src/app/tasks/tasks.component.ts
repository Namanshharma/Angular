import { Component, Input } from '@angular/core';
import { dummayTask, obj } from '../Models';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummyTasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) detailsOfSelectedUser!: obj
  dummyTasks: dummayTask[] = dummyTasks;

  onSelectionOfTask(selectedTask: dummayTask): void {
    debugger;
    console.log(selectedTask);
    this.dummyTasks = this.dummyTasks.filter(x => x.id !== selectedTask.id);
    console.log(this.dummyTasks);
  }
}
