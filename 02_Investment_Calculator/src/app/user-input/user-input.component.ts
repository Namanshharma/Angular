import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculateInvestment: EventEmitter<any> = new EventEmitter<any>();
  InitialInvestment: string | number = "0";
  AnnualInvestment: string | number = "0";
  Duration: string | number = "0";
  ExpectedReturn: string | number = "0";

  onSubmit(): void {

  }
}
