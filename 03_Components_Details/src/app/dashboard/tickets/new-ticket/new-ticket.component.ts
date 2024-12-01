import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {

  @ViewChild('form') form?: ElementRef<HTMLFormElement>;    // by using this view Child decorator we can access the every variable in the template also we can use the component as well.

  enteredTitle !: string;
  enteredText !: string;

  ngOnInit(): void {
    console.log(this.form?.nativeElement)
  }

  ngAfterViewInit(): void {
    console.log(this.form?.nativeElement)
  }

  // onSubmit(title: HTMLInputElement, text: HTMLTextAreaElement, form: HTMLFormElement): void {
  //   this.enteredTitle = title;
  //   this.enteredText = text;
  //   form.reset();
  // }

  onSubmit(title: string, text: string): void {
    this.enteredTitle = title;
    this.enteredText = text;
    this.form?.nativeElement.reset();
  }
}
