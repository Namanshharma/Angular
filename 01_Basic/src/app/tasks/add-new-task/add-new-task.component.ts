import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addTask } from '../../Models';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css'
})
export class AddNewTaskComponent {
  @Output() CloseAddNewTask: EventEmitter<void> = new EventEmitter<void>();
  @Output() addTask: EventEmitter<addTask> = new EventEmitter<addTask>();

  enteredTitle !: string;
  enteredSummary !: string;
  enteredDueDate !: string;

  onCancel(): void {
    this.CloseAddNewTask.emit();
  }

  onSubmitDetails(): void {
    this.addTask.emit({
      Title: this.enteredTitle,
      Summary: this.enteredSummary,
      DueDate: this.enteredDueDate
    })
  }
}
