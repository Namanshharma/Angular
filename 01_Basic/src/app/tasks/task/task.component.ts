import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dummayTask } from '../../Models';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, CardComponent],
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
