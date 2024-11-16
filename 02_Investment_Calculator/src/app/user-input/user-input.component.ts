import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { calculatedDataIn } from '../../Models';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculateInvestment: EventEmitter<calculatedDataIn> = new EventEmitter<calculatedDataIn>();
  InitialInvestment: string | number = "0";
  AnnualInvestment: string | number = "0";
  Duration: string | number = "0";
  ExpectedReturn: string | number = "0";

  onSubmit(): void {
    this.calculateInvestment.emit({
      initialInvestment: Number(this.InitialInvestment),
      annualInvestment: Number(this.AnnualInvestment),
      duration: Number(this.Duration),
      expectedReturn: Number(this.ExpectedReturn)
    })
    this.InitialInvestment = 0;
    this.AnnualInvestment = 0;
    this.Duration = 0;
    this.ExpectedReturn = 0;
  }
}
