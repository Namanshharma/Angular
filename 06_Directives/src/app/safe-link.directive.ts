import { Directive } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',// here in the selector we can use the app-safeLink but then it will be tough to differentiate the difference between the component and directive selector
  standalone: true,          // like here we have used the attribute selector
  host: {
    "(click)": "onConfirmToLeavePage($event)"
  }
})
export class SafeLinkDirective {
  onConfirmToLeavePage(event: MouseEvent) {
    const z = window.confirm("Do you want to leave the page ? ");
    if (z) return;
    else {
      event.preventDefault()
    }
  }
}
