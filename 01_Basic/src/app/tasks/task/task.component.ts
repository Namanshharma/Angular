import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dummayTask } from '../../Models';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: dummayTask
  @Output() seletedTask: EventEmitter<dummayTask> = new EventEmitter<dummayTask>();

  onClickComplete(): void {
    this.seletedTask.emit(this.task);
  }
}
