import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',// here in the selector we can use the app-safeLink but then it will be tough to differentiate the difference between the component and directive selector
  standalone: true,          // like here we have used the attribute selector
  host: {
    "(click)": "onConfirmToLeavePage($event)"
  }
})

// this one is the attribute directive

export class SafeLinkDirective {
  @Input() queryAddress: string = "testing";
  // @Input({ alias: "appSafeLink" }) queryAddress: string = "testing";   // use this ALIAS property so use that queryAddress here in the ts file where as in the rest of the other files 
  // we will use that appSafeLink alias 

  onConfirmToLeavePage(event: MouseEvent) {
    const z = window.confirm("Do you want to leave the page ? ");
    if (z) {
      const queryParam = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = `${queryParam}?from=${this.queryAddress}`;
      return;
    }
    else {
      event.preventDefault()
    }
  }
}
