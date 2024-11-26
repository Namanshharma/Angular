import { Component, ElementRef, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
    "(click)": 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = "control";
  // @HostListener('click') onClick() {
  //   console.log("Host Clicked");
  // }
  @Input({ required: true }) Label !: string;
  private elementRef = inject(ElementRef);

  onClick() {
    console.log('clicked');
    console.log(this.elementRef);
  }
}