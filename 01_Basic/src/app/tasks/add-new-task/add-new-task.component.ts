import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addTask } from '../../Models';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [FormsModule, CardComponent],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css'
})
export class AddNewTaskComponent {
  @Input({ required: true }) userId !: string;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  // @Output() addTask: EventEmitter<addTask> = new EventEmitter<addTask>();

  private tasksService = inject(TasksService);

  enteredTitle !: string;
  enteredSummary !: string;
  enteredDueDate !: string;

  onCancel(): void {
    this.close.emit();
  }

  // onSubmitDetails(): void {
  //   this.addTask.emit({
  //     Title: this.enteredTitle,
  //     Summary: this.enteredSummary,
  //     DueDate: this.enteredDueDate
  //   })
  // }

  onSubmitDetails(): void {
    debugger;
    this.tasksService.addTask({
      Title: this.enteredTitle,
      Summary: this.enteredSummary,
      DueDate: this.enteredDueDate
    }, this.userId);
    this.close.emit();
  }
}
